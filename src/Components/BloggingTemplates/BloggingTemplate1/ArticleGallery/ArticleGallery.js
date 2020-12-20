import React, { Component } from 'react';
import classes from './Article.module.css';

export default class Homerow5 extends Component {
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
        let displayBlogtravel = this.props.research.map((blog, index) => {
            const sortedActivities = this.props.research.sort((a, b) => b.date - a.date)
            return (

                <div className={classes.row31} key={index} onClick={gotoresearch}>
                    <div>
                        <img className={classes.imgresize} src={'data:image/jpeg;base64,' + this.state.imgs[index]} />
                    </div>
                    <div className={classes.row32}>
                        <a href="/gallery" className={classes.text9} onClick={this.props.travelnameEditor}>{blog.name}</a>
                        <h4 className={classes.article} onClick={this.props.research1Editor}>{blog.text}</h4>
                        <p style={{ color: "grey" }}>{blog.date}</p>
                        <p onClick={this.props.traveldisEditor}>{blog.description}</p>
                    </div>
                </div>

            )
        })


        return (
            <div className={classes.rootDiv}>
                <div className={classes.toprow}>
                    <div >
                        <h1 className={classes.travel} style={{ fontSize: 18 }} onClick={gotoresearch}> TRAVEL</h1>
                        {displayBlogtravel}
                    </div>

                </div>
            </div>

        );
    }
}