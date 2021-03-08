import React, { Component } from 'react';
import classes from './research.module.css';
import Editor from "../ReusableComponents/BackdropEditor/Editor";
import Updateblog from './updateblog/Updateblog';
import Addblog from './addnewblg/Addblog';
import imgadd from './addnewblg/addimage.png';
import remove from './remove.png';
import Footer from '../Footer/Footerpage'

export default class Front extends Component {

    state = {
        image: [],
        research: [],
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
        await fetch("http://localhost:8080/t1td/getTeacherimages?id=" + localStorage.getItem("id"), {
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
        fetch("http://localhost:8080/t1td/getTeacherData?id="+localStorage.getItem("id"), {

            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        }).then(result => {
            return result.json();
        }).then(resultData => {
            if (this._isMounted) {
                this.setState({
                    research: resultData.data.research,
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
        fetch("http://localhost:8080/t1td/delete", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },

            body: JSON.stringify({
                blogid: id,
                tempId:localStorage.getItem("id")
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

        let Displayblog = this.state.research.reverse().map((blog, i) => {
            let len = this.state.image.length-1;
            return (
                <div key={i}>
                    <div style={{ color: 'white' }}>.</div>
                    <div className={classes.research} >
                        <div className={classes.researchtext}>
                            <h3 style={{marginBottom:20}}>{blog.name}</h3>
                            <p>{blog.text}</p>
                        </div>
                        <img style={{ width: '30%', height: '300px' }} src={'data:image/jpg;base64,' + this.state.image[len-i]} />
                    </div>
                </div>
            )
        })


        return (
            <div className={classes.rootCont}>
                <h3 style={{ marginTop: '5%' }}>ALL RESEARCH</h3>
                <div className={classes.researchlayer}>
                    {Displayblog}
                    <Footer />
                </div>

            </div>


        )
    }
}