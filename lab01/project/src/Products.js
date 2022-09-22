import Product from "./Product";

function Products() {
    const products = [
        {id: 1, title: "Product 1", price: 10},
        {id: 2, title: "Product 2", price: 20},
        {id: 3, title: "Product 3", price: 30},
    ]

    return (
        <>
            <h1>Buy our products:</h1>
            {products.map(p => <Product key={p.id} id={p.id} title={p.title} price={p.price}/>)}
        </>
    );
}

export default Products;