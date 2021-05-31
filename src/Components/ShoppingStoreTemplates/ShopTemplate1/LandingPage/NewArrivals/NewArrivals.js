import React, { Component } from 'react';
import ProductsContainer from '../../Reusable Components/ProductsContainer/Container';
import ProductTemplate from '../../Reusable Components/ProductTemplate/ProductTemplate';
import classes from "./NewArrivals.module.css";

export default class Products extends Component {

    state = {
        imgs: []
    }

    async componentDidMount() {
        this._isMounted = true;
        await fetch("http://localhost:8080/s1td/getProductsImgs?id=" + localStorage.getItem("id"), {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
        })
            .then(result => {
                return result.json();
            }).then(resultData => {
                if (this._isMounted) {
                    this.setState({
                        imgs: resultData.imgs
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {

        let products;
        let count = 0;

        if (this.props.products) {
            let array = this.props.products;
            let imgs = this.state.imgs.reverse();
            products = array.reverse().map((product, i) => {
                count++;
                if (count < 4) {
                    return <ProductTemplate img={imgs[i]} id={product._id} key={i} sizes={product.sizes} colors={product.colors} title={product.name} price={product.price} desc={product.description} flexBasis="27%" />
                }
            })
        }

        return (
            <div className={classes.rootCont} id="new">
                <div className={classes.headCont}>
                    <p className={classes.head}>New Arrivals</p>
                    <p className={classes.para}>Welcome to new arrivals section. Here we are going to present you with our three latest products.</p>
                </div>
                <ProductsContainer>
                    {products}
                </ProductsContainer>
                <div className={classes.btnCont}>
                    <button onClick={()=>{window.location.href="/s1/#/products"}} className={classes.btn}>View All Products</button>
                </div>
            </div>
        );
    }
}