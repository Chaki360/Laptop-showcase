import React from 'react';
import './Laptop.css'
const Laptop = (props) => {
    const { id, name, rating, image, price } = props.laptop
    return (
        <div className='product'>
            <img className='product-image' src={image} alt='' />

            <h1>{name}</h1>
            <h4>
                Rating:{rating}
            </h4>
            <h3>
                Price: ${price}
            </h3>

            <button onClick={() => props.handleAddToCart(props.laptop)} className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Laptop;