import React, { Component } from 'react';
import Footer from '../Footer/Footerpage'
import classes from './teacher.module.css';

export default class Meeting extends Component {

    state = {
        request: [],
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
                    request: resultData.data.request,
                });
                if (resultData.status == 200) {
                    window.location.reload();
                }
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
        let DisplayMeetings = this.state.request.reverse().map((blog, i) => {

            if (blog.approve == 'true') {
                return (
                    <div key={i}>
                        <div className={classes.data} style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#BCD4E6' }}>
                            <p  >{blog.name}</p>     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p >{blog.email}</p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p >{blog.messages}</p>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p >{blog.time}</p>     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p >{blog.date}</p>
                        </div>
                        <div style={{ color: 'white' }}>.</div>
                        <div style={{ color: 'white' }}>.</div>
                    </div>
                )
            }
        })

        return (
            <div>

                <div style={{
                    width: '100%',
                    padding:10,
                    marginTop: '10%',
                    display: 'flex',
                    justifycontent: 'center',
                }}>

                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <p style={{ width: '50%' }}>NAME</p>
                            <p style={{ width: '50%' }}>EMAIL</p>
                            <p style={{ width: '50%' }}>MESSAGE</p>
                            <p style={{ width: '50%' }}>TIME</p>
                            <p style={{ width: '50%' }}>DATE</p>
                        </div>
                        {DisplayMeetings}
                    </div>  </div>
                <Footer />
            </div>
        )
    }
}