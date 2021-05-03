import axios from 'axios';
import React, { Component } from 'react';
import Footer from '../../Footer/Footer';
import Template from '../Dashboard/Template/Template';
import classes from "./CreateWebsite.module.css";

export default class CreateWeb extends Component {

    state = {
        error: false,

        drating: 0,
        dreviews: [],

        frating: 0,
        freviews: [],

        trating: 0,
        treviews: [],

        brating: 0,
        breviews: [],

        srating: 0,
        sreviews: [],
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

        axios.get("http://localhost:8080/user/getRatings").then(data => {
            this.setState({
                drating: data.data.data[0].rating,
                frating: data.data.data[1].rating,
                trating: data.data.data[2].rating,
                srating: data.data.data[3].rating,
                brating: data.data.data[4].rating,

                dreviews: data.data.data[0].reviews,
                freviews: data.data.data[1].reviews,
                treviews: data.data.data[2].reviews,
                sreviews: data.data.data[3].reviews,
                breviews: data.data.data[4].reviews,
            });
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
                        <Template rating={this.state.frating} reviews={this.state.freviews} name="Desi Restaurant" category="F1" admin={false} user={false} view={true} error={this.state.error} />
                    </div>
                </div>

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Shopping and store</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template rating={this.state.srating} reviews={this.state.sreviews}  name="Fashion Style" category="S1" admin={false} user={false} view={true} error={this.state.error} />
                    </div>
                </div>

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Blogging and Articles</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template name="Blogging on Tips" reviews={this.state.breviews}  rating={this.state.brating} category="B1" admin={false} user={false} view={true} error={this.state.error} />
                    </div>
                </div>

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Teacher and Researcher Portfolio</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template name="Teacher Template" reviews={this.state.treviews}  rating={this.state.trating} category="T1" admin={false} user={false} view={true} error={this.state.error} />
                    </div>
                </div>

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Doctor Portfolio</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template name="Doctor's Portfolio on hand" reviews={this.state.dreviews}  rating={this.state.drating} category="D1" admin={false} user={false} view={true} error={this.state.error} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}