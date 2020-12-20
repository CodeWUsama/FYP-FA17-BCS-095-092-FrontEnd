import React, { Component } from 'react';
import ImageEditor from '../../../../Editors/ImageEditors/ImageEditor';
import Editor from '../../BackdropEditor/Editor';
import classes from './Intro.module.css';

export default class Intro extends Component {

    _isMounted = false;

    state = {
        introImg: null,
        imageEditor: false
    }

    componentDidMount() {
        this._isMounted = true;
        fetch("http://localhost:8080/f1td/getIntroImage?id=" + localStorage.getItem("id"), {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
        })
            .then(result => {
                return result.json();
            }).then(resultData => {
                if (resultData) {
                    if (this._isMounted) {
                        this.setState({
                            introImg: resultData.img
                        });
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleImageClick = () => {
        this.setState({ imageEditor: !this.state.imageEditor });
    }

    submitHandler = (event, img) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("img", img);
        formdata.append("id", localStorage.getItem("id"));
        fetch("http://localhost:8080/f1td/postIntroImage", {
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
                this.setState({
                    introImg: resData.img,
                    imageEditor: false
                });
            }
        })
    }

    render() {
        return (
            <div>
                <Editor fullsize={true} backdropHandler={this.handleImageClick} enableBackdropEditor={this.state.imageEditor}>
                    <ImageEditor submitHandler={this.submitHandler} closeHandler={this.handleImageClick} />
                </Editor>
                <div
                    style={{ backgroundImage: "url('data:image/jpeg;base64," + this.state.introImg }}
                    className={classes.rootDiv}
                    onClick={this.handleImageClick}
                >
                    <div className={classes.textCont}>
                        <p className={classes.introHead}
                            style={{
                                fontSize: this.props.storeName.fontSize,
                                fontFamily: this.props.storeName.fontFamily,
                                color: this.props.storeName.fontColor,
                                fontWeight: this.props.storeName.bold ? "bold" : "normal",
                                textDecoration: this.props.storeName.underline ? "underline" : "none",
                                fontStyle: this.props.storeName.italic ? "italic" : "normal",
                                textAlign: this.props.storeName.align
                            }}
                            onClick={this.props.storeNameEditor}
                        >
                            {this.props.storeName.text}
                        </p>
                        <p
                            style={{
                                fontSize: this.props.introText.fontSize,
                                fontFamily: this.props.introText.fontFamily,
                                color: this.props.introText.fontColor,
                                fontWeight: this.props.introText.bold ? "bold" : "normal",
                                textDecoration: this.props.introText.underline ? "underline" : "none",
                                fontStyle: this.props.introText.italic ? "italic" : "normal",
                                textAlign: this.props.introText.align
                            }}
                            onClick={this.props.introTextEditor}
                            className={classes.introText}
                        >
                            {this.props.introText.text}
                        </p>
                        <div className={classes.buttonCont}>
                            <button className={classes.introButton}>Check Our Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}