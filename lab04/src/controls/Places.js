import Select from "./Select";
import Input from "./Input";
import { useFieldArray } from "react-hook-form";

export default function Places({ control, name, packageTypes, register, watch }) {
    const { fields, append, remove } = useFieldArray({ name: 'places', control, rules: { required: "Хоча б 1 місце є обов'язковим" } });
    const isPackaging = watch('isPackaging');

    return (
        <div className="places">
            {fields.map(({ id, placeCount, placePrice, placeWeight, placeWidth, placeHeight, placeLength }, index) => (
                <div key={id}>
                    <Input min="0" max="100" type="number" name={`${name}.${index}.placeCount`} defaultValue={placeCount} register={register} caption='Кількість' />
                    <Input min="0" max="100" type="number" name={`${name}.${index}.placePrice`} defaultValue={placePrice} register={register} caption='Вартість' />
                    <Input min="0" max="100" type="number" name={`${name}.${index}.placeWeight`} defaultValue={placeWeight} register={register} caption='Вага' />
                    <Input min="0" max="100" type="number" name={`${name}.${index}.placeWidth`} defaultValue={placeWidth} register={register} caption='Ширина' />
                    <Input min="0" max="100" type="number" name={`${name}.${index}.placeHeight`} defaultValue={placeHeight} register={register} caption='Висота' />
                    <Input min="0" max="100" type="number" name={`${name}.${index}.placeLength`} defaultValue={placeLength} register={register} caption='Довжина' />
                    {fields.length > 1 && <button type="button" onClick={() => remove(index)}>X</button>}
                </div>
            ))}
            <button min="0" max="100" type="button" onClick={() => append({
                placeCount: 1,
                placePrice: 0,
                placeWeight: 0,
                placeWidth: 0,
                placeHeight: 0,
                placeLength: 0,
                packaging: "Пакет",
            })}>
                Додати місце
            </button>
            {isPackaging && fields.map((f, index) => {
                const count = watch(`places.${index}.placeCount`);
                return (
                    <div key={f.id}>
                        <Select name={`${name}.${index}.packaging`} register={register} options={packageTypes} caption='Вид пакування' />
                        <span>Кількість: {count}</span>
                    </div>
                )
            })}
        </div>
    )
};