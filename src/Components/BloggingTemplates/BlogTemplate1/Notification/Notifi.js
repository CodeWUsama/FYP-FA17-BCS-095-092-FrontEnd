import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import remove from './remove.png';

export default class Notifi extends Component {

    state = {
        blognotifi: [],
        i: null,

    }
    handleChange = i => {
        this.setState({ i: i });
    }

    _isMounted = false;
    async componentDidMount() {
        this._isMounted = true;

        fetch("http://localhost:8080/b1td/getNotiData?id=" + localStorage.getItem("id"), {

            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        }).then(result => {
            return result.json();
        }).then(resultData => {
            if (this._isMounted) {
                this.setState({
                    blognotifi: resultData.data.blognotifi,
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
        axios.patch('http://localhost:8080/b1td/reply', {
            reply: reply,
            email: email,
            id:localStorage.getItem("id")
        }).then(result => {
            if (result.status == 200) {
                window.location.reload();
            }
        })

    }

    handleSubmit = (id) => {
        fetch("http://localhost:8080/b1td/deletechat", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },

            body: JSON.stringify({  
                blogid: id,
                templateId:localStorage.getItem("id")
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
        let DisplayMeetings = this.state.blognotifi.reverse().map((blog, i) => {

            return (
                <div key={i} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '8%' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '10%' }}>
                        <img style={{ height: '50px', width: '3%', }} onClick={() => { this.handleSubmit(blog._id) }} src={remove} />
                    </div>
                    <div style={{ width: '90%', display: 'flex', justifyContent: 'space-around', backgroundColor: '#BCD4E6' }}>
                        <p style={{ width: '10%' }}> {blog.name}</p>     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p style={{ width: '10%' }}> {blog.email}</p>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p style={{ width: '10%' }}> {blog.message}</p>
                    </div>
                    <div style={{ color: 'white' }}>.</div>
                    <div>
                        <TextField
                            style={{ width: '40%' }}
                            id="reply" type="text"
                            label="Reply" required={true} />
                        <button
                            style={{ width: "15%", marginLeft: '10%' }}
                            type="submit"
                            onClick={() => { this.handle(blog._id, blog.email) }}
                            class="btn btn-outline-info">Reply
                        </button>
                    </div>

                    <div style={{ color: 'white' }}>.</div>
                </div>
            )
        })

        return (
            <div style={{
                width: '100%',
                marginTop: '10%',
                display: 'flex',
                justifycontent: 'center',
                alignItems: 'center'
            }}>
                <div style={{ width: '90%', }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <p style={{ width: '10%' }}> NAME</p>
                        <p style={{ width: '10%' }}>EMAIL</p>
                        <p style={{ width: '10%' }}>MESSAGE</p>
                    </div>
                    {DisplayMeetings}
                </div>
            </div>
        )
    }
}