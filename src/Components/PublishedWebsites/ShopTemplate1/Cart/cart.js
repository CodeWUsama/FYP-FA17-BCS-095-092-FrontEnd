import React from 'react';
import { Component } from 'react';
import classes from "./cart.module.css";
import ProductsContainer from "./../Reusable Components/ProductsContainer/Container";
import ProductTemplate from "./../Reusable Components/ProductTemplate/ProductTemplate";
import Footer from '../Footer copy/Footer';

export default class Cart extends Component {

    state = {
        products: [],
        images: []
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        this._isMounted = true;
        await fetch("http://localhost:8080/s1td/getCart?id=" + localStorage.getItem("id"), {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('userToken'),
                "Content-Type": 'application/json'
            },
        })
            .then(result => {
                return result.json();
            }).then(resultData => {
                if (this._isMounted) {
                    this.setState({
                        products: resultData.products,
                        images: resultData.images
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    calculateTotal = () => {
        let total = 0;
        this.state.products.map(product => {
            total += product.price;
        })
        return total;
    }

    handleCheckout = () => {
        let prodId = [];
        this.state.products.map(product => {
            prodId.push(product._id);
        })
        localStorage.setItem("products", prodId);
        localStorage.setItem("total", this.calculateTotal());
        localStorage.setItem("d", 30);
        window.location.href = "/ShoppingWebsite/#/checkout";
    }

    render() {

        let displayProducts;

        if (this.state.products.length > 0) {
            displayProducts = this.state.products.map((product, i) => {
                return <ProductTemplate cart id={product._id} key={product._id} img={this.state.images[i]} title={product.title} price={product.price} flexBasis="27%" />
            })
        }

        let total = this.calculateTotal();


        return (
            <>
                <div className={classes.rootCont}>

                    <ProductsContainer>

                        {displayProducts}

                    </ProductsContainer>
                    {total == 0 ?
                        <h1 style={{textAlign:"center"}}>No items in cart</h1>
                        :
                        <div className={classes.btnCont}>

                            <p className={classes.price}>Total:{total} Rs</p>
                            <button onClick={this.handleCheckout} className={classes.btn}>Checkout</button>

                        </div>
                    }

                </div>

                <Footer />
            </>
        );
    }
}