import React, { Component } from 'react';
import classes from './home.module.css';

export default class Front extends Component {

    state = {
        image: [],
        research: [],
        i: null,

    }
    _isMounted = false;
    async componentDidMount() {
        this._isMounted = true;
        await fetch("http://localhost:8080/t1td/getTeacherimages", {
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
        fetch("http://localhost:8080/t1td/getTeacherData", {

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
                console.log(this.props.fronttext);
            })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        function gotoresearchs(e) {
            e.preventDefault();
            window.location = '/research';
        }
        let count = 0;

        let Displayblog = this.state.research.reverse().map((blog, i) => {
            var image = this.state.image.reverse();
            if (count < 2) {
                count = count + 1;
                return (
                    <div key={i}>
                        <div style={{ color: 'white' }}>.</div>
                        <div className={classes.research}>
                            <div className={classes.researchtext}>
                                <p>{blog.name}</p>
                                <p>{blog.text}</p>
                                <button style={{ width: "42%" }} className={classes.butn} type="button" onClick={gotoresearchs} class="btn btn-outline-danger">Veiw Research</button>
                            </div>
                            <img style={{ width: '30%', height: '290px' }} src={'data:image/jpg;base64,' + image[i]} />
                        </div>
                    </div>
                )
            }
        })

        return (
            <div className={classes.rootCont}>
                <div className={classes.innerlayer}>
                    <div className={classes.coverlayer}>
                        <p
                            style={{
                                fontSize: this.props.fronttext.fontSize,
                                fontFamily: this.props.fronttext.fontFamily,
                                color: this.props.fronttext.fontColor,
                                fontWeight: this.props.fronttext.bold ? "bold" : "normal",
                                fontStyle: this.props.fronttext.italic ? "italic" : "normal",
                                textDecoration: this.props.fronttext.underline ? "underline" : "none",
                                textAlign: this.props.fronttext.align,

                            }}
                            onClick={this.props.fronttextEditor}
                            className={classes.fronttext}> {this.props.fronttext.text} </p>

                        <p
                            style={{
                                fontSize: this.props.fronttext2.fontSize,
                                fontFamily: this.props.fronttext2.fontFamily,
                                color: this.props.fronttext2.fontColor,
                                fontWeight: this.props.fronttext2.bold ? "bold" : "normal",
                                fontStyle: this.props.fronttext2.italic ? "italic" : "normal",
                                textDecoration: this.props.fronttext2.underline ? "underline" : "none",
                                textAlign: this.props.fronttext2.align,
                            }}
                            onClick={this.props.fronttext2Editor}
                            className={classes.fronttext}>
                            {this.props.fronttext2.text} </p>
                    </div>
                    <div className={classes.researchlayer}>
                        <h6 style={{ marginLeft: '40%', fontSize: '20px' }}> LATEST RESEARCH</h6>
                        {Displayblog}
                    </div>
                </div>

            </div>
        )
    }
}