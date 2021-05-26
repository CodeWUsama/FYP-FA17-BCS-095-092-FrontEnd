import React,{Component} from 'react';
import classes from './gallery.module.css';


export default class Gallery extends Component {

    state = {
        image: [],
        gallery:[],
        i:null,
        
    }
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
      
    render(){
      function gotogallery(e) {
        e.preventDefault();
        window.location = '/b1/#/gallery';
    }
        let count= 0;

        let Displaygallery= this.state.gallery.reverse().map((blog,i) =>{
          var image = this.state.image;
          let len = this.state.gallery.length - 1;
            if(count<4){
                count=count+1;
            return (
              <div className={classes.imagelayer}  key={i}>
                <img style={{height:'200px', width:200}} src={'data:image/jpg;base64,' + image[len-i]} /> 
              </div>
            )
            }
           })
        return(
            <div className={classes.rootCont} onClick={gotogallery}>
                <div className={classes.textheading}>
                    <p style={{fontSize:'30px', color: 'rgb(176,0,0)' ,padding:'3%'}}>Recent Gallery</p>
                </div>
                <div className={classes.innerlayer}>
                    <div className={classes.inner}>
                       {Displaygallery} 
                    </div>
            </div></div>
        )
    }}       