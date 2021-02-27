import React from 'react';
import classes from "./PaymentRequests.module.css";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const Request = (props) => {

    let handleApprove = () => {
        fetch("http://localhost:8080/s1td/verifyRequest", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                reqId:props.id
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

    let handleDiscard = () => {
        fetch("http://localhost:8080/s1td/discardRequest", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                reqId:props.id
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
        <div className={classes.requestCont}>
            <p style={{ textAlign: 'center', marginBottom: 30 }} className={classes.text}><strong>Username: </strong>{props.username}</p>
            <p className={classes.text}><strong>Amount: </strong>{props.amount} PKR</p>
            <p className={classes.text}><strong>Account # </strong>{props.phone}</p>
            <p className={classes.text}><strong>Holder: </strong>{props.name}</p>
            <p className={classes.text}><strong>TID: </strong>{props.tid}</p>
            <p className={classes.text}><strong>Through: </strong>{props.through}</p>

            <div className={classes.actionsCont}>
                <Button
                    variant="outlined"
                    color="inherit"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={()=>handleApprove()}
                >
                    Approve
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    onClick={handleDiscard}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
            </div>

        </div>
    );
}

export default Request;