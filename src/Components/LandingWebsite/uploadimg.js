import React, { Component } from 'react';

export default class uploadImg extends Component {

    state = {
        selectedFile: null,
        imgEncoded:null
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("img", this.state.selectedFile);
        fetch("http://localhost:8080/user/uploadImage", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
            },
            body: formdata
        }).then(res => {
            if (res.status === 200) {
                return res.json();
            }
        }).then(resData => {
            if (resData) {
                console.log(resData.img);
                this.setState({ imgEncoded:resData.img});
            }
        })
    }

    handleFileChange = (event) => {
        this.setState({ selectedFile: event.target.files[0] });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}
                    method="POST"
                    encType="multipart/form-data"
                >
                    <div className="form-group">
                        <input
                            onChange={this.handleFileChange}
                            type="file"
                            name="file"
                            id="input-file"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <img style={{height:500, width:500}} src={"data:image/jpeg;base64," + this.state.imgEncoded }></img>
            </div>
        );
    }
}