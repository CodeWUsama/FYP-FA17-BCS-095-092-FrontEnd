import React, { Component } from 'react';
import classes from './Travel.module.css';
import Gallery from '../Gallery/Gallery';
import camImg from "./../images/camera.jpg";

export default class Travelrow1 extends Component {
    state = {
        curTime: new Date().toLocaleString(),
        imgs: [],
    }
    _isMounted = false;

    async componentDidMount() {
        this._isMounted = true;
        await fetch("http://localhost:8080/b1td/getBlogimages?id="+localStorage.getItem("id"), {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        })
            .then(result => {
                return result.json();
            }).then(resultData => {
                if (this._isMounted) {
                    this.setState({
                        imgs: resultData.imgs
                    });
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
        function gotoresearch(e) {
            e.preventDefault();
            window.location = '/B1/#/research';
        }
        var count = 0;
        let images = this.state.imgs.reverse();
        let displayresearch = this.props.research.reverse().map((blog, index) => {
            var leng = (this.props.research.length - 1)

            if (count < 3) {
                count = count + 1;
                console.log(count);
                return (
                    <div className={classes.row12} key={index} onClick={gotoresearch}>
                        <img className={classes.imgr} src={'data:image/jpg;base64,' + images[index]} />
                        <h6 className={classes.text1} >{blog.name}</h6>
                        <h5 > {blog.text} </h5>
                        <p style={{ color: "grey" }}>{blog.date}</p>
                        <p >{blog.description}</p>
                    </div>
                )
            }


        })

        return (
            <div className={classes.rootDiv}>
                <div className={classes.col}>
                    <div className={classes.travelimg}>
                        <h2 className={classes.traveltext} style={{ fontSize: this.props.travelname.fontSize, fontFamily: this.props.travelname.fontFamily, color: this.props.travelname.fontColor }} onClick={this.props.travelnameEditor}>{this.props.travelname.text} </h2>
                        <img className={classes.imgresive} src={camImg} />
                    </div>
                    <div className={classes.row2}>
                        <div className={classes.row21}>
                            <h2 className={classes.text21} style={{ fontSize: this.props.traveldis.fontSize, fontFamily: this.props.traveldis.fontFamily, color: this.props.traveldis.fontColor }} onClick={this.props.traveldisEditor}> {this.props.traveldis.text} </h2>
                            <p style={{ paddingLeft: 25 }}> {this.state.curTime}</p>

                        </div>
                        <div className={classes.row22}>
                            <h2 className={classes.text21} style={{ fontSize: this.props.traveldis.fontSize, fontFamily: this.props.traveldis.fontFamily, color: this.props.traveldis.fontColor }} onClick={this.props.traveldisEditor}> {this.props.traveldis.text} </h2>
                            <p style={{ paddingLeft: 25 }}> {this.state.curTime}</p>
                        </div>
                    </div>
                    <h1 className={classes.travel} style={{ fontSize: 18 }} onClick={gotoresearch}> RECENT </h1>
                    <div className={classes.row3}>

                        {displayresearch}

                    </div>
                    <Gallery />
                </div>
            </div>
        )
    }
}