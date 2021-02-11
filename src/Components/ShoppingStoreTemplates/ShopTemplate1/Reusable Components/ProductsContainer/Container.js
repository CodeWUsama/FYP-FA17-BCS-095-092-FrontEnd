import classes from "./Container.module.css";
import React from 'react';

const ProductsContainer = (props) => {
    return ( 
        <div className={classes.rootCont}>
            {props.children}
        </div>
     );
}
 
export default ProductsContainer;