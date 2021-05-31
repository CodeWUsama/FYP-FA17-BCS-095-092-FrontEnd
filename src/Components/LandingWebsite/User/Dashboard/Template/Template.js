import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavF1 from '../../../../FoodTemplates/FoodTemplate1/NavBar/NavBar';
import F1Img from './f1.jpg';
import notA from './notA.JPG';
import B1Img from './b1.jpg';
import classes from './Template.module.css';
import S1Img from "./s1.JPG";
import T1Img from "./t1.png";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PreviewIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import PublishIcon from '@material-ui/icons/Publish';
import Tooltip from '@material-ui/core/Tooltip';
import StopIcon from '@material-ui/icons/Stop';
import D1Img from "./D1.PNG";
import ReactStars from "react-rating-stars-component";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";

export default class Template extends Component {

    state = {
        name: this.props.name,
        category: this.props.category,
        admin: this.props.admin,
        user: this.props.user,
        view: this.props.view,
        open: false,
        rating: 0,
        open2: false
    }

    ratingChanged = (newRating) => {
        this.setState({ rating: newRating });
        this.handleClickOpen();
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClickOpen2 = () => {
        this.setState({ open2: true });
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    handleClose2 = () => {
        this.setState({
            open2: false
        });
    };

    postReview = () => {
        axios.post("http://localhost:8080/user/rateTemplate", {
            rating: this.state.rating,
            review: document.getElementById("Review").value,
            tempId: this.props.id,
            category: this.state.category
        },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }
        ).then(result => {
            if (result.status === 200) {
                window.location.reload();
            }
        })
    }


    handleSelect = () => {
        if (this.state.category === "F1") {
            fetch("http://localhost:8080/user/createwebsite", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    template: "F1",
                })
            })
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    }
                }).then(data => {
                    if (data) {
                        console.log(data.id);
                        localStorage.setItem("id", data.id);
                        localStorage.removeItem("userToken");
                        window.location.href = "/F1/";
                    }
                })
        }
        else if (this.state.category === "B1") {
            fetch("http://localhost:8080/user/createwebsite", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    template: "B1",
                })
            })
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    }
                }).then(data => {
                    if (data) {
                        localStorage.setItem("id", data.id);
                        window.location.href = "/B1/";
                    }
                })
        }
        else if (this.state.category === "S1") {
            fetch("http://localhost:8080/user/createwebsite", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    template: "S1",
                })
            })
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    }
                }).then(data => {
                    if (data) {
                        localStorage.setItem("id", data.id);
                        localStorage.removeItem("userToken");
                        window.location.href = "/S1/";
                    }
                })
        }
        else if (this.state.category === "T1") {
            fetch("http://localhost:8080/user/createwebsite", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    template: "T1",
                })
            })
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    }
                }).then(data => {
                    if (data) {
                        localStorage.setItem("id", data.id);
                        window.location.href = "/T1/";
                    }
                })
        }
        else if (this.state.category === "D1") {
            fetch("http://localhost:8080/user/createwebsite", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    template: "D1",
                })
            })
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    }
                }).then(data => {
                    if (data) {
                        localStorage.setItem("id", data.id);
                        window.location.href = "/D1/";
                    }
                })
        }
    }

    delTemp = () => {
        let id = this.props.id;
        fetch("http://localhost:8080/user/deleteTemplate", {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                templateID: id,
                category: this.state.category
            })
        })
            .then(res => {
                if (res.status === 200) {
                    window.location.reload();
                }
            })
    }

    handlePreview = () => {
        localStorage.setItem('id', this.props.id);
        if (this.state.category === "F1") {
            window.location.href = "/RestaurantWebsite/";
        }
        else if (this.state.category === "B1") {
            window.location.href = "/B1P/";
        }
        else if (this.state.category === "S1") {
            window.location.href = "/ShoppingWebsite/";
        }
        else if (this.state.category === "T1") {
            window.location.href = "/TeacherWebsite/";
        }
        else if (this.state.category === "D1") {
            window.location.href = "/DoctorWebsite/";
        }
    }

    handleEdit = () => {
        localStorage.setItem('id', this.props.id);
        if (this.state.category === "F1") {
            window.location.href = "/F1/";
        }
        else if (this.state.category === "B1") {
            window.location.href = "/B1/";
        }
        else if (this.state.category === "S1") {
            window.location.href = "/S1/";
        }
        else if (this.state.category === "T1") {
            window.location.href = "/T1/";
        }
        else if (this.state.category === "D1") {
            window.location.href = "/D1/";
        }
    }

    handlePublish = () => {
        axios.get("http://localhost:8080/user/totalWebsites", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
            },
        }).then(result => {
            console.log(result.data.allow);
            if (result.data.allow) {
                localStorage.setItem("toPublish", this.props.id);
                localStorage.setItem("category", this.state.category)
                window.location.href = "/publish"
            }
            else{
                alert("Your limit to publish the website is already reached. Please upgrade your plan");
            }
        })


    }

    handleStop = () => {
        fetch("http://localhost:8080/user/stopWebsite", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                templateId: this.props.id
            })
        })
            .then(res => {
                if (res.status === 200) {
                    window.location.reload();
                }
            })
    }

    handlePublishedPreview = () => {
        fetch("http://localhost:8080/user/checkTemplate?templateId=" + this.props.id, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(resData => {
            if (resData.data) {
                let subdomain = resData.data.subdomain;
                window.location.href = "http://" + subdomain + ".localhost:3000";
            }
        })
    }

    render() {

        let imgSrs;
        if (this.state.category === "F1") {
            imgSrs = F1Img;
        }
        if (this.state.category === "B1") {
            imgSrs = B1Img;
        }
        if (this.state.category === "S1") {
            imgSrs = S1Img;
        }
        if (this.state.category === "T1") {
            imgSrs = T1Img;
        }
        if (this.state.category === "D1") {
            imgSrs = D1Img;
        }
        if (this.state.category === "NA") {
            imgSrs = notA;
        }

        let reviews = this.props.reviews;
        let renderReviews;
        if (reviews) {
            let count = 0;
            renderReviews = reviews.map(review => {
                count++;
                return (
                    <span style={{ display: 'flex', flexDirection: "column" }} key={Math.random()}>
                        <span style={{ color: "red", fontSize: 25, fontFamily: "sans-serif", fontWeight: "bold" }}>Review {count}:</span>
                        <span style={{ fontSize: 18, fontFamily: "sans-serif", marginTop: 10, marginBottom: 20, display: "flex", justifyContent: "center", alignItems: "center", textAlign: 'justify' }}>{review}</span>
                    </span>
                )
            })
        }

        let options;
        if (this.state.admin) {
            options = <div className={classes.optionCont}>
                <Tooltip title="Preview">
                    <IconButton onClick={this.handlePublishedPreview} aria-label="preview">
                        <PreviewIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Stop">
                    <IconButton onClick={this.handleStop} aria-label="Stop">
                        <StopIcon />
                    </IconButton>
                </Tooltip>
            </div>
        }
        else if (this.state.user) {
            options =
                <div className={classes.tempRoot}>
                    <div className={classes.optionCont}>

                        <Tooltip title="Preview">
                            <IconButton onClick={this.handlePreview} aria-label="preview">
                                <PreviewIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Edit">
                            <IconButton onClick={this.handleEdit} aria-label="edit">
                                <EditIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Publish">
                            <IconButton onClick={this.handlePublish} aria-label="publish">
                                <PublishIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete">
                            <IconButton onClick={this.delTemp} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    {this.props.isRated ?
                        null
                        :
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <ReactStars
                                count={5}
                                onChange={this.ratingChanged}
                                size={35}
                                activeColor="#ffd700"
                            />
                        </div>
                    }
                </div>
        }
        else if (this.state.view) {
            options = <div className={classes.optionCont}>
                {this.props.error ?
                    null
                    :
                    <div style={{ width: "100%" }}>
                        <div style={{ display: 'flex', justifyContent: "space-around", width: "100%" }}>
                            <p onClick={this.handleSelect} className={classes.option}>Preview</p>
                            <a onClick={this.handleSelect} className={classes.option}>Select</a>
                        </div>
                        <div style={{ display: 'flex', justifyContent: "space-around", width: "100%" }}>
                            <p style={{ color: "red" }}>Rating: {this.props.rating}</p>
                            <a onClick={this.handleClickOpen2} className={classes.option}>Reviews</a>
                        </div>
                    </div>
                }
            </div>
        }

        return (
            <BrowserRouter>
                <>
                    <div>
                        <div className={classes.templateCont}>
                            <img alt={this.state.name} className={classes.tempImg} src={imgSrs} />
                            <p className={classes.tempHead}>{this.state.name}</p>
                            <div className={classes.optionCont}>
                                {options}
                            </div>
                        </div>
                    </div>
                    <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Review(Optional)</DialogTitle>
                        <DialogContent>
                            <DialogContentText style={{ fontFamily: 'sans-serif' }}>
                                Please enter your review here. It will be helpful for us to improve the template.
                    </DialogContentText>
                            <TextField
                                inputProps={{ style: { fontFamily: "sans-serif" } }}
                                autoFocus
                                margin="dense"
                                id="Review"
                                label="Review"
                                type="text"
                                fullWidth
                                multiline
                                rows={5}
                                rowsMax={8}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                    </Button>
                            <Button onClick={this.postReview} color="primary">
                                Post
                    </Button>
                        </DialogActions>
                    </Dialog>

                    <div>
                        <Dialog
                            fullWidth
                            open={this.state.open2}
                            onClose={this.handleClose2}
                            scroll="paper"
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">Template Reviews</DialogTitle>
                            <DialogContent dividers={true}>
                                <DialogContentText
                                    id="scroll-dialog-description"
                                    // ref={descriptionElementRef}
                                    tabIndex={-1}
                                >
                                    {/* <span style={{ display: 'flex', flexDirection: "column" }}>
                                        <span style={{ color: "red", fontSize: 25, fontFamily: "sans-serif", fontWeight: "bold" }}>Review 1:</span>
                                        <span style={{ fontSize: 18, fontFamily: "sans-serif", marginTop: 10, marginBottom: 20, display: "flex", justifyContent: "center", alignItems: "center", textAlign: 'justify' }}>This is a very good template This is a very good template This is a very good template This is a very good template This is a very good template This is a very good template This is a very good template This is a very good template This is a very good template</span>
                                    </span> */}

                                    {renderReviews}

                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose2} color="primary">
                                    Cancel
                                </Button>

                            </DialogActions>
                        </Dialog>
                    </div>
                </>
                <Route exact path='/F1/' component={NavF1} />
            </BrowserRouter>
        );
    }
}