import axios from 'axios';
import { useEffect, useState } from 'react';
import './HomePage.css';
import { Header } from '../../components/Header';
import { ProductGrid } from './ProductGrid';

export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('https://bookish-space-memory-r597pj9v6vx3wjrp-3000.app.github.dev/api/products');
            setProducts(response.data)
        }
        getHomeData();
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