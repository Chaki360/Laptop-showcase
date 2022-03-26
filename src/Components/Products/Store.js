import React, { useEffect, useState } from 'react';
import Laptop from './Laptop/Laptop';
import './Store.css'
const Store = () => {
    const [laptops, setLaptops] = useState([0]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setLaptops(data))

    }, [])
    return (
        <div className='shop-container'>

            <div className='product-container'>
                {laptops.map(laptop => <Laptop key={laptop.id}

                    laptop={laptop}></Laptop>)}
            </div>
            <div className='cart-container'>

                <h1>Hello</h1>
            </div>

        </div>
    );
};

export default Store;
