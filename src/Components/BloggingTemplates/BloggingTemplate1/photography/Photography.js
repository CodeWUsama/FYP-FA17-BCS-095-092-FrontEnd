import React, { Component } from 'react';
import classes from './r1.module.css';
import Editor from '../Editors/Editor/Editor';
import Addphoto from './addphoto/Addphoto';
import Footertravel from '../Footer/Footertravel';
import SideEditor from '../Editors/SideEditor/SideEditor';
import UpdateGallery from './updateGallery/UpdateGallery';

export default class reciperow1 extends Component {
    state = {
        Rtext1Editor: false,
        Rtext4Editor: false,
        imgs: [],
        showEditor: false,
        showAdd: false ,
        gallery:[],
        i: null,
        updateblog:false,

        Rtext1: {
            text: "I,m Lena Mollein.Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fontSize: 20,
            fontFamily: "Josefin Sans",
            fontColor: "black"
          },       
          
    }
    addHandler = () =>{ 
      this.setState({ showAdd : false });
    }
    closeHandler = () =>{ 
      this.setState({ showAdd : false });
      this.setState({updateblog:false});
    }
    AddBlog =() =>{
      this.setState({ showAdd :true});
    }
    editorHandler = () => {
          this.setState({ showEditor: false });
    }

    UpdateBlog =() =>{
      this.setState({ updateblog :true});
    }
    updateHandler = () =>{ 
      this.setState({ updateblog : false });
    }
      
      
    Rtext1Editor = () => {
          this.setState({
            Rtext1Editor: true,
            showEditor: true
          });
        }

   
    changeRtext1 = (newName, newSize, newFamily, newColor) => {
            if (newSize === '') {
              newSize = 0;
            }
            this.setState({
              Rtext1: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor
              }
            });
          }
          
          changeAtext1 = (newText) => {
                
            this.setState({
              Atext1: {
                text: newText,
              }
            });
          }


          _isMounted = false;
          async componentDidMount() {
            this._isMounted = true;

            await fetch("http://localhost:8080/b1td/getGalleryimages?id="+localStorage.getItem("id"), {
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
                          imgs: resultData.imgs
                      });
                  }
              })
              .catch(err => {
                  console.log(err);
              })

              fetch("http://localhost:8080/b1td/getTravelData?id="+localStorage.getItem("id") , {
              method: "GET",
              headers: {
              "Content-Type": 'application/json'
            },}).then(result => {
                return result.json();
              }).then(resultData => {
                if (this._isMounted) {
                  this.setState({
                  gallery :resultData.data.gallery,
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
      
    render() {
      let displayphoto= this.state.gallery.map((blog,i) =>{
        return (
          <div className={classes.recipe1} key={i} >
          <img className={classes.imge} src={'data:image/jpg;base64,' + this.state.imgs[i]} />&nbsp;&nbsp;&nbsp;&nbsp;
          <div> 
           <h6 className={classes.p1} onClick={()=> {this.UpdateBlog() ; this.setState({ i:i }) } }> {blog.text}</h6>
           <p style={{color:"gray"}} onClick={()=> {this.UpdateBlog() ; this.setState({ i:i }) } }> {blog.date}</p>

           </div>
          </div>
        )
       })
        let textEditor = <SideEditor editorHandler={this.editorHandler} />
        let updateEditor = <UpdateGallery updateHandler={this.updateHandler} />
        
        if (this.state.Atext1Editor === true) {
          updateEditor = <UpdateGallery  closeHandler={() => { this.setState({ updateblog: false }) }} changeHandler={(newText) => this.changeAtext1(newText)} data={this.state.gallery[this.state.i] }/>
        }

      if (this.state.showEditor === false) {
        textEditor = null;
      }
        return (
            <div className={classes.rootCont}>
           <Editor fullsize={true} enableBackdropEditor={this.state.showAdd} backdropHandler={this.toggleAddProduct} >
            <Addphoto addHandler={() => this.AddBlog()} closeHandler={this.addHandler}  />
          </Editor>
          <Editor fullsize={true} enableBackdropEditor={this.state.updateblog} backdropHandler={this.toggleAddProduct} >
            <UpdateGallery closeHandler={() => { this.setState({ updateblog: false }) }} changeHandler={(newText) => this.changeAtext1(newText)} data={this.state.gallery[this.state.i] }/> 
          </Editor>
            <div> {textEditor} </div>
            <div className={this.state.showEditor ? classes.spacer : ''} />
              <div className={classes.content} style={this.state.showEditor ? { width: "65%" } : { width: "100%" }}>
                      
              <div className={classes.rootDiv}>
                <div className={classes.pc1}>
              <p className={classes.cat}>Categories: &nbsp; </p>
              <p className={classes.caat}>GALLERY </p>
            </div>
            
            <div className={classes.pc2}>
              <p className={classes.home}>Home/ </p>
              <p className={classes.link}>Recipes</p>
            </div>
            <div className={classes.toprecipe}> 
           <div className={classes.recipe}> 
           {displayphoto}</div>
           </div>
           <button onClick={this.AddBlog} style={{ width:'20%' , marginLeft: '40%'}} className="btn btn-primary btn-block btn-large" >ADD PHOTO</button>

      <Footertravel/>
      
    </div></div></div>
        );
    }
}













