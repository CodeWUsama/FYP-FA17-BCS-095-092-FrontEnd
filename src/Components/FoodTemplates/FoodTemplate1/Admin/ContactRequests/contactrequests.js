import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import classes from "./contactrequests.module.css";

const ContactRequest = () => {

    const [requests, setRequests] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [currentId, setCurrentId] = useState("");
    const [currentEmail, setCurrentEmail] = useState("");

    useEffect(() => {
        async function fetchData() {
            await fetch("http://localhost:8080/f1td/viewMessages?id=" + localStorage.getItem("id"), {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
            })
                .then(result => {
                    return result.json();
                }).then(resultData => {
                    setRequests(resultData.requests);
                })
                .catch(err => {
                    console.log(err);
                })
        }

        fetchData();

    }, []);

    const handleClickOpen = (id, email) => {
        setCurrentId(id);
        setCurrentEmail(email);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let renderRequests = requests.map(request => {
        return (
            <tr key={request._id}>
                <td>{request.email}</td>
                <td>{request.name}</td>
                <td>
                    {request.message}
                </td>
                <td>
                    <div className={classes.actionsCont}>
                        <button onClick={() => handleClickOpen(request._id, request.email)} style={{ marginBottom: 10 }} type="button" className="btn btn-success">Reply</button>
                        <button onClick={()=>handleDelete(request._id)} type="button" className="btn btn-danger">Discard</button>
                    </div>
                </td>
            </tr>
        )
    })

    let handleReply = () => {
        fetch("http://localhost:8080/f1td/reply", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                messageId: currentId,
                email: currentEmail,
                reply: document.getElementById("message").value
            })
        })
            .then(result => {
                if (result.status === 200) {
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    let handleDelete = (id) => {
        fetch("http://localhost:8080/f1td/deleteMessage", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                messageId: id,
            })
        })
            .then(result => {
                if (result.status === 200) {
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className={classes.rootCont}>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Message</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ fontFamily: 'sans-serif' }}>
                        Please enter your reply here. Reply will be send as an email to the student's entered email.
                    </DialogContentText>
                    <TextField
                        inputProps={{ style: { fontFamily: "sans-serif" } }}
                        autoFocus
                        margin="dense"
                        id="message"
                        label="Message"
                        type="text"
                        fullWidth
                        multiline
                        rows={5}
                        rowsMax={8}
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleReply} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>

            <div style={{ marginTop: "20px" }} className="container">
                <h2>Contact Requests</h2>
                <p>In this table, contact requests are being displayed:</p>
                <table className="table" style={{ tableLayout: 'auto' }}>
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests ? renderRequests : null}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContactRequest;