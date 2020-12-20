import React, { Component } from 'react';
import classes from './ServicesSection.module.css';
import dietIcon from './diet.png';
import deliveryIcon from './delivery.png';
import cookIcon from './cook.png';

export default class ServicesSection extends Component {

    render() {
        return (
            <div className={classes.rootCont}>
                <div className={classes.headCont}>
                    <p className={classes.headText}>OUR SERVICES</p>
                    <p
                        className={classes.servicesText}
                        style={{ fontSize: this.props.servicesDescription.fontSize, fontFamily: this.props.servicesDescription.fontFamily, color: this.props.servicesDescription.fontColor }}
                        onClick={this.props.clickHandler}
                    >
                        {this.props.servicesDescription.text}
                    </p>
                </div>
                <div className={classes.servicesCont}>
                    <div className={classes.serviceCont}>
                        <div className={classes.iconRootCont}>
                            <div className={classes.iconCont}>
                                <img className={classes.serviceIcon} src={dietIcon} alt="Diet-Icon" />
                            </div>
                        </div>
                        <p
                            className={classes.serviceHeading}
                            style={{ fontSize: this.props.s1H.fontSize, fontFamily: this.props.s1H.fontFamily, color: this.props.s1H.fontColor }}
                            onClick={this.props.s1HClickHandler}
                        >
                            {this.props.s1H.text}
                        </p>
                        <p
                            className={classes.serviceDesc}
                            style={{ fontSize: this.props.s1D.fontSize, fontFamily: this.props.s1D.fontFamily, color: this.props.s1D.fontColor }}
                            onClick={this.props.s1DClickHandler}
                        >
                            {this.props.s1D.text}
                        </p>
                    </div>
                    <div className={classes.serviceCont}>
                        <div className={classes.iconRootCont}>
                            <div className={classes.iconCont}>
                                <img className={classes.serviceIcon} src={deliveryIcon} alt="Delivery-Icon" />
                            </div>
                        </div>
                        <p
                            className={classes.serviceHeading}
                            style={{ fontSize: this.props.s2H.fontSize, fontFamily: this.props.s2H.fontFamily, color: this.props.s2H.fontColor }}
                            onClick={this.props.s2HClickHandler}
                        >
                            {this.props.s2H.text}
                        </p>
                        <p
                            className={classes.serviceDesc}
                            style={{ fontSize: this.props.s2D.fontSize, fontFamily: this.props.s2D.fontFamily, color: this.props.s2D.fontColor }}
                            onClick={this.props.s2DClickHandler}
                        >
                            {this.props.s2D.text}
                        </p>
                    </div>
                    <div className={classes.serviceCont}>
                        <div className={classes.iconRootCont}>
                            <div className={classes.iconCont}>
                                <img className={classes.serviceIcon} src={cookIcon} alt="Cook-Icon" />
                            </div>
                        </div>
                        <p
                            className={classes.serviceHeading}
                            style={{ fontSize: this.props.s3H.fontSize, fontFamily: this.props.s3H.fontFamily, color: this.props.s3H.fontColor }}
                            onClick={this.props.s3HClickHandler}
                        >
                            {this.props.s3H.text}
                        </p>
                        <p
                            className={classes.serviceDesc}
                            style={{ fontSize: this.props.s3D.fontSize, fontFamily: this.props.s3D.fontFamily, color: this.props.s3D.fontColor }}
                            onClick={this.props.s3DClickHandler}
                        >
                            {this.props.s3D.text}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}