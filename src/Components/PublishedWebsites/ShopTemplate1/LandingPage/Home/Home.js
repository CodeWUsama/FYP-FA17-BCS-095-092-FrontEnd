import React, { Component } from 'react';
import AnimatedText from './animatedText';
import classes from "./Home.module.css";

export default class Home extends Component {

    state = {
        img: "",
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

    render() {
        return (
            this.props.storeName ?
                <div
                    className={classes.rootCont}
                    style={{ backgroundImage: "url('data:image/jpeg;base64," + this.state.img }}
                >
                    <AnimatedText
                        storeName={this.props.storeName}
                        introText={this.props.introText}
                    />
                </div>
                :
                null
        );
    }
}