import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('https://dummyjson.com/products/' + id)
      .then(response => {
        response.json().then((result) => setProduct(result))
      });
  }, [id]);

  return (
    <div>
      <div>
        <h1>{product.title}</h1>
      </div>
      <div>
        {product.images?.map((image, i) =>
          <img key={image + i} src={image} alt={product.title} />
        )}
      </div>
      <div>
        <p>{product.brand}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p>{product.price}$</p>
        <p>Discount: -{product.discountPercentage}%</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
      </div>
    </div>
  )
}

export default Product;