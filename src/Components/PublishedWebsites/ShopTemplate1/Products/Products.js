import React, { Component } from 'react';
import ProductsContainer from '../Reusable Components/ProductsContainer/Container';
import ProductTemplate from '../Reusable Components/ProductTemplate/ProductTemplate';
import classes from "./Products.module.css";
import AddProduct from "./../Reusable Components/AddProduct/AddProduct";
import AddProductEditor from "./../Reusable Components/AddProduct/AddProductEditor/AddProductEditor"
import Editor from "./../../../FoodTemplates/FoodTemplate1/BackdropEditor/Editor";
import Footer from "./../Footer copy/Footer";
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import UpdateDishEditor from "./../Reusable Components/UpdateProductEditor/UpdateEditor";

export default class Products extends Component {

    state = {
        footer: {
            aboutUs: {},
            phone: {},
            email: {},
            phone: {},
            whatsapp: {},
            address: {}
        },
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
                        footer: resultData.data.footer,
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

    triggerChange = () => {
        let val = document.getElementById('select').value;
        this.setState({ columns: val });
        fetch("http://localhost:8080/s1td/updateFlex", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                flexValue: val
            })
        })
            .then(result => {
                return result.json();
            }).then(resultData => {

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
                    <Editor fullsize={true} enableBackdropEditor={this.state.showAddEditor} backdropHandler={() => { this.setState({ showAddEditor: !this.state.showAddEditor }) }} >
                        <AddProductEditor featured={false} addHandler={() => this.addDish()} closeHandler={() => { this.setState({ showAddEditor: false }) }} />
                    </Editor>
                    <Editor fullsize={true} enableBackdropEditor={this.state.showUpdate} backdropHandler={()=>this.setState({ showUpdate:false })} >
                        <UpdateDishEditor data={this.state.products[this.state.index]} featured={false} addHandler={() => this.addDish()} closeHandler={()=>this.setState({ showUpdate:false })} />
                    </Editor>
                    <div className={classes.headCont}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: "100%" }}>
                            <p style={{ visibility: "hidden" }} className={classes.mainHead} >!</p>
                            <p className={classes.head}>Products</p>
                            <FormControl>
                                <InputLabel style={{ color: "black" }} htmlFor="select">Columns</InputLabel>
                                {this.state.columns != "" ?
                                    <NativeSelect style={{ color: "red" }} defaultValue={this.state.columns} id="select" onChange={this.triggerChange}>
                                        <option value="100%">1</option>
                                        <option value="50%">2</option>
                                        <option value="27%">3</option>
                                    </NativeSelect> :
                                    null
                                }
                            </FormControl>
                        </div>
                        <p className={classes.para}>Welcome to products section. Here we are going to present you with amazing products.</p>
                    </div>
                    <ProductsContainer>
                        <AddProduct clickHandler={() => { this.setState({ showAddEditor: true }) }} />
                        {products}
                    </ProductsContainer>
                </div>
                <Footer footer={this.state.footer} />
            </React.Fragment>
        );
    }
}