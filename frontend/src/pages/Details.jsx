import { useLocation } from 'react-router-dom';
import styles from '../styles/Details.module.css';

export default function Details() {
  const location = useLocation();
  const { from, product } = location.state || {};

  if (!product) return <div className={styles.main}>Product details not available!</div>;

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <img className={styles.productImage} src={product.image_path} alt={`${product.title} - ${product.category}`}></img>
      </div>
      <section className={styles.container}>
        <p className={styles.productTitle}>{product.title}</p>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
        <p className={styles.productTier}>{product.tier.toUpperCase()} TIER {product.category.toUpperCase()}</p>
        <p className={styles.productDetail1}>{product.detail_1}</p>
        <p className={styles.productDetail2}>{product.detail_2}</p>
        <p className={styles.productDescription}>{product.description}</p>
        <button onClick={() => alert('Added to cart')} className={styles.cartButton}>Add To Cart</button>
        <p className={styles.productStock}><span style={{ color: product.stock < 6 ? 'red' : 'white' }} id="stock">{product.stock}</span> IN STOCK!</p>
      </section>
    </main>
  )
}
