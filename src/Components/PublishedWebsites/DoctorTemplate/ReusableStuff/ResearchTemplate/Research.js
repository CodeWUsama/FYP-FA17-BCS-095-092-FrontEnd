import React, { useState } from 'react';
import classes from "./Research.module.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField"
import axios from "axios"

const Research = (props) => {

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState("paper");

    const [openUpdater, setOpenUpdater] = useState(false);

    const [title, settitle] = useState(props.title);
    const [description, setdescription] = useState(props.description);
    const [details, setdetails] = useState(props.details);

    const handleClickOpenUpdater = () => {
        setOpenUpdater(true);
    };

    const handleCloseUpdater = () => {
        setOpenUpdater(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);

    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    let updateResearch = () => {
        axios.post("http://localhost:8080/d1td/updateResearch", {
            title: title,
            description: description,
            details: details,
            researchId: props.id,
            id: localStorage.getItem("id")
        },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(result => {
                if (result.status === 200) {
                    window.location.reload();
                }
            })
    }

    let deleteResearch = () => {
        axios.post("http://localhost:8080/d1td/deleteResearch", {
            researchId: props.id,
            id: localStorage.getItem("id")
        },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(result => {
                if (result.status === 200) {
                    window.location.reload();
                }
            })
    }

    return (
        <>
            <div className={classes.research} style={{ flexBasis: props.flex }} >
                <div style={{width:500, border:"1px solid white", padding:20}}>
                    <p className={classes.rHead}>{props.title}</p>
                    <div style={{ display: "flex", flexDirection: "column", height: 350, justifyContent: "space-between" }}>
                        <p className={classes.rDesc}>{props.description}</p>
                        <div style={{ display: 'flex', width: "100%", justifyContent: "space-around" }}>
                            <button onClick={handleClickOpen} className={classes.meetings}>View</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: 'justify', fontFamily: "sans-serif" }}>{props.details}</span>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>

                    </DialogActions>
                </Dialog>
            </div>
            {/* //open update model */}
            <div>
                <Dialog fullWidth
                    open={openUpdater}
                    onClose={handleCloseUpdater}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">Update Research</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <span style={{ display: 'flex', flexDirection: 'column' }}>
                                <TextField id="title" label="Research Title" style={{ marginBottom: 20 }} value={title} onChange={e => { settitle(e.target.value) }} />
                                <TextField id="desc" label="Research Description" style={{ marginBottom: 20 }} rowsMax={3} rows={3} multiline value={description} onChange={e => { setdescription(e.target.value) }} />
                                <TextField id="details" label="Research Details" rowsMax={18} rows={15} multiline value={details} onChange={e => { setdetails(e.target.value) }} />
                            </span>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={deleteResearch} color="secondary">
                            Delete
                         </Button>

                        <Button color="primary" onClick={updateResearch}>
                            Update
                         </Button>

                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export default Research;