import React, { Component } from 'react';
import ProductsContainer from '../Reusable Components/ProductsContainer/Container';
import ProductTemplate from '../Reusable Components/ProductTemplate/ProductTemplate';
import classes from "./Products.module.css";
import Footer from "./../Footer copy/Footer";
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';

export default class Products extends Component {

    state = {
        products: [],
        imgs: [],
        columns: "",
        showAddEditor: false,
        showUpdate: false,
        index: null
    }

    async componentDidMount() {
        this._isMounted = true;
        await fetch("http://localhost:8080/s1td/getHomeData?id=" + localStorage.getItem("id"), {
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
                        products: resultData.data.products,
                        columns: resultData.data.flex
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })

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

        if (this.state.products) {
            let array = this.state.products;

            products = array.map((product, i) => {
                return <ProductTemplate
                    clickHandler={() => {
                        console.log("Hi");
                        this.setState({
                            showUpdate: true,
                            index: i
                        })
                    }}
                    id={product._id} img={this.state.imgs[i]} key={i} sizes={product.sizes} colors={product.colors} title={product.name} price={product.price} desc={product.description} flexBasis={this.state.columns} />
            })
        }

        return (
            <React.Fragment>
                <div className={classes.rootCont}>
                    <div className={classes.headCont}>
                        <div style={{ display: 'flex', justifyContent: 'center', width: "100%" }}>
                            <p className={classes.head}>Products</p>
                        </div>
                        <p className={classes.para}>Welcome to products section. Here we are going to present you with amazing products.</p>
                    </div>
                    <ProductsContainer>
                        {products}
                    </ProductsContainer>
                </div>
                <Footer  />
            </React.Fragment>
        );
    }
}