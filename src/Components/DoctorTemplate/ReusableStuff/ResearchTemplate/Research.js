import React, { useState } from 'react';
import classes from "./Research.module.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Research = (props) => {

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState("paper");

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

    return (
        <>
            <div className={classes.research}>
                <p className={classes.rHead}>{props.title}</p>
                <div style={{ display: "flex", flexDirection: "column", height: 350, justifyContent: "space-between" }}>
                    <p className={classes.rDesc}>{props.description}</p>
                    <div style={{ display: 'flex', width: "100%", justifyContent: "center" }}><button onClick={handleClickOpen} className={classes.meetings}>View</button></div>
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
        </>
    );
}

export default Research;