import React, { Component } from 'react';
import classes from './dashboard.module.css';
import Template from './Template/Template';
import Footer from './../../Footer/Footer';
import axios from 'axios';
import $ from "jquery";
import LanguageIcon from '@material-ui/icons/Language';
import PeopleIcon from '@material-ui/icons/AccountCircle';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export default class dashboard extends Component {
    state = {
        username: localStorage.getItem("username"),
        savedTemps: [],
        websites: [],
        package: "",
        avatar: "",
        open: false,
        changed: false,
        picture: ""
    }


    handleClickOpen = () => {
        this.setState({
            open: true,
            changed: false
        });
    };

    handleClose = () => {
        this.setState({
            open: false,
            changed: false
        });
    };

    handleChange = () => {
        const formData = new FormData();
        formData.append('img', this.state.picture);

        fetch("http://localhost:8080/user/changePicture", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
            },
            body: formData
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

    componentDidMount() {
        window.scrollTo(0, 0);

        $(".custom-file-input").on("change", function () {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });

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
                websites: resData.user.websites,
                package: resData.user.package.level
            });
        }).catch(err => {
            console.log(err);
        })

        axios.get("http://localhost:8080/user/getProfilePic", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
            }
        }).then(result => {
            this.setState({ avatar: result.data.img });
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
                    return <Template isRated={temp.isRated} id={temp._id} key={temp._id} name="Fast Food" category="F1" admin={false} user={true} view={false} />;
                }
                if (temp.category === "B1") {
                    return <Template isRated={temp.isRated} id={temp._id} key={temp._id} name="Blogging" category="B1" admin={false} user={true} view={false} />;
                }
                if (temp.category === "S1") {
                    return <Template isRated={temp.isRated} id={temp._id} key={temp._id} name="Shopping" category="S1" admin={false} user={true} view={false} />;
                }
                if (temp.category === "T1") {
                    return <Template isRated={temp.isRated} id={temp._id} key={temp._id} name="Teaching" category="T1" admin={false} user={true} view={false} />;
                }
                if (temp.category === "D1") {
                    return <Template isRated={temp.isRated} id={temp._id} key={temp._id} name="Doctor Portfolio" category="D1" admin={false} user={true} view={false} />;
                }
            })
        }

        let renderPTemps;
        if (this.state.websites) {
            renderPTemps = this.state.websites.map(temp => {

                if (temp.category === "F1") {
                    return <Template key={temp.templateId} id={temp.templateId} name="Fast Food" category="F1" admin={true} user={false} view={false} />;
                }
                if (temp.category === "B1") {
                    return <Template id={temp.templateId} key={temp.templateId} name="Blogging" category="B1" admin={true} user={true} view={false} />;
                }
                if (temp.category === "S1") {
                    return <Template id={temp.templateId} key={temp.templateId} name="Shopping" category="S1" admin={true} user={true} view={false} />;
                }
                if (temp.category === "T1") {
                    return <Template id={temp.templateId} key={temp.templateId} name="Teaching" category="T1" admin={true} user={true} view={false} />;
                }
                if (temp.category === "D1") {
                    return <Template id={temp.templateId} key={temp.templateId} name="Doctor" category="D1" admin={true} user={true} view={false} />;
                }
            })
        }

        return (
            <>
                <div>
                    <div>
                        <div className={classes.headerCont} >
                            <img onClick={this.handleClickOpen} style={{ height: 200, width: 200, marginTop: 100, cursor: "pointer", borderRadius: "50%" }} src={"data:image/jpeg;base64," + this.state.avatar}></img>
                            <p className={classes.welcome}>Welcome {this.state.username} On Studio! </p>
                            <p style={{ color: 'white' }}>!</p>
                        </div>
                        {this.state.open ?
                            <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", marginBottom: 80, marginTop: 20 }}>
                                {this.state.changed ?
                                    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                                        <button onClick={this.handleChange} className="btn btn-primary" style={{ marginRight: 20 }}>Change Picture</button>
                                        <button className="btn btn-success" onClick={this.handleClose}>Cancel</button>
                                    </div>
                                    :
                                    <div style={{ width: "80%", marginTop: "20px" }} className="custom-file">
                                        <input onChange={(e) => this.setState({ picture: e.target.files[0], changed: true })} type="file" className="custom-file-input" id="customFile" />
                                        <label className="custom-file-label" htmlFor="customFile">Choose Profile Image</label>
                                    </div>
                                }

                            </div>
                            : null
                        }

                        <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                            <p style={{ color: 'white' }}>!</p>
                            <p className={classes.plan}>Current Package: {this.state.package}</p>
                            <p style={{ color: "red", fontSize: 20, cursor: 'pointer' }} onClick={this.handleLogout}>Logout</p>
                        </div>
                        {/* <div className={classes.btCont}>
                            <button onClick={() => { window.location.href = '/create' }} className={classes.btt}>Create New Website</button>
                            <button onClick={() => { window.location.href = "/editProfile" }} className={classes.btt}>Edit Profile</button>
                            <button className={classes.btt} onClick={() => { window.location.href = "/billing" }}>Billing</button>
                        </div> */}

                        <div className={classes.optionsCont}>
                            <div className={classes.option} onClick={() => window.location.href = "/create"}>
                                <div className={classes.icon}>
                                    <LanguageIcon style={{ fontSize: 200 }} />
                                </div>
                                <div className={classes.text}>
                                    <p className={classes.textStyle}>Create Website</p>
                                </div>
                            </div>

                            <div className={classes.option} onClick={() => window.location.href = "/editProfile"}>
                                <div className={classes.icon}>
                                    <PeopleIcon style={{ fontSize: 200 }} />
                                </div>
                                <div className={classes.text}>
                                    <p className={classes.textStyle}>Edit Profile</p>
                                </div>
                            </div>

                            <div className={classes.option} onClick={() => window.location.href = "/billing"}>
                                <div className={classes.icon}>
                                    <MonetizationOnIcon style={{ fontSize: 200 }} />
                                </div>
                                <div className={classes.text}>
                                    <p className={classes.textStyle}>Manage Billing</p>
                                </div>
                            </div>

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
                    <Footer />
                </div>
            </>
        );
    }
}