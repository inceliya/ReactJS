export default function Image({ url, title }) {
    return (
        <>
            <div className="header">{title}</div>
            <img src={url} alt={title}/>
        </>
    )
};