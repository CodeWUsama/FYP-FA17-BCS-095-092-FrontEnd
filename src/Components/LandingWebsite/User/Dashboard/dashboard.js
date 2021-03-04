import React, { Component } from 'react';
import classes from './dashboard.module.css';
import Template from './Template/Template';
import Footer from './../../Footer/Footer';

export default class dashboard extends Component {
    state = {
        username: localStorage.getItem("username"),
        savedTemps: [],
        publishedTemps: [],
        package:""
    }

    componentDidMount() {
        fetch("http://localhost:8080/user/getUserData", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(resData => {
            this.setState({
                savedTemps: resData.user.templates,
                publishedTemps: resData.user.publishedTemps,
                package: resData.user.package.level
            });
        }).catch(err => {
            console.log(err);
        })
    }

    handleFoodTemplate = () => {
        fetch("http://localhost:8080/user/createwebsite", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                template: "F1"
            })
        })
            .then(res => {
                if (res.status === 200) {
                    window.location.href = '/foodtemplate';
                }
            })
    }

    handleFoodTemplate = () => {
        fetch("http://localhost:8080/user/createwebsite", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                template: "B1"
            })
        })
            .then(res => {
                if (res.status === 200) {
                    window.location.href = '/foodtemplate';
                }
            })
    }

    handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.removeItem('userToken');
        localStorage.removeItem('id');
        window.location.href = "/"
    }

    render() {

        let renderSTemps;
        if (this.state.savedTemps) {
            renderSTemps = this.state.savedTemps.map(temp => {
                if (temp.category === "F1") {
                    return <Template id={temp._id} key={temp._id} name="Fast Food" category="F1" admin={false} user={true} view={false} />;
                }
                if (temp.category === "B1") {
                    return <Template id={temp._id} key={temp._id} name="Blogging" category="B1" admin={false} user={true} view={false} />;
                }
                if (temp.category === "S1") {
                    return <Template id={temp._id} key={temp._id} name="Shopping" category="S1" admin={false} user={true} view={false} />;
                }
                if (temp.category === "T1") {
                    return <Template id={temp._id} key={temp._id} name="Teaching" category="T1" admin={false} user={true} view={false} />;
                }
            })
        }

        let renderPTemps;
        if (this.state.publishedTemps) {
            renderPTemps = this.state.publishedTemps.map(temp => {
                if (temp === "F1") {
                    return <Template key={Math.random()} name="Fast Food" category="F1" admin={true} user={false} view={false} />;
                }
            })
        }

        return (
            <div>
                <div>
                    <p className={classes.welcome}>Welcome {this.state.username} On Studio! </p>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <p className={classes.plan}>Current Package: {this.state.package}</p>
                    </div>
                    <div className={classes.btCont}>
                        <button onClick={() => { window.location.href = '/create' }} className={classes.btt}>Create New Website</button>
                        <button onClick={() => { window.location.href = "/editProfile" }} className={classes.btt}>Edit Profile</button>
                        <button className={classes.btt} onClick={() => { window.location.href = "/billing" }}>Billing</button>
                        <button className={classes.btt} onClick={this.handleLogout}>Logout</button>
                    </div>

                    <div className={classes.sectionTemp}>
                        <p className={classes.head}>Saved Templates</p>
                        <hr />
                        <div className={classes.tempsCont}>
                            {renderSTemps}
                        </div>
                    </div>
                    <div className={classes.sectionTemp}>
                        <p className={classes.head}>Published Websites</p>
                        <hr />
                        <div className={classes.tempsCont}>
                            {renderPTemps}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}