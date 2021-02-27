import React, { Component } from 'react';
import classes from "./ImageEditor.module.css";
import $ from "jquery";

export default class ImageEditor extends Component {

    state = {
        selectedFile: null
    }

    componentDidMount() {
        $(".custom-file-input").on("change", function () {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
    }
    render() {
        return (
            <div>
                <div>
                    <div className={classes.headCont}>
                        <p style={{ color: "white" }}>h</p>
                        <h1 className={classes.editorHead}>Image Editor</h1>
                        <p onClick={this.props.closeHandler} className={classes.close}>X</p>
                    </div>
                    <div className={classes.upload}>
                        <div style={{ width: "90%" }} className="custom-file">
                            <input onChange={(e) => this.setState({ selectedFile: e.target.files[0] })} type="file" className="custom-file-input" id="customFile" />
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                        <button onClick={(event) => this.props.submitHandler(event,this.state.selectedFile)} type="submit" style={{ width: "150px", marginTop: 50 }} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}