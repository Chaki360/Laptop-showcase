import React, { useEffect, useState } from 'react';
import Name from '../../Name/Name';
import Questions from '../../Questions/Questions';
import Laptop from './Laptop/Laptop';
import './Store.css'


const Store = () => {
    const [laptops, setLaptops] = useState([0]);

    const [names, setNames] = useState([0]);

    const [x, setCart] = useState([0])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setLaptops(data))


    }, [])

    const handleAddToCart = (laptop) => {
        const newName = [...names, laptop];
        setNames(newName);


    }
    const handleRandomChoice = () => {

        const randomChoice = laptops[Math.floor(Math.random() * laptops.length)];

        setCart([randomChoice])

    }



    return (
        <div className='shop-container'>

            <div className='product-container'>
                {laptops.map(laptop => <Laptop key={laptop.id}

                    laptop={laptop} handleAddToCart={handleAddToCart}></Laptop>)}
            </div>
            <div className='cart-container'>
                <div className='cart-items'>
                    <h2>Product Summary </h2>

                    <h3>
                        {setCart}
                        {names.map(name => <Name name={name}></Name>)}
                    </h3>
                    <button onClick={handleRandomChoice} className='suggest-btn'>Suggest One</button>
                    <br />
                    <button className='reset-btn'>Reset</button>
                </div>
                <Questions></Questions>
            </div>

        </div>
    );
};

export default Store;
