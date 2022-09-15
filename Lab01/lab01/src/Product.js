function Product({id, title, price}) {
    return (
        <div>
            <h2>{title}</h2>
            <i>Id: {id}</i>
            <br />
            <span>Price: {price}</span>
        </div>
    );
}

export default Product;