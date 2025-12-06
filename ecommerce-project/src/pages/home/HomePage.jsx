import axios from 'axios';
import { useEffect, useState } from 'react';
import './HomePage.css';
import { Header } from '../../components/Header';
import { ProductGrid } from './ProductGrid';

export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://friendly-space-fishstick-r597pj9vw9q2rpv-3000.app.github.dev/api/products')
            .then((response) => {
                setProducts(response.data)
            });
    }, []); //Only after component is created.
    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="home.png" />
            <Header cart={cart} />
            <div className="home-page">
                <ProductGrid products={products} />
            </div>
        </>
    )
}