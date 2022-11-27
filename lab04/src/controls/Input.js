export default function Input({ name, register, caption, ...props }) {
    return (
        <>
            <label htmlFor={name}>{caption}</label>
            <input {...register(name)} {...props} />
        </>
    );
};