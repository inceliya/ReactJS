export default function Select({ options, name, register, caption, ...props }) {
    return (
        <>
            <label htmlFor={name}>{caption}</label>
            <select {...register(name)} {...props}>
                {options.map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>
        </>
    );
};