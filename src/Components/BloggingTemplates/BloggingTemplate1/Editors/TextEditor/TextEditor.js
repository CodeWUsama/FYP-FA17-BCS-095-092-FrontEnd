import React, { Component } from 'react';
import classes from './TextEditor.module.css';
import ColorDropdown from './colordropdown';
import FontFamDropdown from './fontFam'
import SideEditor from '../SideEditor/SideEditor';
import TextField from "@material-ui/core/TextField";
import Backdrop from '../Backdrop/Backdrop';

export default class TextEditor extends Component {

    state = {
        color: this.props.data.fontColor,
        fontFam: this.props.data.fontFamily,
        text: this.props.data.text,
        size: this.props.data.fontSize,
        bold: this.props.data.bold,
        italic: this.props.data.italic,
        underline: this.props.data.underline,
        align: this.props.data.align
    }
    componentDidMount() {
        console.log(this.props.data)
    }


    updateColor = (newColor) => {
        this.setState({ color: newColor });
        this.props.changeHandler(this.state.text, this.state.size, this.state.fontFam, newColor, this.state.bold, this.state.italic, this.state.underline, this.state.align);

    }

    updateFontFam = (newFont) => {
        this.setState({ fontFam: newFont });
        this.props.changeHandler(this.state.text, this.state.size, newFont, this.state.color, this.state.bold, this.state.italic, this.state.underline, this.state.align);

    }

    updateText = (event) => {
        this.setState({ text: event.target.value });
        this.props.changeHandler(event.target.value, this.state.size, this.state.fontFam, this.state.color, this.state.bold, this.state.italic, this.state.underline, this.state.align);
    }

    updateSize = (event) => {
        this.setState({ size: event.target.value });
        this.props.changeHandler(this.state.text, event.target.value, this.state.fontFam, this.state.color, this.state.bold, this.state.italic, this.state.underline, this.state.align);
    }

    updateAlign = (atr) => {
        this.setState({ align: atr });
        this.props.changeHandler(this.state.text, this.state.size, this.state.fontFam, this.state.color, this.state.bold, this.state.italic, this.state.underline, atr);
    }

    updateBold = (flag) => {
        this.setState({ bold: flag });
        this.props.changeHandler(this.state.text, this.state.size, this.state.fontFam, this.state.color, flag, this.state.italic, this.state.underline, this.state.align);
    }

    updateItalic = (flag) => {
        this.setState({ italic: flag });
        this.props.changeHandler(this.state.text, this.state.size, this.state.fontFam, this.state.color, this.state.bold, flag, this.state.underline, this.state.align);
    }

    updateUnderline = (flag) => {
        this.setState({ underline: flag });
        this.props.changeHandler(this.state.text, this.state.size, this.state.fontFam, this.state.color, this.state.bold, this.state.italic, flag, this.state.align);
    }

    render() {

        return (
            <div>
                <Backdrop handler={this.props.closeHandler}
                />
                <SideEditor>
                    <div className={classes.rootCont}>
                        <div>
                            <div className={classes.closeCont}>
                                <p style={{ color: "white" }}>.</p>
                                <h1 className={classes.editorHead}>Text Editor</h1>
                                <p onClick={this.props.closeHandler} className={classes.close}>X</p>
                            </div>
                            <div className={classes.formField}>
                                <TextField
                                    inputProps={{ style: { fontFamily: "sans-serif", textAlign: "justify" } }}
                                    label="Text"
                                    id="newName"
                                    multiline
                                    rows={1}
                                    rowsMax={10}
                                    type="text" value={this.state.text} onChange={this.updateText}
                                />
                            </div>
                            <div className={classes.formField}>
                                <TextField
                                    inputProps={{ style: { fontFamily: "sans-serif" } }}
                                    label="Font Size"
                                    id="newSize"
                                    type="number"
                                    value={this.state.size}
                                    onChange={this.updateSize}
                                />
                            </div>
                            <div className={classes.formField}>
                                <FontFamDropdown fontFamHandler={(newFont) => this.updateFontFam(newFont)} fontFam={this.props.data.fontFamily} />
                            </div>
                            <div className={classes.formField}>
                                <label className={classes.labelText}>Font Color:</label>
                                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <ColorDropdown colorHandler={(newClr) => this.updateColor(newClr)} clr={this.props.data.fontColor} />
                                </div>
                            </div>
                            <div className={classes.formField}>
                                <label className={classes.labelText}>Text Align:</label>
                                <div className={classes.optionsCont}>
                                    <div style={{ backgroundColor: this.state.align === "right" ? "#dad6d6" : "white" }} onClick={() => this.updateAlign("right")} className={classes.option}>
                                        <img alt="Align Right" src="https://img.icons8.com/android/24/000000/align-right.png" />
                                    </div>
                                    <div style={{ backgroundColor: this.state.align === "left" ? "#dad6d6" : "white" }} onClick={() => this.updateAlign("left")} className={classes.option}>
                                        <img alt="Align Left" src="https://img.icons8.com/android/24/000000/align-left.png" />
                                    </div>
                                    <div style={{ backgroundColor: this.state.align === "center" ? "#dad6d6" : "white" }} onClick={() => this.updateAlign("center")} className={classes.option}>
                                        <img alt="Align Center" src="https://img.icons8.com/android/24/000000/align-center.png" />
                                    </div>
                                    <div style={{ backgroundColor: this.state.align === "justify" ? "#dad6d6" : "white" }} onClick={() => this.updateAlign("justify")} className={classes.option}>
                                        <img alt="Align Justify" src="https://img.icons8.com/material-sharp/24/000000/align-justify.png" />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.formField}>
                                <label className={classes.labelText}>More Options:</label>
                                <div className={classes.optionsCont}>
                                    <div style={{ backgroundColor: this.state.bold ? "#dad6d6" : "white" }} onClick={() => this.updateBold(!this.state.bold)} className={classes.option}>
                                        <img alt="Bold Text" src="https://img.icons8.com/android/24/000000/bold.png" />
                                    </div>
                                    <div style={{ backgroundColor: this.state.italic ? "#dad6d6" : "white" }} onClick={() => this.updateItalic(!this.state.italic)} className={classes.option}>
                                        <img alt="Italic Text" src="https://img.icons8.com/material-two-tone/24/000000/italic.png" />
                                    </div>
                                    <div style={{ backgroundColor: this.state.underline ? "#dad6d6" : "white" }} onClick={() => this.updateUnderline(!this.state.underline)} className={classes.option}>
                                        <img alt="Underline Text" src="https://img.icons8.com/android/24/000000/underline.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SideEditor>
            </div>
        );
    }
}