import React, { useState, useEffect } from 'react';
import axios from "axios";
import Research from '../ReusableStuff/ResearchTemplate/Research';
import classes from "./researches.module.css";
import Footer from "./../Footer/Footer"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField"


const Researches = (props) => {

    const [researches, setresearches] = useState();
    const [footer, setfooter] = useState();
    
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState("paper");

    const descriptionElementRef = React.useRef(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {

        getData();
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }

    }, [open]);

    async function getData() {
        let response = await axios.get("http://localhost:8080/d1td/getHomeData?id=" + localStorage.getItem("id"));
        setresearches(response.data.data.researches);
        setfooter(response.data.data.footer);
    }

    let renderResearches = () => researches.map(research => {
        return <Research key={research._id} id={research._id} title={research.title} description={research.description} details={research.details} />
    });

    let addResearch = () => {
        axios.post("http://localhost:8080/d1td/addResearch", {
            title: document.getElementById("title").value,
            description: document.getElementById("desc").value,
            details: document.getElementById("details").value,
            id: localStorage.getItem("id")
        }, {
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
            <p style={{ fontSize: 50, textAlign: 'center', color: 'white', backgroundColor: "#fc9464", margin: 0, paddingTop: 30 }}>All Researches</p>
            <div className={classes.researchesCont}>
                <div style={{ width: "31.6%", display: "flex", justifyContent: "center", padding: 20, height: 500 }}>
                    <IconButton onClick={handleClickOpen} color="primary" aria-label="upload picture" component="span" style={{ height: 450 }}>
                        <AddCircleOutlineIcon style={{ color: 'white', fontSize: 300 }} />
                    </IconButton>
                </div>
                {researches ? renderResearches() : null}

            </div>

            {footer ? <Footer footer={footer} /> : null}

            {/* open add model */}

            <div>
                <Dialog fullWidth
                    open={open}
                    onClose={handleClose}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">Add New Research</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <span style={{ display: 'flex', flexDirection: 'column' }}>
                                <TextField id="title" label="Research Title" style={{ marginBottom: 20 }} />
                                <TextField id="desc" label="Research Description" style={{ marginBottom: 20 }} rowsMax={3} rows={3} multiline />
                                <TextField id="details" label="Research Details" rowsMax={18} rows={15} multiline />
                            </span>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={handleClose} color="secondary">
                            Cancel
                         </Button>

                        <Button onClick={addResearch} color="primary">
                            Save
                         </Button>

                    </DialogActions>
                </Dialog>
            </div>

           
        </>
    );
}

export default Researches;