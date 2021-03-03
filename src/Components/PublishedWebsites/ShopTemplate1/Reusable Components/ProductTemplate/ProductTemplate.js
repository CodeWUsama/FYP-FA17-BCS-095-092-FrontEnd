import React from 'react';
import { useState } from 'react';
import Editor from '../../../../FoodTemplates/FoodTemplate1/BackdropEditor/Editor';
import ProdcutDetail from '../ProductDetails/prodDetails';
import classes from "./ProductTemplate.module.css";


const ProductTemplate = (props) => {

    const [getBackdrop, setBackdrop] = useState(false);
    const [success, setSuccess] = useState(false);

    let cartHandler = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/s1td/addToCart", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('userToken'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                prodId: props.id
            })
        }).then(res => {
            if (res.status === 200) {
                setSuccess(true);
            }
            else {
                //failed
            }
        })
    }

    let removeHandler = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/s1td/removeFromCart", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('userToken'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                toRemove: props.id
            })
        }).then(res => {
            if (res.status === 200) {
                window.location.reload();
            }
            else {
                //failed
            }
        })
    }


    return (
        <div onClick={props.clickHandler} style={{ flexBasis: props.flexBasis }} className={classes.rootCont}>
            <Editor fullsize={true} enableBackdropEditor={getBackdrop} backdropHandler={() => setBackdrop(!getBackdrop)} >
                <ProdcutDetail clickHandler={props.clickHandler} img={props.img} title={props.title} price={props.price} desc={props.desc} colors={props.colors} sizes={props.sizes} />
            </Editor>
            <div className={classes.imgCont}>
                <img className={classes.img} src={"data:image/jpeg;base64," + props.img}></img>
            </div>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.price}>Price: {props.price}$</p>

            {props.cart ?
                <div className={classes.btnCont}>
                    <button onClick={(event) => removeHandler(event)} className={classes.btn}>Remove</button>
                </div>
                :
                <div className={classes.btnCont}>
                    <button onClick={() => setBackdrop(true)} className={classes.btn}>View</button>
                    {localStorage.getItem("userToken") ?
                        <button className={classes.btn} onClick={(event) => cartHandler(event)}>Cart</button>
                        :
                        null
                    }
                </div>
            }

            {success ?
                <div className="alert alert-success" role="alert">
                    Added to Cart. <a href="/ShoppingWebsite/#/cart">View Cart</a>
                </div>
                :
                null
            }

        </div>
    );
}

export default ProductTemplate;