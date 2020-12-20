import React from 'react';
import { Component } from 'react';
import classes from "./Menu.module.css";
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import Dish from "./../ResusableComponents/Dish/Dish";
import Editor from "./../BackdropEditor/Editor";
import AddDish from "./../ResusableComponents/AddDish/AddDish";
import AddDishEditor from "./../ResusableComponents/AddDish/AddDishEditor/AddDishEditor"

export default class menu extends Component {

    state = {
        showAdd: false,
        dishes: [],
        imgs: [],
        columns: "50%"
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
                    console.log(resultData.data.dishes);
                    this.setState({
                        dishes:resultData.data.dishes
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

    addDish = () => {
        this.toggleAddProduct();
    }

    triggerChange = () => {
        let val = document.getElementById('select').value;
        this.setState({ columns: val });
    }

    render() {

        let displayDishes = this.state.dishes.map((dish, index) => {
            return <Dish flexBasis={this.state.columns} key={dish.name} backgroundImg={"url('data:image/jpeg;base64," + this.state.imgs[index]} dishName={dish.name} desc={dish.desc} />
        });



        return (
            <div className={classes.rootCont}>
                <div className={classes.rootCont}>
                    <div className={classes.mainHeadCont}>
                        <div className={classes.topCont}>
                            <p style={{visibility:"hidden"}} className={classes.mainHead} >!</p>
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
                        {displayDishes}
                    </div>
                </div>
            </div>
        );
    }
}