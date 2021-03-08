import React, { Component } from 'react';
import Footer from '../../Footer/Footer';
import Template from '../Dashboard/Template/Template';
import classes from "./CreateWebsite.module.css";

export default class CreateWeb extends Component {

    state = {
        error: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        fetch("http://localhost:8080/user/sTempsLimit", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            }
        }).then(res => {
            if (res.status === 200) {
                this.setState({ error: false });
            }
            else {
                this.setState({ error: true });
            }
        }).catch(err => {
            console.log(err);
        })
    }


    render() {
        return (
            <div>
                <p className={classes.welcome}>Categories and Templates</p>

                {this.state.error ?
                    <h4 style={{ textAlign: 'center', color: "red" }}>Error! Your limit for creating new website is reached. Please upgrade your plan.</h4>
                    :
                    null
                }

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Food and Eating</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template name="Desi Restaurant" category="F1" admin={false} user={false} view={true} error={this.state.error} />
                    </div>
                </div>

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Shopping and store</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template name="Fashion Style" category="S1" admin={false} user={false} view={true} error={this.state.error} />
                    </div>
                </div>

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Blogging and Articles</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template name="Blogging on Tips" category="B1" admin={false} user={false} view={true} error={this.state.error} />
                    </div>
                </div>

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Teacher and Researcher Portfolio</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template name="Teacher Template" category="T1" admin={false} user={false} view={true} error={this.state.error} />
                    </div>
                </div>

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Doctor Portfolio</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template name="Desi Restaurant" category="NA" admin={false} user={false} view={true} error={this.state.error} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}