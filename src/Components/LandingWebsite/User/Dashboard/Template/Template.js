import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavF1 from '../../../../FoodTemplates/FoodTemplate1/NavBar/NavBar';
import F1Img from './f1.jpg';
import notA from './notA.JPG';
import B1Img from './b1.jpg';
import classes from './Template.module.css';
export default class Template extends Component {

    state = {
        name: this.props.name,
        category: this.props.category,
        admin: this.props.admin,
        user: this.props.user,
        view: this.props.view
    }

    handleSelect = () => {
        if (this.state.category === "F1") {
            fetch("http://localhost:8080/user/createwebsite", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    template: "F1",
                })
            })
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    }
                }).then(data => {
                    if (data) {
                        console.log(data.id);
                        localStorage.setItem("id", data.id);
                        window.location.href = "/F1/";
                    }
                })
        }
        else if (this.state.category === "B1") {
            fetch("http://localhost:8080/user/createwebsite", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    template: "B1",
                })
            })
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    }
                }).then(data => {
                    if (data) {
                        localStorage.setItem("id", data.id);
                        window.location.href = "/B1/";
                    }
                })
        }
    }

    delTemp = () => {
        let id = this.props.id;
        fetch("http://localhost:8080/user/deleteTemplate", {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                templateID: id
            })
        })
            .then(res => {
                if (res.status === 200) {
                    window.location.reload();
                }
            })
    }


    render() {

        let imgSrs;
        if (this.state.category === "F1") {
            imgSrs = F1Img;
        }
        if (this.state.category === "B1") {
            imgSrs = B1Img;
        }
        if (this.state.category === "NA") {
            imgSrs = notA;
        }

        let options;
        if (this.state.admin) {
            options = <div className={classes.optionCont}>
                <p className={classes.option}>Admin Panel</p>
                <p className={classes.option}>Stop</p>
            </div>
        }
        else if (this.state.user) {
            options = <div className={classes.optionCont}>
                <p onClick={() => { (this.state.category === "F1" ? window.location.href = "/RestaurantWebsite/" : window.location.href = "/B1/"); localStorage.setItem('id', this.props.id) }} className={classes.option}>Preview</p>
                <p onClick={() => { (this.state.category === "F1" ? window.location.href = "/F1/" : window.location.href = "/B1/"); localStorage.setItem('id', this.props.id) }} className={classes.option}>Edit</p>
                <img name="Delete" onClick={this.delTemp} className={classes.delIcon} src="https://img.icons8.com/material-sharp/24/000000/delete-forever.png" />
            </div>
        }
        else if (this.state.view) {
            options = <div className={classes.optionCont}>
                <p className={classes.option}>Preview</p>
                <a onClick={this.handleSelect} className={classes.option}>Select</a>
            </div>
        }

        return (
            <BrowserRouter>
                <div>
                    <div className={classes.templateCont}>
                        <img alt={this.state.name} className={classes.tempImg} src={imgSrs} />
                        <p className={classes.tempHead}>{this.state.name}</p>
                        <div className={classes.optionCont}>
                            {options}
                        </div>
                    </div>
                </div>
                <Route exact path='/F1/' component={NavF1} />
            </BrowserRouter>
        );
    }
}