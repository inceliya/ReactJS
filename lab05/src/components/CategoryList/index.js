import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(response => {
                response.json().then(setCategories);
            });
    }, []);

    return (
        <ul>
            {categories.map(category => (
                <li key={category}>
                    <Link to={`/categories/${category}/products`}>
                        {category}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default CategoryList;