import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './home.module.css';

export default class Home extends Component {

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
            window.location.href = '/B1/#/recipe';
        }
        let count = 0;

        let Displayblog = this.state.recipe.reverse().map((blog, i) => {
            var image = this.state.image.reverse();
            if (count < 1) {
                count = 1;
                return (
                    <div className={classes.recipe} key={i}>
                        <img style={{ height: '350px' }} src={'data:image/jpg;base64,' + image[i]} />
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
            <div className={classes.rootCont}>
                <div className={classes.innerlayer}>
                    <div className={classes.home}>
                        <div className={classes.intro} >
                            <p
                                style={{
                                    fontSize: this.props.hometext.fontSize, fontFamily: this.props.hometext.fontFamily, color: this.props.hometext.fontColor,
                                    fontWeight: this.props.hometext.bold ? "bold" : "normal", fontStyle: this.props.hometext.italic ? "italic" : "normal", textDecoration: this.props.hometext.underline ? "underline" : "none", textAlign: this.props.hometext.align,
                                }}
                                onClick={this.props.hometextEditor}> {this.props.hometext.text} </p>
                            <button type="button" onClick={gotorecipe} className="btn btn-outline-danger">Veiw All Blogs</button>
                        </div>

                    </div>
                    <div className={classes.recipe} onClick={gotorecipe}>
                        {Displayblog}
                    </div>
                </div>
            </div>

        )
    }
}