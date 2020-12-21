import React, { Component } from 'react';
import classes from './gallery.module.css';
export default class Gallery extends Component {

    state = {
        imgs: [],
        gallery: [],
    }

    async componentDidMount() {
        this._isMounted = true;
        await fetch("http://localhost:8080/b1td/getGalleryimages?id=" + localStorage.getItem("id"), {
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
        fetch("http://localhost:8080/b1td/getTravelData?id=" + localStorage.getItem("id"), {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        }).then(result => {
            return result.json();
        }).then(resultData => {
            if (this._isMounted) {
                this.setState({
                    gallery: resultData.data.gallery,
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
        var count = 0;
        function gotogallary(e) {
            e.preventDefault();
            window.location = '/B1/#/gallery';
        }
        let displayGallery = this.state.gallery.map((blog, index) => {
            if (count < 3) {
                count = count + 1;
                return (
                    <div className={classes.first} key={index}>
                        <img className={classes.imgrow} src={'data:image/jpg;base64,' + this.state.imgs[index]} />
                    </div>
                )
            }
        })
        return (
            <div className={classes.rootDiv}>
                <div className={classes.col2} onClick={gotogallary}>
                    {displayGallery}
                </div>
            </div>

        );
    }
}











