import React from 'react';
import { Component } from 'react';
import classes from "./Menu.module.css";
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import Dish from "./../ResusableComponents/Dish/Dish";
import Editor from "./../BackdropEditor/Editor";
import AddDish from "./../ResusableComponents/AddDish/AddDish";
import AddDishEditor from "./../ResusableComponents/AddDish/AddDishEditor/AddDishEditor"
import UpdateDishEditor from "./../ResusableComponents/AddDish/UpdateDishEditor/UpdateDishEditor"
import Footer from '../Footer/Footer';

export default class menu extends Component {

    state = {
        showAdd: false,
        dishes: [],
        imgs: [],
        columns: "33%",
        flex: {},
        footer: {
            aboutUs: {},
            phone: {},
            email: {},
            phone: {},
            whatsapp: {},
            address: {}
        },
        showUpdate: false,
        index: null
    }

    _isMounted = false;

    async componentDidMount() {
        this._isMounted = true;
        await fetch("http://localhost:8080/f1td/getHomeData?id=" + localStorage.getItem("id"), {
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
                        dishes: resultData.data.dishes,
                        footer: resultData.data.footer,
                        columns: resultData.data.flex.flexMenu
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
        await fetch("http://localhost:8080/f1td/getDishesImgs?id=" + localStorage.getItem("id"), {
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

    componentWillUnmount() {
        this._isMounted = false;
    }

    toggleAddProduct = () => {
        this.setState({ showAdd: !this.state.showAdd });
    }

    toggleUpdateProduct = () => {
        this.setState({ showUpdate: !this.state.showUpdate });
    }

    addDish = () => {
        this.toggleAddProduct();
    }

    triggerChange = () => {
        let val = document.getElementById('select').value;
        this.setState({ columns: val });
        fetch("http://localhost:8080/f1td/updateFlex", {
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

        let displayDishes = this.state.dishes.map((dish, index) => {
            return <Dish clickHandler={() => {
                this.setState({
                    showUpdate: true,
                    index: index
                })
            }} flexBasis={this.state.columns} key={dish.name} backgroundImg={"url('data:image/jpeg;base64," + this.state.imgs[index]} dishName={dish.name} desc={dish.desc} />
        });



        return (
            <div className={classes.rootCont}>
                <Editor fullsize={true} enableBackdropEditor={this.state.showAdd} backdropHandler={this.toggleAddProduct} >
                    <AddDishEditor featured={false} addHandler={() => this.addDish()} closeHandler={this.toggleAddProduct} />
                </Editor>
                <Editor fullsize={true} enableBackdropEditor={this.state.showUpdate} backdropHandler={this.toggleUpdateProduct} >
                    <UpdateDishEditor data={this.state.dishes[this.state.index]} featured={false} addHandler={() => this.addDish()} closeHandler={this.toggleUpdateProduct} />
                </Editor>
                <div className={classes.rootCont}>
                    <div className={classes.mainHeadCont}>
                        <div className={classes.topCont}>
                            <p style={{ visibility: "hidden" }} className={classes.mainHead} >!</p>
                            <p className={classes.mainHead}>Menu</p>
                            <FormControl>
                                <InputLabel style={{ color: "white" }} htmlFor="select">Columns</InputLabel>
                                <NativeSelect style={{ color: "red" }} defaultValue={this.state.columns} id="select" onChange={this.triggerChange}>
                                    <option value="100%">1</option>
                                    <option value="50%">2</option>
                                    <option value="33%">3</option>
                                </NativeSelect>
                            </FormControl>
                        </div>
                        <p className={classes.mainText}>In this section we are going to present you with our delicious dishes in the menu.</p>
                    </div>
                    <div className={classes.dishesCont}>
                        <AddDish flexBasis={this.state.columns} clickHandler={this.toggleAddProduct} />
                        {displayDishes}
                    </div>
                </div>
                <Footer
                    footer={this.state.footer}
                    aboutUsHandler={() => { alert("Please Try Changing from Home instead") }}
                    phoneHandler={() => { alert("Please Try Changing from Home instead") }}
                    addressHandler={() => { alert("Please Try Changing from Home instead") }}
                    emailHandler={() => { alert("Please Try Changing from Home instead") }}
                    whatsappHandler={() => { alert("Please Try Changing from Home instead") }}
                />
            </div>
        );
    }
}