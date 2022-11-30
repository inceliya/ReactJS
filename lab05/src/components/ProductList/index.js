import styles from './ProductList.module.css';
import { Link } from "react-router-dom";

function ProductList({ products }) {
    return (
        <>
            <div className={styles.body}>
                {products.map(p => (
                    <div key={p.id} className={styles.product}>
                        <div className={styles.thumbnail}>
                            <Link className={styles.title} to={`/products/${p.id}`}>
                                <img src={p.thumbnail} alt={p.title} />
                            </Link>
                        </div>
                        <div>
                            <Link className={styles.title} to={`/products/${p.id}`}>
                                <p>{p.title}</p>
                            </Link>
                            <p className={styles.text}>{p.brand}</p>
                            <p className={styles.text}>{p.category}</p>
                            <p className={styles.text}>{p.description}</p>
                            <p className={styles.discount}>
                                Discount: -{p.discountPercentage}%
                            </p>
                            <p className={styles.price}>
                                {p.price}$
                            </p>
                            <p>Rating: {p.rating}</p>
                            <p>Stock: {p.stock}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductList;