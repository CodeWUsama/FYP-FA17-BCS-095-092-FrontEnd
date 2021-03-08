import React, { Component } from 'react';
import classes from './updateblog.module.css';
import TextField from "@material-ui/core/TextField";
import $ from "jquery";

export default class Updateblog extends Component {

    state = { 
        text: this.props.data.text,
        name: this.props.data.name,
    }
   
    componentDidMount() {
        $(".custom-file-input").on("change", function () {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let text = document.getElementById("text").value;

        let img = this.state.selectedFile;
        const formData = new FormData();
        formData.append('img', img);
        formData.append('name', name);
        formData.append('text', text);
        formData.append('featured', true);
        formData.append('id', this.props.data._id);
        formData.append("tempId", localStorage.getItem("id"));
        fetch("http://localhost:8080/t1td/updateTeacherResearch", {
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

    handleText = (event ) => {
        this.setState({ text:event.target.value})
        this.props.changeHandler(this.state.text);
    }
    handleName = (event ) => {
        this.setState({ name:event.target.value})
        this.props.changeHandler(this.state.name);
    }

    render() {
        
        return (
            <form style={{ width: "100%" }} method="POST" onSubmit={this.handleSubmit}>
                <div className={classes.rootCont}>
                    <div className={classes.closeCont}>
                        <h1 style={{ color: "white" }}>!</h1>
                        <h1 className={classes.editorHead}>Update Research</h1>
                        <p onClick={this.props.closeHandler} className={classes.close}>X</p>
                    </div>

                    <div className={classes.formField}>
                        <TextField
                            inputProps={{ style: { fontFamily: "sans-serif" } }}
                            label="Name"
                            id="name"
                            style={{ width: "80%" }}
                            type="text" value={this.state.name} onChange={this.handleName }
                        />
                    </div>
                   

                    <div className={classes.formField}>
                        <TextField
                            style={{ width: "80%" }}
                            inputProps={{ style: { fontFamily: "sans-serif", textAlign: "justify" } }}
                            label="Research Description"
                            multiline
                            rows={5}
                            rowsMax={8}
                            id="text"
                            type="text" value={this.state.text} onChange={this.handleText}
                        />
                    </div>
                

                    <div className={classes.formField}>
                        <div style={{ width: "80%", marginTop: "20px" }} className="custom-file">
                            <input onChange={(e) => this.setState({ selectedFile: e.target.files[0] })} type="file" className="custom-file-input" id="customFile" />
                            <label className="custom-file-label" htmlFor="customFile">Choose Research Image</label>
                        </div>
                    </div>
                    <button type="submit" onClick={() => this.props.changeHandler(this.state.text, this.state.name)} className={classes.introButton}>Update</button>
                </div>
            </form >
        );
    }
}

