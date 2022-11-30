import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductList from "../ProductList";

function Search() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=' + query)
      .then(response => {
        response.json().then((result) => setProducts(result.products))
      });
  }, [query]);

  return <ProductList products={products} />;
}

export default Search;