import {useFormContext} from "react-hook-form";
import styles from "./ValidatingForm.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function Space(props) {
    const {register, errors} = useFormContext();
    const {index, type, removeSpace, palettes, packages} = props;

    return(
        <div className={styles.row}>
            {type === "palette" && (
                <>
                    <div className={styles.inputBox}>
                        <label htmlFor={`spaces[${index}].paletteType`}>Тип палети</label>
                        <select defaultValue="" id={`spaces[${index}].paletteType`} {...register(`spaces[${index}].paletteType`)}>
                            <option value="" disabled hidden>Оберіть тип палети</option>
                            {palettes.map(palette => <option key={palette.id.toString()}
                                                             value={palette.value}>{palette.label}</option>)}
                        </select>
                        <span className={styles.error}>{errors[`spaces[${index}].paletteType`]?.message}</span>
                    </div>

                    <div className={styles.inputBox}>
                        <label htmlFor={`spaces[${index}].count`}>Кількість палет</label>
                        <input type="number" id={`spaces[${index}].count`}
                                 {...register(`spaces[${index}].count`)}/>
                        <span className={styles.error}>{errors[`spaces[${index}].count`]?.message}</span>
                    </div>

                    <div className={styles.inputBox}>
                        <label htmlFor={`spaces[${index}].cost`}>Оголошена вартість, грн</label>
                        <input id={`spaces[${index}].cost`}
                               {...register(`spaces[${index}].cost`)}/>
                        <span className={styles.error}>{errors[`spaces[${index}].cost`]?.message}</span>
                    </div>


                </>
            )}

            {type === "cargo" && (
                <>
                    <div className={styles.inputBox}>
                        <label htmlFor={`spaces[${index}].count`}>Кількість</label>
                        <input type="number" id={`spaces[${index}].count`}
                                 {...register(`spaces[${index}].count`)}/>
                        <span className={styles.error}>{errors[`spaces[${index}].count`]?.message}</span>
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor={`spaces[${index}].weight`}>Вага, кг</label>
                        <input id={`spaces[${index}].weight`}
                                    {...register(`spaces[${index}].weight`)}/>
                        <span className={styles.error}>{errors[`spaces[${index}].weight`]?.message}</span>
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor={`spaces[${index}].cost`}>Оголошена вартість, грн</label>
                        <input id={`spaces[${index}].cost`} {...register(`spaces[${index}].cost`)}/>
                        <span className={styles.error}>{errors[`spaces[${index}].cost`]?.message}</span>
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor={`spaces[${index}].length`}>Довжина, см</label>
                        <input type="number" id={`spaces[${index}].length`}
                                    {...register(`spaces[${index}].length`)}/>
                        <span className={styles.error}>{errors[`spaces[${index}].length`]?.message}</span>
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor={`spaces[${index}].width`}>Ширина, см</label>
                        <input type="number" id={`spaces[${index}].width`}
                                    {...register(`spaces[${index}].width`)}/>
                        <span className={styles.error}>{errors[`spaces[${index}].width`]?.message}</span>
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor={`spaces[${index}].height`}>Висота, см</label>
                        <input type="number" id={`spaces[${index}].height`}
                                    {...register(`spaces[${index}].height`)}/>
                        <span className={styles.error}>{errors[`spaces[${index}].height`]?.message}</span>
                    </div>
                </>
            )}

            {index > 0 && (<FontAwesomeIcon icon={faTrashAlt} onClick={() => removeSpace(index)}/>)}
        </div>
    )
}