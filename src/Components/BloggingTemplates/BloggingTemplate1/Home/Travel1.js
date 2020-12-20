import React, { Component } from 'react';
import classes from './Travel.module.css';
import Gallery from './gallery /Gallery';

export default class Travelrow1 extends Component {
    state = {
        curTime: new Date().toLocaleString(),
        imgs: [],
    }
    _isMounted = false;

    async componentDidMount() {
        this._isMounted = true;
        await fetch("http://localhost:8080/b1td/getBlogimages", {
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
            window.location = '/research';
        }
        let displayresearch = this.props.research.map((blog, index) => {
            return (
                <div className={classes.row12} key={index} onClick={gotoresearch}>
                    <img className={classes.imgr} src={'data:image/jpg;base64,' + this.state.imgs[index]} />
                    <h6 className={classes.text1} onClick={this.props.travelnameEditor}>{blog.name}</h6>
                    <h5 style={{ fontSize: blog.fontSize, fontFamily: blog.fontFamily, color: blog.fontColor }} onClick={this.props.research1Editor}> {blog.text} </h5>
                    <p style={{ color: "grey" }}>{blog.date}</p>
                    <p onClick={this.props.traveldisEditor}>{blog.description}</p>
                </div>

            )
        })
        return (
            <div className={classes.rootDiv}>
                <div className={classes.col}>
                    <div className={classes.travelimg}>
                        <h2 className={classes.traveltext} style={{ fontSize: this.props.travelname.fontSize, fontFamily: this.props.travelname.fontFamily, color: this.props.travelname.fontColor }} onClick={this.props.travelnameEditor}>{this.props.travelname.text} </h2>
                        <img className={classes.imgresive} src="/img/camera.jpg" />
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
                    <Gallery />
                    <div className={classes.row3}>
                        {displayresearch}
                        <div className={classes.row13}>
                            <img className={classes.imgres} src="/img/image-2.jpeg" />
                            <h4 style={{ padding: 1 }}>Subscribe to my blog</h4>
                            <p style={{ margin: 20 }}>Far far away behind the word mountains far from away</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}