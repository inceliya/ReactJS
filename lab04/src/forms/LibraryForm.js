import { useForm } from "react-hook-form";
import * as yup from "yup";
import Places from "../controls/Places";
import Select from "../controls/Select";
import Input from "../controls/Input";


const schema = yup.object({
    places: yup.array().of(yup.object().shape({
        placeCount: yup.number().min(1).max(100),
        placePrice: yup.number().min(1).max(100),
        placeWeight: yup.number().min(1).max(100),
        placeWidth: yup.number().min(1).max(100),
        placeHeight: yup.number().min(1).max(100),
        placeLength: yup.number().min(1).max(100),
        packaging: yup.string().required()
    })).required(),
    cityFrom: yup.string().required(),
    cityTo: yup.string().required(),
    type: yup.string().required(),
    isPackaging: yup.bool(),
    floor: yup.string(),
    lift: yup.bool(),
    returnShipping: yup.bool(),
});

const cities = ["", "Житомир", "Київ", "Одеса", "Львів", "Луцьк"];
const types = ["Палети", "Вантажі"];
const returnShippingTypes = ["Документи", "Грошовий переказ"];
const packageTypes = ["Пакет", "Конверт", "Коробка"];


const defaultValues = {
    places: [
        {
            placeCount: 1,
            placePrice: 0,
            placeWeight: 0,
            placeWidth: 0,
            placeHeight: 0,
            placeLength: 0,
            packaging: "Пакет",
        },
    ],
};

const useYupValidationResolver = (schema) => {
    return async (data) => {
        try {
            await schema.validate(data, { abortEarly: false });
            return { values: data, errors: {} };
        } catch (e) {
            console.log({
                values: {},
                errors: e.inner.reduce((allErrors, currentError) => {
                    return {
                        ...allErrors,
                        [currentError.path]: {
                            type: currentError.type,
                            message: currentError.message,
                        },
                    };
                }, {}),
            });

            return {
                values: {},
                errors: e.inner.reduce((allErrors, currentError) => {
                    return {
                        ...allErrors,
                        [currentError.path]: {
                            type: currentError.type,
                            message: currentError.message,
                        },
                    };
                }, {}),
            };
        }
    };
}

export default function LibraryForm() {
    const resolver = useYupValidationResolver(schema);

    const { handleSubmit, register, control, watch } = useForm({ defaultValues, resolver });
    const isreturnShipping = watch("returnShipping");

    return (
        <form onSubmit={handleSubmit(console.log)}>
            <div>
                <span>Маршрут</span>
                <div>
                    <Select name="cityFrom" options={cities} register={register} caption="Місто-відправник" />
                </div>
                <div>
                    <Select name="cityTo" options={cities} register={register} caption="Місто-одержувач" />
                </div>
            </div>
            <div>
                <Select name="type" options={types} register={register} caption="Вид відправлення" />
            </div>
            <Places name="places" register={register} control={control} watch={watch} packageTypes={packageTypes} />
            <div>
                <Input type="checkbox" name="isPackaging" register={register} caption='Послуга "Пакування"' />
            </div>
            <div>
                <Input type="number" name="floor" register={register} caption='Послуга "Підйом на поверх"' />
                <Input type="checkbox" name="lift" register={register} caption='Ліфт' />
            </div>
            <div>
                <Input type="checkbox" name="returnShipping" register={register} caption='Послуга "Зворотна доставка"' />
            </div>
            {isreturnShipping &&
                <div>
                    <Select name="returnShippingType" options={returnShippingTypes} register={register} caption='Вид зворотної доставки' />

                </div>
            }
            <input type="submit" key="submit" />
            <input type="reset" key="reset"/>
        </form>
    )
}