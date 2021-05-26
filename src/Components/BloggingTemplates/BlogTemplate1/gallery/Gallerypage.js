import React,{Component} from 'react';
import classes from './gallery.module.css';
import UpdateGallery from './updateGallery/UpdateGallery';
import Editor from "../ReusableComponents/BackdropEditor/Editor";
import Addphoto from './addphoto/Addphoto';
import imgadd from '../recipe/addnewblg/addImage.png';
import Footer from '../footer/FooterShow';
import remove from './remove.png'

export default class Gallery extends Component {

    state = {
        image: [],
        gallery:[],
        i:null,
        showEditor: false,
        showAdd: false ,
        updateblog:false,

        textgallery:{
            name:"hello",
        }
        
    }
    editorHandler = () => {
      this.setState({ showEditor: false });
    }
  addHandler = () =>{ 
      this.setState({ showAdd : false });
  }
  closeHandler = () =>{ 
      this.setState({ showAdd : false });
      this.setState({ updateblog : false });

  }
  AddBlog =() =>{
      this.setState({ showAdd :true});
  }

  UpdateBlog =() =>{
      this.setState({ updateblog :true });
  }
  updateHandler = () =>{ 
      this.setState({ updateblog : false });
  }

  changeUpdate = (newName ) => {   
      this.setState({
      textgallery: {
        name: newName,
      }
    });}

    _isMounted = false;
          async componentDidMount() {
            this._isMounted = true;
            await  fetch("http://localhost:8080/b1td/getGalleryimages?id="+localStorage.getItem("id") , {
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
                          image: resultData.image
                      });
                  }
              })
              .catch(err => {
                  console.log(err);
              })
           fetch("http://localhost:8080/b1td/getTecData?id="+localStorage.getItem("id") , {
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
          handleSubmit = (id) => {
            fetch("http://localhost:8080/b1td/deleteImage", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                
                body: JSON.stringify({ 
                    blogid: id,
                    templateId:localStorage.getItem("id")
                })
            })
                .then(result => {
                    if (result.status == 200) {
                        window.location.reload();
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
      
  render() {
      // console.log(this.state.gallery);
      let Displaygallery= this.state.gallery.reverse().map((blog,i) =>{
        let len = this.state.gallery.length - 1;
            return (
              <div className={classes.imagelayer} key={i}>
                <img style={{height:'200px', width:200}} onClick={()=> {this.UpdateBlog() ; this.setState({ i:i }) } } src={'data:image/jpg;base64,' + this.state.image[len-i]} /> 
                <hr/>
                <p onClick={()=> {this.UpdateBlog() ; this.setState({ i:i }) } }>{blog.name}</p>
                <img style={{height:'20px', width:25, cursor:'pointer'}} onClick={()=> { this.handleSubmit(blog._id )  } }src={remove}/>   
              </div>
            )
          
           })
        return(
            <div className={classes.rootCont}>
              <Editor fullsize={true} enableBackdropEditor={this.state.updateblog} backdropHandler={() => { this.setState({ updateblog: false }) }} >
                <UpdateGallery closeHandler={() => { this.setState({ updateblog: false }) }} changeHandler={(newName ) => this.changeUpdate(newName)} data={this.state.gallery[this.state.i] }/>
              </Editor>
              <Editor fullsize={true} enableBackdropEditor={this.state.showAdd} backdropHandler={this.addHandler} >
                <Addphoto addHandler={() => this.AddBlog()} closeHandler={this.addHandler} />
            </Editor>
                <div className={classes.textheading}>
                    <p style={{fontSize:'30px', color: 'rgb(176,0,0)' ,padding:'3%'}}>Recent Gallery</p>
                </div>
                <div className={classes.innerlayer}>
                    <div className={classes.inner}>
                       {Displaygallery} 
                    </div>
            </div>
              <img onClick={this.AddBlog} style={{ height:'100px', marginLeft:'45%'}}src={imgadd}/>  
              <Footer/>
            </div>
        )
    }}       