import React, { Component } from 'react';
import classes from './UpdateEditor.module.css';
import TextField from "@material-ui/core/TextField";
import $ from "jquery";

export default class UpdateProductEditor extends Component {

    state = {
        selectedFile: null,
        name: "",
        description: "",
        price: "",
        colors: "",
        sizes:""
    }

    componentDidMount() {
        this.setState({
            name: this.props.data.name,
            description: this.props.data.description,
            price: this.props.data.price,
            colors: this.props.data.colors,
            sizes:this.props.data.sizes
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
        let description = this.state.description;
        let img = this.state.selectedFile;
        let price = this.state.price;
        let prodId = this.props.data._id;
        const formData = new FormData();
        formData.append('img', img);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('prodId', prodId);
        formData.append("colors", this.state.colors);
        formData.append("sizes", this.state.sizes);
        formData.append('id', localStorage.getItem('id'));
        fetch("http://localhost:8080/s1td/updateProduct", {
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
        
        fetch("http://localhost:8080/s1td/removeProduct", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem('id'),
                prodId: this.props.data._id
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
                        <h1 className={classes.editorHead}>Update</h1>
                        <p onClick={this.props.closeHandler} className={classes.close}>x</p>
                    </div>

                    <div className={classes.formField}>
                        <TextField
                            style={{ width: "80%" }}
                            label="Name"
                            id="name"
                            type="text"
                            value={this.state.name}
                            onChange={(event) => { this.setState({ name: event.target.value }) }}
                        />
                    </div>

                    <div className={classes.formField}>
                        <TextField
                            style={{ width: "80%" }}
                            label="Price"
                            id="price"
                            type="number"
                            value={this.state.price}
                            onChange={(event) => { this.setState({ price: event.target.value }) }}
                        />
                    </div>

                    <div className={classes.formField}>
                        <TextField
                            style={{ width: "80%" }}
                            label="Colors available"
                            id="colors"
                            type="text"
                            value={this.state.colors}
                            onChange={(event) => { this.setState({ colors: event.target.value }) }}
                        />
                    </div>

                    <div className={classes.formField}>
                        <TextField
                            style={{ width: "80%" }}
                            label="Sizes Available"
                            id="sizes"
                            type="text"
                            value={this.state.sizes}
                            onChange={(event) => { this.setState({ sizes: event.target.value }) }}
                        />
                    </div>

                    <div className={classes.formField}>
                        <TextField
                            style={{ width: "80%" }}
                            label="Description"
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
                            <label className="custom-file-label" htmlFor="customFile">Choose Product Image</label>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                        <button type="submit" className={classes.introButton}>Update</button>
                        <button type="button" onClick={this.handleRemove} className={classes.introButton}>Remove</button>
                    </div>
                </div>
            </form >
        );
    }
}