/* eslint-disable no-unused-vars */
import React from 'react';

const PropsChild2 = ({setName, children}) => {
    return (
        <div>
            {children}
            <button onClick={()=>setName("Mern Child 2")} >Click me </button>
            
        </div>
    );
}

export default PropsChild2;
