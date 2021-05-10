import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./Components/LandingWebsite/NavBar/NavBar";
import CreateWeb from "./Components/LandingWebsite/User/CreateWebsite/CreateWebsite";
import NavT1P from "./Components/PublishedWebsites/TeacherTemplate1/main";
import NavB1P from "./Components/PublishedWebsites/BlogTemplate1/Main/main";
import NavS1P from "./Components/PublishedWebsites/ShopTemplate1/Navbar/NavBar";
import RestaurantNavBar from "./Components/PublishedWebsites/Food1template/NavBar/NavBar";
import Unauth from "./Components/LandingWebsite/Unauth/unauth";

class App extends Component {

  state = {
    mode: "",
    templateId: "",
    category: ""
  }

  componentDidMount() {
    let subdomain = window.location.hostname.split(".")[0];
    if (subdomain != "localhost") {
      fetch("http://localhost:8080/user/checkSubdomain?subdomain=" + subdomain, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
          "Content-Type": 'application/json'
        }
      }).then(res => {
        return res.json();
      }).then(resData => {
        console.log(resData);
        if (resData.available) {
          //show available message
        }
        else if (resData.data.status) {
          this.setState({
            templateId: resData.data.templateId,
            category: resData.data.category
          });
          localStorage.setItem("id", resData.data.templateId);
        }
        else {
          console.log("banned");
          //show banned message
        }
        this.setState({ mode: "subdomain" });
      })
    }
    else {
      this.setState({ mode: "home" });
    }
  }

  renderWebsite = () => {
    if (this.state.category === "F1") {
      return <RestaurantNavBar published={true} />
    }
    else if (this.state.category === "B1") {
      return <NavB1P published={true} />
    }
    else if (this.state.category === "S1") {
      return <NavS1P published={true} />
    }
    else if (this.state.category === "T1") {
      return <NavT1P published={true} />
    }
  }

  render() {
    return (
      this.state.mode === "home" ?
        <BrowserRouter>
          <NavBar></NavBar>
          <Route path="/create" exact component={CreateWeb}></Route>
        </BrowserRouter>
        :
        <div>
          {localStorage.getItem("id") ?
            this.renderWebsite()
            :
            null
          }
        </div>
    );
  }
}
export default App;
