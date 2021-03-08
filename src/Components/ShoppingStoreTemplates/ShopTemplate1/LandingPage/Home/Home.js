import React, { Component } from 'react';
import AnimatedText from './animatedText';
import classes from "./Home.module.css";
import ImageEditor from '../../Reusable Components/Editors/ImageEditors/ImageEditor';
import Editor from '../../BackdropEditor/Editor';

export default class Home extends Component {

    state = {
        img: "",
        imageEditor: false
    }

    _isMounted = true;

    componentDidMount() {
        this._isMounted = true;
        fetch("http://localhost:8080/s1td/getIntroImage?id=" + localStorage.getItem("id"), {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        })
            .then(result => {
                return result.json();
            }).then(resultData => {
                if (resultData) {
                    if (this._isMounted) {
                        this.setState({
                            img: resultData.img
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
        fetch("http://localhost:8080/s1td/postIntroImage", {
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
                    img: resData.img,
                    imageEditor: false
                });
            }
        })
    }


    render() {
        return (
            this.props.storeName && this.state.img ?
                <div>
                    <Editor fullsize={true} backdropHandler={this.handleImageClick} enableBackdropEditor={this.state.imageEditor}>
                        <ImageEditor submitHandler={this.submitHandler} closeHandler={this.handleImageClick} />
                    </Editor>
                    <div className={classes.rootCont}
                        style={{ backgroundImage: "url('data:image/jpeg;base64," + this.state.img }}
                        onClick={this.handleImageClick}
                    >

                        <AnimatedText
                            storeNameEditor={this.props.storeNameEditor} storeName={this.props.storeName}
                            introTextEditor={this.props.introTextEditor} introText={this.props.introText}
                        />
                    </div>
                </div>
                :
                null
        );
    }
}