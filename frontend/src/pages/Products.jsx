import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from "../styles/Products.module.css";

export default function Products() {
    const [products, setProducts] = useState([]);
    const[allProducts, setAllProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('/api/products', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) throw new Error('Error: invalid response');
            return res.json();
        })
        .then(data => {
            setProducts(data);
            setAllProducts(data);
        })
        .catch(err => console.log(err));
    }, [])
        
    function filterHandler(e) {
        const category = e.target.value;
        if (category == 'all') {
            setProducts(allProducts);
        } else {
            const filteredProducts = allProducts.filter((product) => product.category === category);
            setProducts(filteredProducts);
        }
        console.log('after', products);
    }

    function sortHandler(e) {
        const alphaSortedProducts = products.toSorted((a, b) => {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();

            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        })

        switch (e.target.value) {
            case 'lowprice': {
                const sortedProducts = products.toSorted((a, b) => a.price - b.price)
                setProducts(sortedProducts);
            }
                break;
            case 'highprice': {
                const sortedProducts = products.toSorted((a, b) => b.price - a.price)
                setProducts(sortedProducts);
            }
                break;
            case 'atoz':
                setProducts(alphaSortedProducts);
                console.log(products);
                break;
            case 'ztoa':
                setProducts(alphaSortedProducts.reverse());
                console.log(products);
                break;
            default:
                setProducts(products);
                break;
        }
    }

    function searchHandler(e) {
        const search = e.target.value;
        setSearch(search);
        const searchProducts = allProducts.filter((product) => {
            let isMatch = false;
            const wordsInTitle = product.title.split(' ');

            for (const word of wordsInTitle) {
                if (word.substring(0, search.length).toLowerCase() == search.toLowerCase()) return isMatch = true;
            }
            
            return isMatch;
        });
        setProducts(searchProducts);
    }

    function submissionHandler(e) {
        e.preventDefault();
        console.log('submmited');
    }

    return (
        <div className={styles.container}>
            <aside className={styles.search}>
                <form className={styles.searchForm} onSubmit={(e) => submissionHandler(e)}>
                    <input onChange={(e) => searchHandler(e)} type="text" placeholder="Search Term"/>
                    <input type="submit" value="Search"/>
                    <label htmlFor="filter">Filter:</label>
                    <select onChange={(e) => filterHandler(e)} id='filter'>
                        <option value="all">Show All</option>
                        <option value="desktop">Desktops</option>
                        <option value="laptop">Laptops</option>
                        <option value="accessory">Accessories</option>
                    </select>
                    <label htmlFor="sort">Sort By:</label>
                    <select onChange={(e) => sortHandler(e)} value={search} id='sort'>
                        <option value="lowprice">Price: Low to High</option>
                        <option value="highprice">Price: High to Low</option>
                        <option value="atoz">Name: A to Z</option>
                        <option value="ztoa">Name: Z to A</option>
                    </select>
                </form>
            </aside>
            {products.map((product, i) => {
                return (
                <Link to="/details" state={{from: 'Products', 'product': product}} key={i}>
                    <div className={styles.product}>
                        <div className={styles.productImage} style={{ backgroundImage: `url(${product.image_path})` }}></div>
                        <p className={styles.productName}>{product.title}</p>
                        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
                        <p className={styles.productDescription}>{product.description}</p>
                        <button className={styles.cartButton}>Learn more</button>
                    </div>
                </Link>
                )})}
        </div>
    )
}
