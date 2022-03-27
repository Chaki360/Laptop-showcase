import React from 'react';

const Questions = () => {
    return (
        <div>
            <h2>How React Works?</h2>
            <br />
            <p>React is a javascript library not a framework first of all.How It's work? Well it allow us to re-construct our browser DOM in Javascript and help the DOM to make the changes in the which actually occured in the web applications.</p>
            <br />
            <h2>
                How useState Works?
            </h2>
            <br />
            <p>

                useState is a react hook function which add state variables to function components. This state can be an object, an array,a number or even a boolean.So we can set anything previously by using useState while initializing the function in the react  application.
            </p>
        </div>
    );
};

export default Questions;