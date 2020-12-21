import React, { Component } from 'react';
import classes from './TopDishes.module.css';
import Dish from '../../ResusableComponents/Dish/Dish';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';

export default class TopDishes extends Component {
    state = {
        showAdd: false,
        imgs: [],
        columns: "33%"
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
                        imgs: resultData.imgs,
                        columns: this.props.flex
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

    render() {

        let displayDishes = this.props.dishes.map((dish, index) => {
            if (dish.featured === "true") {
                return <Dish flexBasis={this.state.columns} dishId={dish._id} price={dish.price} delivery={30} key={dish.name} backgroundImg={"url('data:image/jpeg;base64," + this.state.imgs[index]} dishName={dish.name} desc={dish.desc} />
            }
        });

        return (
            <div>
                <div className={classes.rootCont}>
                    <div className={classes.mainHeadCont}>
                        <div className={classes.topCont}>
                            <p style={{ visibility: "hidden" }} className={classes.mainHead} >!</p>
                            <p className={classes.mainHead}>Top Dishes</p>
                            <FormControl style={{ visibility: "hidden" }}>
                                <InputLabel style={{ color: "white" }} htmlFor="select">Columns</InputLabel>
                                <NativeSelect style={{ color: "red" }} defaultValue={this.state.columns} id="select" onChange={this.triggerChange}>
                                    <option value="100%">1</option>
                                    <option value="50%">2</option>
                                    <option value="33%">3</option>
                                </NativeSelect>
                            </FormControl>
                        </div>
                        <p className={classes.mainText}>In this section we are going to present you with our top three most rated dishes.</p>
                    </div>
                    <div className={classes.dishesCont}>
                        {displayDishes}
                    </div>
                </div>
            </div>

        );
    }

} 