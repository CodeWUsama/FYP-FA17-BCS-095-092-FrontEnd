import React, { Component } from 'react';
import classes from './requestTeacher.module.css';
import Footer from '../Footer/Footerpage'


export default class RequestTecher extends Component {

    state = {
        request: [],
        showEditor: false,
        i: '0',
        name: '',
        email: '',

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

                    request: resultData.data.request,

                });
            }
        })

            .catch(err => {
                console.log(err);
                console.log(this.props.fronttext);
            })

    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    // handleSubmit = (event) => {
    //     console.log(this.state.i);
    //    event.preventDefault()

    //     this.setState({request:{ i: this.state.i , name: this.state.name }})
    //     axios.patch('http://localhost:8080/t1td/addAprove',{ i: this.state.request[this.state.i] , name: this.state.name, } )

    // }

    handleSubmit = (id, email) => {
        fetch("http://localhost:8080/t1td/updateRequest", {
            method: "POST",
            headers: {

                "Content-Type": 'application/json'
            },

            body: JSON.stringify({
                id: id,
                email: email,
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

    handleRejection = (id) => {
        fetch("http://localhost:8080/t1td/reject", {
            method: "POST",
            headers: {

                "Content-Type": 'application/json'
            },

            body: JSON.stringify({
                id: id,
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

        let DisplayMeetings = this.state.request.reverse().map((blog, i) => {

            if (blog.approve == 'no') {

                return (
                    <div key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#BCD4E6' }}>
                            <p style={{ width: '10%' }}> {blog.name}</p>
                            <p style={{ width: '10%' }}>{blog.email} </p>
                            <p style={{ width: '10%' }}>{blog.messages}</p>
                            <p style={{ width: '10%' }}>{blog.time}</p>
                            <p style={{ width: '10%' }}>{blog.date}</p>
                        </div>
                        <div style={{ color: 'white' }}>.</div>
                        <div style={{ display: 'flex', justifyContent: 'center', }}>
                            <button
                                style={{ width: "18%" }}
                                type="submit"
                                onClick={() => { this.handleSubmit(blog._id, blog.email) }}
                                class="btn btn-outline-danger">
                                Accept
                            </button>
                            <div style={{ color: 'white' }}>..</div>
                            <button
                                style={{ width: "18%" }}
                                type="submit"
                                onClick={() => { this.handleRejection(blog._id) }}
                                class="btn btn-outline-danger">Reject</button>
                        </div>
                        <div style={{ color: 'white' }}>.</div>
                    </div>
                )
            }
        })

        return (
            <div>

                <div className={classes.rootCont}>
                    <div className={classes.innerlayer}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <p style={{ width: '10%' }}> NAME</p>
                            <p style={{ width: '10%' }}> EMAIL</p>
                            <p style={{ width: '10%' }}> PURPOSE</p>
                            <p style={{ width: '10%' }}> TIME</p>
                            <p style={{ width: '10%' }}> DATE</p>
                        </div>
                        {DisplayMeetings}

                    </div> </div>
                <Footer />
            </div>
        )
    }
}