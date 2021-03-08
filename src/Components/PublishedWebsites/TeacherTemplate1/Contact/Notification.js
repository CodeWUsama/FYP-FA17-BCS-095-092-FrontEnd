import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Footer from '../Footer/Footerpage'
import classes from './contact.module.css'

export default class Notification extends Component {

    state = {
        tnotifi: [],
        showEditor: false,
        i: null,

    }
    handleChange = i => {
        this.setState({ i });
        console.log(i)
    }

    _isMounted = false;
    async componentDidMount() {
        this._isMounted = true;

        fetch("http://localhost:8080/t1td/getRequest?id=" + localStorage.getItem("id"), {

            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        }).then(result => {
            return result.json();
        }).then(resultData => {
            if (this._isMounted) {
                this.setState({
                    tnotifi: resultData.data.tnotifi,
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

    handle = (id, email) => {
        let reply = document.getElementById('reply').value;
        axios.patch('http://localhost:8080/t1td/reply', {
            reply: reply,
            email: email,
            tempId: localStorage.getItem("id")

        }).then(result => {
            if (result.status == 200) {
                window.location.reload();
            }
        })

    }

    handleSubmit = (id) => {
        fetch("http://localhost:8080/t1td/deletechat", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },

            body: JSON.stringify({
                blogid: id,
                tempId: localStorage.getItem("id")
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
        let DisplayMeetings = this.state.tnotifi.reverse().map((blog, i) => {

            return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', marginLeft: '10%' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '10%' }}>
                        {/* <img style={{height:'54px', width:'4%',cursor:'pointer'}} onClick={()=> { this.handleSubmit(blog._id )  } }src={remove}/>     */}
                    </div>
                    <div className={classes.data} style={{ height: 'max-content', width: '90%', display: 'flex', justifyContent: 'space-around', backgroundColor: '#BCD4E6' }}>

                        <p style={{ width: '10%' }}> {blog.name}</p>     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p style={{ width: '10%' }}>{blog.email}</p>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p style={{ width: '10%' }}>{blog.message}</p>
                    </div>
                    <div style={{ color: 'white' }}>.</div>
                    <div>
                        <TextField
                            style={{ width: '40%' }}

                            id="reply" type="text"
                            label="Reply" required={true} />
                        <button
                            style={{ width: "15%", marginLeft: '10%' }}
                            type="submit" className={classes.btn}
                            onClick={() => { this.handle(blog._id, blog.email) }}
                            class="btn btn-outline-info">Reply
                        </button>

                        <button type="button"
                            onClick={() => { this.handleSubmit(blog._id) }}
                            class="btn btn-outline-danger" >Discard</button>
                    </div>

                    <div style={{ color: 'white' }}>.</div>
                </div>
            )
        })

        return (
            <div>
                <div style={{
                    width: '100%',
                    marginTop: '10%',
                    display: 'flex',
                    justifycontent: 'center',
                }}>
                    <div style={{ width: '90%', }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <p style={{ width: '10%' }}>NAME</p>
                            <p style={{ width: '10%' }}>EMAIL</p>
                            <p style={{ width: '10%' }}>MESSAGE</p>
                        </div>
                        {DisplayMeetings}
                    </div> </div>
                <Footer />
            </div>
        )
    }
}