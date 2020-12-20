import React, { Component } from 'react';
import classes from './TopDishes.module.css';
import Dish from '../../ResusableComponents/Dish/Dish';

export default class LatestEditions extends Component {

    state = {
        imgs: [],
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


    render() {

        let count = 0;
        let array = this.props.dishes;
        array.reverse();

        let displayDishes = array.map((dish, index) => {
            if (count < 3) {
                count++;
                return <Dish flexBasis="33%" dishId={dish._id} price={dish.price} delivery={30} key={dish._id} backgroundImg={"url('data:image/jpeg;base64," + this.state.imgs[index]} dishName={dish.name} desc={dish.desc} />
            }
        });

        return (
            <div className={classes.rootCont}>
                <div className={classes.mainHeadCont}>
                    <p className={classes.mainHead}>Latest Dishes</p>
                    <p className={classes.mainText}>In this section we are going to present you three recently added dishes made by our cooks.</p>
                </div>
                <div className={classes.dishesCont}>
                    {displayDishes}
                </div>
            </div>
        );
    }

} 