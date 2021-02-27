import React, { Component } from 'react';
import classes from './TextEditor.module.css';
 
export default class colordropdown extends Component {

    triggerChange = () => {
        let val = document.getElementById('colors').value;
        this.props.colorHandler(val);
    }

    render() {
        return (
            <select className={classes.fontFam} name="color" id="colors" onChange={()=>this.triggerChange()} >
                <option style={{ backgroundColor: this.props.clr}} value={this.props.clr}>{this.props.clr}</option>
                <option style={{ backgroundColor: "orangered" }} value="orangered">orangered</option>
                <option style={{ backgroundColor: "gold" }} value="	gold">gold</option>
                <option style={{ backgroundColor: "orange" }} value="orange">orange</option>
                <option style={{ backgroundColor: "yellow" }} value="yellow">yellow</option>
                <option style={{ backgroundColor: "lime" }} value="lime">lime</option>
                <option style={{ backgroundColor: "limegreen" }} value="limegreen">limegreen</option>
                <option style={{ backgroundColor: "forestgreen" }} value="forestgreen">forestgreen</option>
                <option style={{ backgroundColor: "cyan" }} value="cyan">cyan</option>
                <option style={{ backgroundColor: "deepskyblue" }} value="deepskyblue">skyblue</option>
                <option style={{ backgroundColor: "royalblue" }} value="royalblue">royalblue</option>
                <option style={{ backgroundColor: "blue" }} value="blue">blue</option>
                <option style={{ backgroundColor: "darkblue" }} value="darkblue">darkblue</option>
                <option style={{ backgroundColor: "navy" }} value="navy">navy</option>
                <option style={{ backgroundColor: "violet" }} value="violet">violet</option>
                <option style={{ backgroundColor: "magenta" }} value="magenta">magenta</option>
                <option style={{ backgroundColor: "purple" }} value="purple">purple</option>
                <option style={{ backgroundColor: "indigo" }} value="indigo">indigo</option>
                <option style={{ backgroundColor: "pink" }} value="pink">pink</option>
                <option style={{ backgroundColor: "deeppink" }} value="deeppink">deeppink</option>
                <option style={{ backgroundColor: "white" }} value="white">white</option>
                <option style={{ backgroundColor: "beige" }} value="beige">beige</option>
                <option style={{ backgroundColor: "gray" }} value="	gray">	gray</option>
                <option style={{ backgroundColor: "black" }} value="black">black</option>
                <option style={{ backgroundColor: "lightgray" }} value="lightgray">lightgray</option>
                <option style={{ backgroundColor: "chocolate" }} value="chocolate">chocolate</option>
                <option style={{ backgroundColor: "saddlebrown" }} value="saddlebrown">saddlebrown</option>
                <option style={{ backgroundColor: "brown" }} value="brown">brown</option>
                <option style={{ backgroundColor: "maroon" }} value="maroon">maroon</option>
                <option style={{ backgroundColor: "salmon" }} value="salmon">salmon</option>
                <option style={{ backgroundColor: "crimson" }} value="crimson">crimson</option>
                <option style={{ backgroundColor: "firebrick" }} value="firebrick">firebrick</option>
                <option style={{ backgroundColor: "	red" }} value="	red">	red</option>
                <option style={{ backgroundColor: "darkred" }} value="darkred">darkred</option>
                <option style={{ backgroundColor: "tomato" }} value="tomato">tomato</option>
            </select>
        );
    }
}