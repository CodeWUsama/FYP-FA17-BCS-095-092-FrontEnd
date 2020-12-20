import React, { Component } from 'react';
import classes from './TopDishes.module.css';
import Dish from '../../ResusableComponents/Dish/Dish';
import AddDish from '../../ResusableComponents/AddDish/AddDish';
import Editor from '../../BackdropEditor/Editor';
import AddDishEditor from '../../ResusableComponents/AddDish/AddDishEditor/AddDishEditor';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';

export default class TopDishes extends Component {
    state = {
        showAdd: false,
        imgs: [],
        columns: "50%"
    }

    _isMounted = false;

    async componentDidMount() {
        this._isMounted = true;
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

    triggerChange = () => {
        let val = document.getElementById('select').value;
        this.setState({ columns: val });
        console.log("Got");
    }

    toggleAddProduct = () => {
        this.setState({ showAdd: !this.state.showAdd });
    }

    addDish = () => {
        this.toggleAddProduct();
    }

    render() {

        let displayDishes = this.props.dishes.map((dish, index) => {
            if (dish.featured === "true") {
                return <Dish flexBasis={this.state.columns} key={dish.name} backgroundImg={"url('data:image/jpeg;base64," + this.state.imgs[index]} dishName={dish.name} desc={dish.desc} />
            }
        });

        return (
            <div>
                <Editor fullsize={true} enableBackdropEditor={this.state.showAdd} backdropHandler={this.toggleAddProduct} >
                    <AddDishEditor addHandler={() => this.addDish()} closeHandler={this.toggleAddProduct} />
                </Editor>
                <div className={classes.rootCont}>
                    <div className={classes.mainHeadCont}>
                        <div className={classes.topCont}>
                            <p className={classes.mainHead} >!</p>
                            <p className={classes.mainHead}>Top Dishes</p>
                            <FormControl>
                                <InputLabel style={{color:"white"}} htmlFor="select">Columns</InputLabel>
                                <NativeSelect style={{color:"red"}} defaultValue={this.state.columns} id="select" onChange={this.triggerChange}>
                                    <option value="100%">1</option>
                                    <option value="50%">2</option>
                                    <option value="33%">3</option>
                                </NativeSelect>
                            </FormControl>
                        </div>
                        <p className={classes.mainText}>In this section we are going to present you with our top three most rated dishes.</p>
                    </div>
                    <div className={classes.dishesCont}>
                        <AddDish flexBasis={this.state.columns} clickHandler={this.toggleAddProduct} />
                        {displayDishes}
                        {/* <Dish backgroundImg={karahiImg} dishName="Chicken Karahi" desc="A special Chicken Karahi with medium spices server you with fresh salad and cold drink." />
                        <Dish backgroundImg={baryaniImg} dishName="Chicken Biryani" desc="A large plate of baryani including a chicken piece of your choice served with fresh raita and salad." /> */}
                    </div>
                </div>
            </div>

        );
    }

} 