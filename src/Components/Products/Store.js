import React, { useEffect, useState } from 'react';
import Laptop from './Laptop/Laptop';
import './Store.css'
const Store = () => {
    const [laptops, setLaptops] = useState([0]);

    const [cart, setCart] = useState([0]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setLaptops(data))

    }, []);

    const handleAddToCart = (laptop) => {
        const newCart = [...cart, laptop]
        setCart(newCart);

    }
    return (
        <div className='shop-container'>

            <div className='product-container'>
                {laptops.map(laptop => <Laptop key={laptop.id}

                    laptop={laptop} handleAddToCart={handleAddToCart}></Laptop>)}
            </div>
            <div className='cart-container'>
                <h2>Slect One Item</h2>
                <h3>{cart.length}</h3>
                <button className='suggest-btn'>Suggest One</button>
                <br />
                <button className='reset-btn'>Reset</button>
            </div>

        </div>
    );
};

export default Store;
