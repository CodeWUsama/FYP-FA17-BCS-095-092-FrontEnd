import React, { Component } from 'react';
import classes from './AddDishEditor.module.css';
import TextField from "@material-ui/core/TextField";
import $ from "jquery";

export default class AddDishEditor extends Component {

    state = {
        selectedFile: null,
        name: "",
        description: "",
        price: "",
        featured: ""
    }

    componentDidMount() {
        this.setState({
            name: this.props.data.name,
            description: this.props.data.desc,
            price: this.props.data.price,
            featured: this.props.data.featured
        });
        $(".custom-file-input").on("change", function () {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
    }

    handleSubmit = (event) => {
        console.log("Not Called");
        event.preventDefault();
        let name = this.state.name;
        let desc = this.state.description;
        let img = this.state.selectedFile;
        let price = this.state.price;
        let featured = this.state.featured;
        let dishId = this.props.data._id;
        const formData = new FormData();
        formData.append('img', img);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('desc', desc);
        formData.append('dishId', dishId);
        formData.append('featured', featured);
        formData.append('id', localStorage.getItem('id'));
        fetch("http://localhost:8080/f1td/updateDish", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
            },
            body: formData
        })
            .then(result => {
                if (result.status == 200) {
                    this.props.closeHandler();
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleRemove = () => {
        console.log("Called");
        fetch("http://localhost:8080/f1td/removeDish", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem('id'),
                dishId: this.props.data._id
            })
        })
            .then(result => {
                if (result.status == 200) {
                    this.props.closeHandler();
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        return (
            <form style={{ width: "100%" }} method="POST" onSubmit={this.handleSubmit}>
                <div className={classes.rootCont}>
                    <div className={classes.closeCont}>
                        <h1 style={{ color: "white" }}>!</h1>
                        <h1 className={classes.editorHead}>Update Dish</h1>
                        <p onClick={this.props.closeHandler} className={classes.close}>x</p>
                    </div>

                    <div className={classes.formField}>
                        <TextField
                            style={{ width: "80%" }}
                            label="Dish Name"
                            id="name"
                            type="text"
                            value={this.state.name}
                            onChange={(event) => { this.setState({ name: event.target.value }) }}
                        />
                    </div>

                    <div className={classes.formField}>
                        <TextField
                            style={{ width: "80%" }}
                            label="Dish Price"
                            id="price"
                            type="number"
                            value={this.state.price}
                            onChange={(event) => { this.setState({ price: event.target.value }) }}
                        />
                    </div>

                    <div className={classes.formField}>
                        <TextField
                            style={{ width: "80%" }}
                            label="Dish Description"
                            multiline
                            rows={2}
                            rowsMax={3}
                            id="desc"
                            type="text"
                            value={this.state.description}
                            onChange={(event) => { this.setState({ description: event.target.value }) }}
                        />
                    </div>

                    <div className={classes.formField}>
                        <div style={{ width: "80%", marginTop: "20px" }} className="custom-file">
                            <input onChange={(e) => this.setState({ selectedFile: e.target.files[0] })} type="file" className="custom-file-input" id="customFile" />
                            <label className="custom-file-label" htmlFor="customFile">Choose Dish Image</label>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                        <button type="submit" className={classes.introButton}>Update Dish</button>
                        <button type="button" onClick={this.handleRemove} className={classes.introButton}>Remove Dish</button>
                    </div>
                </div>
            </form >
        );
    }
}