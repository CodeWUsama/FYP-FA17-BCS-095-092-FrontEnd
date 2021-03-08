import React, { Component } from 'react';
import classes from './recipe.module.css';
import Footer from '../footer/FooterShow';

export default class Recipe extends Component {
    state = {
        image: [],
        recipe: [],
        i: null,
        showEditor: false,
        showAdd: false,
        updateblog: false,

        textrecipe: {
            text: "hey",
            name: "hello",
        }

    }
    editorHandler = () => {
        this.setState({ showEditor: false });
    }
    addHandler = () => {
        this.setState({ showAdd: false });
    }
    closeHandler = () => {
        this.setState({ showAdd: false });
        this.setState({ updateblog: false });

    }
    AddBlog = () => {
        this.setState({ showAdd: true });
    }

    UpdateBlog = () => {
        this.setState({ updateblog: true });
    }
    updateHandler = () => {
        this.setState({ updateblog: false });
    }

    changeUpdate = (newName, name) => {
        this.setState({
            textrecipe: {
                text: newName,
                name: name,
            }
        });
    }

    _isMounted = false;
    async componentDidMount() {
        this._isMounted = true;
        await fetch("http://localhost:8080/b1td/getBlogimages?id=" + localStorage.getItem("id"), {
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
        fetch("http://localhost:8080/b1td/getTecData?id=" + localStorage.getItem("id"), {
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

    handleSubmit = (id) => {
        fetch("http://localhost:8080/b1td/delete", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },

            body: JSON.stringify({
                blogid: id,
                templateId: localStorage.getItem("id")
            })
        })
            .then(result => {
                if (result.status == 200) {
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {

        let Displayblog = this.state.recipe.reverse().map((blog, i) => {
            var image = this.state.image;
            let len = this.state.recipe.length - 1;
            return (
                <div className={classes.recipe} key={i}>
                    <img style={{ height: '350px', width: 330 }} src={'data:image/jpg;base64,' + image[len - i]} />
                    <div className={classes.recipetext} >
                        <p style={{ fontSize: '25px', color: 'rgb(176,0,0)' }}  >{blog.name}</p>
                        <p style={{ color: 'rgb(96,0,0)' }}  > {blog.text}</p>
                    </div>
                    <hr />
                    <p style={{ color: 'white' }}>.</p>
                </div>
            )

        })
        return (
            <div className={classes.rootCont} >
                <div className={classes.textheading}>
                    <p style={{ fontSize: '30px', color: 'rgb(176,0,0)' }}>Blogs</p>
                </div>
                <div className={classes.innerlayer}>
                    <div className={classes.inner}>
                        {Displayblog}
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}