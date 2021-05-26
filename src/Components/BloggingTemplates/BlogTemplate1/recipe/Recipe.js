import React, { Component } from 'react';
import classes from './recipe.module.css';


export default class Recipe extends Component {
    state = {
        image: [],
        recipe: [],
        i: null,

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
                        image: resultData.image
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
        fetch("http://localhost:8080/b1td/getTecData?id="+localStorage.getItem("id"), {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        }).then(result => {
            return result.json();
        }).then(resultData => {
            if (this._isMounted) {
                this.setState({
                    recipe: resultData.data.recipe,
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

        function gotorecipe(e) {
            e.preventDefault();
            window.location = '/b1/#/recipe';
        }
        let count = 0;

        let Displayblog = this.state.recipe.reverse().map((blog, i) => {
            var image = this.state.image;
            if (count < 3) {
                count = count + 1;
                return (
                    <div className={classes.recipe} key={i}>
                        <img style={{ height: '300px', width:300 }} src={'data:image/jpg;base64,' + image[2-i]} />
                        <div className={classes.recipetext} >
                            <p style={{ fontSize: '25px', color: 'rgb(176,0,0)' }}>{blog.name}</p>
                            <p style={{ color: 'rgb(96,0,0)' }}>{blog.text}</p>
                        </div>
                        <hr />
                    </div>
                )
            }
        })
        return (
            <div className={classes.rootCont} onClick={gotorecipe}>
                <div className={classes.textheading}>
                    <p style={{ fontSize: '30px', color: 'rgb(176,0,0)' }}>Recent Blogs</p>
                </div>
                <div className={classes.innerlayer}>
                    <div className={classes.inner}>
                        {Displayblog}
                    </div>
                </div>
            </div>
        )
    }
}