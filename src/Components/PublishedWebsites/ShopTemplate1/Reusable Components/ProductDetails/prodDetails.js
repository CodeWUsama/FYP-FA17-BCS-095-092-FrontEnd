import React from 'react';
import classes from "./prodDetail.module.css";

const ProductDetail = (props) => {
    return (
        <div >
            <div className={classes.headCont}>

                <div style={{ width: '70%', display: 'flex', flexDirection: "column" }} >
                    <p className={classes.title}>{props.title}</p>
                    <p className={classes.price}>Price: 69$</p>
                    <div className={classes.discCont}>
                        <h4>Description:</h4>
                        <p className={classes.disc}>{props.desc}</p>
                        <h4>Colors Available:</h4>
                        <p className={classes.disc}>{props.colors}</p>
                        <h4>Sizes Available</h4>
                        <p className={classes.disc}>{props.sizes}</p>
                    </div>
                </div>

                <div style={{ width: '30%' }} >
                    <img className={classes.img} src={"data:image/jpeg;base64," + props.img}></img>
                </div>
            </div>
            <div className={classes.btnCont}>
                <button className={classes.btn}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductDetail;