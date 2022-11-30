import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../ProductList";

function Category() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/' + category)
            .then(response => {
                response.json().then((result) => setProducts(result.products))
            });
    }, [category]);

    return <ProductList products={products} />;
}

export default Category;