import { useState, useEffect } from "react";
import styles from "./Products.module.css";

export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/products', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) throw new Error('Error: invalid response')
                return res.json()
            })
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={styles.container}>
            {products.map((product, i) => {
                return (<div key={i}>
                    <div className={styles.productImage} style={{ backgroundImage: `url(${product.image_path})` }}></div>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                </div>)
            })}
        </div>
    )
}
