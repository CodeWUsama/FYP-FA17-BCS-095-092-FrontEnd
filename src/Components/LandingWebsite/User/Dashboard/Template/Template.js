import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavF1 from '../../../../FoodTemplates/FoodTemplate1/NavBar/NavBar';
import F1Img from './f1.jpg';
import notA from './notA.JPG';
import B1Img from './b1.jpg';
import classes from './Template.module.css';
import S1Img from "./s1.JPG";
import T1Img from "./t1.png";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PreviewIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import PublishIcon from '@material-ui/icons/Publish';
import Tooltip from '@material-ui/core/Tooltip';

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
        else if (this.state.category === "S1") {
            fetch("http://localhost:8080/user/createwebsite", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    template: "S1",
                })
            })
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    }
                }).then(data => {
                    if (data) {
                        localStorage.setItem("id", data.id);
                        window.location.href = "/S1/";
                    }
                })
        }
        else if (this.state.category === "T1") {
            fetch("http://localhost:8080/user/createwebsite", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    template: "T1",
                })
            })
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    }
                }).then(data => {
                    if (data) {
                        localStorage.setItem("id", data.id);
                        window.location.href = "/T1/";
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
                templateID: id,
                category: this.state.category
            })
        })
            .then(res => {
                if (res.status === 200) {
                    window.location.reload();
                }
            })
    }

    handlePreview = () => {
        localStorage.setItem('id', this.props.id);
        if (this.state.category === "F1") {
            window.location.href = "/RestaurantWebsite/";
        }
        else if (this.state.category === "B1") {
            window.location.href = "/B1/";
        }
        else if (this.state.category === "S1") {
            window.location.href = "/ShoppingWebsite/";
        }
        else if (this.state.category === "T1") {
            window.location.href = "/T1/";
        }
    }

    handleEdit = () => {
        localStorage.setItem('id', this.props.id);
        if (this.state.category === "F1") {
            window.location.href = "/F1/";
        }
        else if (this.state.category === "B1") {
            window.location.href = "/B1/";
        }
        else if (this.state.category === "S1") {
            window.location.href = "/S1/";
        }
        else if (this.state.category === "T1") {
            window.location.href = "/T1/";
        }
    }

    handlePublish = () => {

    }


    render() {

        let imgSrs;
        if (this.state.category === "F1") {
            imgSrs = F1Img;
        }
        if (this.state.category === "B1") {
            imgSrs = B1Img;
        }
        if (this.state.category === "S1") {
            imgSrs = S1Img;
        }
        if (this.state.category === "T1") {
            imgSrs = T1Img;
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
                {/* <p onClick={this.handlePreview} className={classes.option}>Preview</p> */}
                {/* <p onClick={this.handleEdit} className={classes.option}>Edit</p> */}

                <Tooltip title="Preview">
                    <IconButton onClick={this.handlePreview} aria-label="preview">
                        <PreviewIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Edit">
                    <IconButton onClick={this.handleEdit} aria-label="edit">
                        <EditIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Publish">
                    <IconButton onClick={this.handleEdit} aria-label="publish">
                        <PublishIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                    <IconButton onClick={this.delTemp} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>

                {/* <img name="Delete" onClick={this.delTemp} className={classes.delIcon} src="https://img.icons8.com/material-sharp/24/000000/delete-forever.png" /> */}
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