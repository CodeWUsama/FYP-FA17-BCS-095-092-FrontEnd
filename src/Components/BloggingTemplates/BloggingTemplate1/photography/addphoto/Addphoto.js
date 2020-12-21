import React, { Component } from 'react';
import classes from './addphoto.module.css';
import TextField from "@material-ui/core/TextField";
import $ from "jquery";

export default class Addblog extends Component {

    state = {
        selectedFile: null
    }

    componentDidMount() {
        $(".custom-file-input").on("change", function () {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let desc = document.getElementById("desc").value;
        let img = this.state.selectedFile;
        const formData = new FormData();
        formData.append('img', img);
        formData.append('desc', desc);
        formData.append('featured', true);
        formData.append('id', localStorage.getItem('id'));
        fetch("http://localhost:8080/b1td/addphoto", {
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

    render() {
        
        return (
            <form style={{ width: "100%" }} method="POST" onSubmit={this.handleSubmit}>
                <div className={classes.rootCont}>
                    <div className={classes.closeCont}>
                        <h1 style={{ color: "white" }}>!</h1>
                        <h1 className={classes.editorHead}>Add New Image</h1>
                        <p onClick={this.props.closeHandler} className={classes.close}>X</p>
                    </div>

                    <div className={classes.formField}>
                        <TextField
                            style={{ width: "80%" }}
                            label="Image Description"
                            multiline
                            rows={2}
                            rowsMax={3}
                            id="desc"
                            type="text"
                        />
                    </div>
                   

                    <div className={classes.formField}>
                        <div style={{ width: "80%", marginTop: "20px" }} className="custom-file">
                            <input onChange={(e) => this.setState({ selectedFile: e.target.files[0] })} type="file" className="custom-file-input" id="customFile" />
                            <label className="custom-file-label" htmlFor="customFile">Choose Image</label>
                        </div>
                    </div>
                    <button type="submit" className={classes.introButton}>Add</button>
                </div>
            </form >
        );
    }
}