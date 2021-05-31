import React, { Component } from 'react';
import introBanner from './main-bg.jpg';
import './IntroBanner.css';
export default class IntroBanner extends Component {
    render() {
        return (
            <div className="intro-cont">

                <div className="intro-text">
                    <h1 className="intro-head">Welcome To Website Creator</h1>
                    <p className="intro-para"> A Single Place to Easily Create, Manage and Publish Your Website</p>
                </div>

                <div className="intro-banner">
                    <img className="banner-img" src={introBanner} alt="Introduction Banner Img"></img>
                </div>

            </div>
        );
    }
}
