import React, { Component } from 'react';
import classes from './Travel.module.css';
import SideEditor from '../Editors/SideEditor/SideEditor';
import TextEditor from '../Editors/TextEditor/TextEditor';
import Travelrow1 from './Travel1';
import Homerow5 from '../ArticleGallery/ArticleGallery';
import Footertravel from '../Footer/Footertravel';

export default class Travel extends Component {
  state = {
    travelnameEditor: false,
    traveldisEditor: false,
    traveldis2Editor: false,
    research1Editor: false,
    research2Editor: false,
    showEditor: false,
    travelname: {},
    traveldis: {},
    traveldis2: {},
    research: [],
    research1: {},
    research2: {},
  }

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    fetch("http://localhost:8080/b1td/getTravelData?id=" + localStorage.getItem("id"), {
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
            travelname: resultData.data.travelname,
            traveldis: resultData.data.traveldis,
            traveldis2: resultData.data.traveldis2,
            research1: resultData.data.research1,
            research2: resultData.data.research2,
            research: resultData.data.research,

          });
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  saveChangesHandler = () => {
    fetch("http://localhost:8080/b1td/updateHomeData", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token'),
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        id: localStorage.getItem("id"),
        travelname: this.state.travelname,
        traveldis: this.state.traveldis,
      })
    })
      .then(result => {
        return result.json();
      }).then(resultData => {
      })
      .catch(err => {
        console.log(err);
      })
  }

  editorHandler = () => {
    this.setState({ showEditor: false });
  }

  travelnameEditor = () => {

    this.setState({
      travelnameEditor: true,
      showEditor: true
    });
  }

  traveldisEditor = () => {

    this.setState({
      traveldisEditor: true,
      showEditor: true
    });
  }

  traveldis2Editor = () => {

    this.setState({
      traveldis2Editor: true,
      showEditor: true
    });
  }

  research1Editor = () => {

    this.setState({
      research1Editor: true,
      showEditor: true
    });
  }

  research2Editor = () => {

    this.setState({
      research2Editor: true,
      showEditor: true
    });
  }

  changetravelname = (newName, newSize, newFamily, newColor) => {
    if (newSize === '') {
      newSize = 0;
    }
    this.setState({
      travelname: {
        text: newName,
        fontSize: parseInt(newSize),
        fontFamily: newFamily,
        fontColor: newColor
      }
    });
  }

  changetraveldis = (newName, newSize, newFamily, newColor) => {
    if (newSize === '') {
      newSize = 0;
    }
    this.setState({
      traveldis: {
        text: newName,
        fontSize: parseInt(newSize),
        fontFamily: newFamily,
        fontColor: newColor
      }
    });
  }

  changetraveldis2 = (newName, newSize, newFamily, newColor) => {
    if (newSize === '') {
      newSize = 0;
    }
    this.setState({
      traveldis2: {
        text: newName,
        fontSize: parseInt(newSize),
        fontFamily: newFamily,
        fontColor: newColor
      }
    });
  }

  changeresearch1 = (newName, newSize, newFamily, newColor) => {
    if (newSize === '') {
      newSize = 0;
    }
    this.setState({
      research1: {
        text: newName,
        fontSize: parseInt(newSize),
        fontFamily: newFamily,
        fontColor: newColor
      }
    });
  }

  changeresearch2 = (newName, newSize, newFamily, newColor) => {
    if (newSize === '') {
      newSize = 0;
    }
    this.setState({
      research: {
        text: newName,
        fontSize: parseInt(newSize),
        fontFamily: newFamily,
        fontColor: newColor
      }
    });
  }

  render() {
    let textEditor = <SideEditor editorHandler={this.editorHandler} />

    if (this.state.travelnameEditor === true) {
      textEditor = <TextEditor closeHandler={() => { this.setState({ travelnameEditor: false }) }} changeHandler={(newName, newSize, newFamily, newColor) => this.changetravelname(newName, newSize, newFamily, newColor)} data={this.state.travelname} />
    }
    if (this.state.traveldisEditor === true) {
      textEditor = <TextEditor closeHandler={() => { this.setState({ traveldisEditor: false }) }} changeHandler={(newName, newSize, newFamily, newColor) => this.changetraveldis(newName, newSize, newFamily, newColor)} data={this.state.traveldis} />
    }
    if (this.state.traveldis2Editor === true) {
      textEditor = <TextEditor closeHandler={() => { this.setState({ traveldis2Editor: false }) }} changeHandler={(newName, newSize, newFamily, newColor) => this.changetraveldis2(newName, newSize, newFamily, newColor)} data={this.state.traveldis2} />
    }
    if (this.state.research1Editor === true) {
      textEditor = <TextEditor closeHandler={() => { this.setState({ research1Editor: false }) }} changeHandler={(newName, newSize, newFamily, newColor) => this.changeresearch1(newName, newSize, newFamily, newColor)} data={this.state.research1} />
    }
    if (this.state.research2Editor === true) {
      textEditor = <TextEditor closeHandler={() => { this.setState({ research2Editor: false }) }} changeHandler={(newName, newSize, newFamily, newColor) => this.changeresearch2(newName, newSize, newFamily, newColor)} data={this.state.research2} />
    }
    if (this.state.showEditor === false) {
      textEditor = null;
    }

    return (
      <div className={classes.rootCont}>
        <div> {textEditor} </div>
        <div className={this.state.showEditor ? classes.spacer : ''} />
        <div className={classes.content} style={this.state.showEditor ? { width: "65%" } : { width: "100%" }}>
          <div className={classes.rootDiv}>
            <Travelrow1
              travelname={this.state.travelname}
              travelnameEditor={this.travelnameEditor}
              traveldis={this.state.traveldis}
              traveldisEditor={this.traveldisEditor}
              traveldis2={this.state.traveldis2}
              traveldis2Editor={this.traveldis2Editor}
              research={this.state.research}
              research1={this.state.research1}
              research1Editor={this.research1Editor}
              research2={this.state.research2}
              research2Editor={this.research2Editor}
            />
            <Homerow5
              travelname={this.state.travelname}
              travelnameEditor={this.travelnameEditor}
              traveldis={this.state.traveldis}
              traveldisEditor={this.traveldisEditor}
              research={this.state.research}
              research1={this.state.research1}
              research1Editor={this.research1Editor}
              research2={this.state.research2}
              research2Editor={this.research2Editor}
            />
            <Footertravel />
            <button style={{ bottom: 30 }} className={classes.saveBt} onClick={this.saveChangesHandler}>Save Changes</button>
          </div>
        </div>
      </div>
    );
  }
}