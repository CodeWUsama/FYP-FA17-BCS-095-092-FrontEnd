import React, { Component } from 'react';
import Intro from './IntroSection/Intro';
import ServicesSection from './ServicesSection/ServicesSection';
import TopDishes from './TopDishes/TopDishes';
import LatestEditions from './Latest Editions/LatestEditions';
import ContactUs from './ContactUs/ContactUs'
import Footer from '../Footer/Footer';
import SideEditor from '../SideEditor/SideEditor';
import TextEditor from "./../../../Editors/TextEditor/TextEditor";
import classes from "./Home.module.css"

export default class Home extends Component {

    _isMounted = false;

    state = {
        storeNameEditor: false,
        introTextEditor: false,
        servicesDescEditor: false,
        s1HEditor: false,
        s1DEditor: false,
        s2HEditor: false,
        s2DEditor: false,
        s3HEditor: false,
        s3DEditor: false,
        adminNameEditor: false,
        adminMessageEditor: false,
        aboutUsEditor: false,
        addressEditor: false,
        phoneEditor: false,
        emailEditor: false,
        whatsappEditor: false,
        showEditor: true,
        storeName: {},
        introText: {},
        servicesDescription: {},
        s1Heading: {},
        s1Desc: {},
        s2Heading: {},
        s2Desc: {},
        s3Heading: {},
        s3Desc: {},
        dishes: [],
        adminName: {},
        adminMessage: {},
        footer: {
            aboutUs: {},
            phone: {},
            email: {},
            phone: {},
            whatsapp: {},
            address: {}
        },
        flex: {}
    }

    async componentDidMount() {
        this._isMounted = true;
        await fetch("http://localhost:8080/f1td/getHomeData?id=" + this.props.id, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
        })
            .then(result => {
                return result.json();
            }).then(resultData => {
                if (this._isMounted) {
                    this.setState({
                        storeName: resultData.data.name,
                        introText: resultData.data.intropara,
                        servicesDescription: resultData.data.servicesDescription,
                        s1Heading: resultData.data.s1Heading,
                        s1Desc: resultData.data.s1Desc,
                        s2Heading: resultData.data.s2Heading,
                        s2Desc: resultData.data.s2Desc,
                        s3Heading: resultData.data.s3Heading,
                        s3Desc: resultData.data.s3Desc,
                        dishes: resultData.data.dishes,
                        adminName: resultData.data.adminName,
                        adminMessage: resultData.data.adminMessage,
                        footer: resultData.data.footer,
                        flex:resultData.data.flex
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
        fetch("http://localhost:8080/f1td/updateHomeData", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id:localStorage.getItem("id"),
                name: this.state.storeName,
                introText:this.state.introText,
                servicesDescription: this.state.servicesDescription,
                s1Heading: this.state.s1Heading,
                s1Desc: this.state.s1Desc,
                s2Heading: this.state.s2Heading,
                s2Desc: this.state.s2Desc,
                s3Heading: this.state.s3Heading,
                s3Desc: this.state.s3Desc,
                adminName: this.state.adminName,
                adminMessage: this.state.adminMessage,
                footer: this.state.footer,
                flex:this.state.flex
            })
        })
            .then(result => {
                return result.json();
            }).then(resultData => {
                console.log(resultData);
            })
            .catch(err => {
                console.log(err);
            })
    }


    editorHandler = () => {
        this.setState({ showEditor: false });
    }

    storeNameEditor = (event) => {
        event.stopPropagation();
        this.setState({
            storeNameEditor: true,
            showEditor: true
        });

    }

    introTextEditor = (event) => {
        event.stopPropagation();
        this.setState({
            introTextEditor: true,
            showEditor: true,
        });

    }

    servicesDescEditor = () => {

        this.setState({
            servicesDescEditor: true,
            showEditor: true,
        });

    }

    s1HEditor = () => {

        this.setState({
            s1HEditor: true,
            showEditor: true,
        });

    }


    s1DEditor = () => {

        this.setState({
            s1DEditor: true,
            showEditor: true,
        });

    }

    s2HEditor = () => {

        this.setState({
            s2HEditor: true,
            showEditor: true,
        });

    }
    s2DEditor = () => {

        this.setState({
            s2DEditor: true,
            showEditor: true,
        });

    }
    s3HEditor = () => {

        this.setState({
            s3HEditor: true,
            showEditor: true,
        });

    }

    s3DEditor = () => {

        this.setState({
            s3DEditor: true,
            showEditor: true,
        });

    }

    adminNameEditor = () => {

        this.setState({
            adminNameEditor: true,
            showEditor: true,
        });

    }

    aboutUsEditor = () => {

        this.setState({
            aboutUsEditor: true,
            showEditor: true,
        });

    }

    phoneEditor = () => {

        this.setState({
            phoneEditor: true,
            showEditor: true,
        });

    }

    emailEditor = () => {

        this.setState({
            emailEditor: true,
            showEditor: true,
        });

    }

    whatsappEditor = () => {

        this.setState({
            whatsappEditor: true,
            showEditor: true,
        });

    }

    addressEditor = () => {

        this.setState({
            addressEditor: true,
            showEditor: true,
        });

    }


    adminMessageEditor = () => {

        this.setState({
            adminMessageEditor: true,
            showEditor: true,
        });

    }

    changeStoreName = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            storeName: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor,
                bold: bold,
                italic: italic,
                underline: underline,
                align: align
            }
        });
    }

    changeAboutUs = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            footer: {
                aboutUs: {
                    text: newName,
                    fontSize: parseInt(newSize),
                    fontFamily: newFamily,
                    fontColor: newColor,
                    bold: bold,
                    italic: italic,
                    underline: underline,
                    align: align
                },
                phone: this.state.footer.phone,
                whatsapp: this.state.footer.whatsapp,
                address: this.state.footer.address,
                email: this.state.footer.email,
            }
        });
    }

    changePhone = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            footer: {
                phone: {
                    text: newName,
                    fontSize: parseInt(newSize),
                    fontFamily: newFamily,
                    fontColor: newColor,
                    bold: bold,
                    italic: italic,
                    underline: underline,
                    align: align
                },
                aboutUs: this.state.footer.aboutUs,
                whatsapp: this.state.footer.whatsapp,
                address: this.state.footer.address,
                email: this.state.footer.email,
            }
        });
    }

    changeAddress = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            footer: {
                address: {
                    text: newName,
                    fontSize: parseInt(newSize),
                    fontFamily: newFamily,
                    fontColor: newColor,
                    bold: bold,
                    italic: italic,
                    underline: underline,
                    align: align
                },
                aboutUs: this.state.footer.aboutUs,
                whatsapp: this.state.footer.whatsapp,
                phone: this.state.footer.phone,
                email: this.state.footer.email,
            }
        });
    }

    changeWhatsapp = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            footer: {
                whatsapp: {
                    text: newName,
                    fontSize: parseInt(newSize),
                    fontFamily: newFamily,
                    fontColor: newColor,
                    bold: bold,
                    italic: italic,
                    underline: underline,
                    align: align
                },
                aboutUs: this.state.footer.aboutUs,
                address: this.state.footer.address,
                phone: this.state.footer.phone,
                email: this.state.footer.email,
            }
        });
    }

    changeEmail = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            footer: {
                email: {
                    text: newName,
                    fontSize: parseInt(newSize),
                    fontFamily: newFamily,
                    fontColor: newColor,
                    bold: bold,
                    italic: italic,
                    underline: underline,
                    align: align
                },
                aboutUs: this.state.footer.aboutUs,
                whatsapp: this.state.footer.whatsapp,
                phone: this.state.footer.phone,
                address: this.state.footer.address,
            }
        });
    }

    changeIntroText = (newName, newSize, newFamily, newColor) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            introText: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor
            }
        });
    }

    changeServicesDescription = (newName, newSize, newFamily, newColor) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            servicesDescription: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor
            }
        });
    }

    changeS1H = (newName, newSize, newFamily, newColor) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            s1Heading: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor
            }
        });
    }


    changeS1D = (newName, newSize, newFamily, newColor) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            s1Desc: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor
            }
        });
    }

    changeS2H = (newName, newSize, newFamily, newColor) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            s2Heading: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor
            }
        });
    }

    changeS2D = (newName, newSize, newFamily, newColor) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            s2Desc: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor
            }
        });
    }

    changeS3H = (newName, newSize, newFamily, newColor) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            s3Heading: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor
            }
        });
    }

    changeS3D = (newName, newSize, newFamily, newColor) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            s3Desc: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor
            }
        });
    }

    changeAdminName = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            adminName: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor,
                bold: bold,
                italic: italic,
                underline: underline,
                align: align
            }
        });
    }

    changeAdminMessage = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            adminMessage: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor,
                bold: bold,
                italic: italic,
                underline: underline,
                align: align
            }
        });
    }

    flexHandler = (newValue) => {
        this.setState({
            flex: {
                flexTopDishes: newValue,
                flexMenu:this.state.flex.flexMenu
            }
        });   
        console.log(newValue);
    }




    render() {

        let textEditor = <SideEditor editorHandler={this.editorHandler} />

        if (this.state.storeNameEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ storeNameEditor: false }) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => this.changeStoreName(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={this.state.storeName} />
        }

        if (this.state.introTextEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ introTextEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo) => this.changeIntroText(newNam, newSiz, newFamil, newColo)} data={this.state.introText} />
        }

        if (this.state.servicesDescEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ servicesDescEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo) => this.changeServicesDescription(newNam, newSiz, newFamil, newColo)} data={this.state.servicesDescription} />
        }

        if (this.state.s1HEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ s1HEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo) => this.changeS1H(newNam, newSiz, newFamil, newColo)} data={this.state.s1Heading} />
        }

        if (this.state.s1DEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ s1DEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo) => this.changeS1D(newNam, newSiz, newFamil, newColo)} data={this.state.s1Desc} />
        }

        if (this.state.s2HEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ s2HEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo) => this.changeS2H(newNam, newSiz, newFamil, newColo)} data={this.state.s2Heading} />
        }

        if (this.state.s2DEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ s2DEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo) => this.changeS2D(newNam, newSiz, newFamil, newColo)} data={this.state.s2Desc} />
        }

        if (this.state.s3HEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ s3HEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo) => this.changeS3H(newNam, newSiz, newFamil, newColo)} data={this.state.s3Heading} />
        }

        if (this.state.s3DEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ s3DEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo) => this.changeS3D(newNam, newSiz, newFamil, newColo)} data={this.state.s3Desc} />
        }

        if (this.state.adminNameEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ adminNameEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo, bold, italic, underline, align) => this.changeAdminName(newNam, newSiz, newFamil, newColo, bold, italic, underline, align)} data={this.state.adminName} />
        }

        if (this.state.adminMessageEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ adminMessageEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo, bold, italic, underline, align) => this.changeAdminMessage(newNam, newSiz, newFamil, newColo, bold, italic, underline, align)} data={this.state.adminMessage} />
        }

        if (this.state.aboutUsEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ aboutUsEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo, bold, italic, underline, align) => this.changeAboutUs(newNam, newSiz, newFamil, newColo, bold, italic, underline, align)} data={this.state.footer.aboutUs} />
        }

        if (this.state.phoneEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ phoneEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo, bold, italic, underline, align) => this.changePhone(newNam, newSiz, newFamil, newColo, bold, italic, underline, align)} data={this.state.footer.phone} />
        }

        if (this.state.addressEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ addressEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo, bold, italic, underline, align) => this.changeAddress(newNam, newSiz, newFamil, newColo, bold, italic, underline, align)} data={this.state.footer.address} />
        }

        if (this.state.emailEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ emailEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo, bold, italic, underline, align) => this.changeEmail(newNam, newSiz, newFamil, newColo, bold, italic, underline, align)} data={this.state.footer.email} />
        }

        if (this.state.whatsappEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ whatsappEditor: false }) }} changeHandler={(newNam, newSiz, newFamil, newColo, bold, italic, underline, align) => this.changeWhatsapp(newNam, newSiz, newFamil, newColo, bold, italic, underline, align)} data={this.state.footer.whatsapp} />
        }

        if (this.state.showEditor === false) {
            textEditor = null;
        }


        return (
            <div className={classes.rootCont}>
                <div> {textEditor} </div>
                <div className={this.state.showEditor ? classes.spacer : ''} />
                <div className={classes.content} style={this.state.showEditor ? { width: "65%" } : { width: "100%" }}>
                    <Intro
                        storeName={this.state.storeName}
                        storeNameEditor={this.storeNameEditor}
                        introText={this.state.introText}
                        introTextEditor={this.introTextEditor}
                    />
                    <ServicesSection
                        servicesDescription={this.state.servicesDescription}
                        clickHandler={this.servicesDescEditor}

                        s1H={this.state.s1Heading}
                        s1HClickHandler={this.s1HEditor}

                        s1D={this.state.s1Desc}
                        s1DClickHandler={this.s1DEditor}

                        s2H={this.state.s2Heading}
                        s2HClickHandler={this.s2HEditor}

                        s2D={this.state.s2Desc}
                        s2DClickHandler={this.s2DEditor}

                        s3H={this.state.s3Heading}
                        s3HClickHandler={this.s3HEditor}

                        s3D={this.state.s3Desc}
                        s3DClickHandler={this.s3DEditor}

                    />
                    <TopDishes
                        dishes={this.state.dishes}
                        flex={this.state.flex.flexTopDishes}
                        flexHandler={this.flexHandler}
                    />
                    <LatestEditions
                        dishes={this.state.dishes}
                    />
                    <ContactUs
                        adminName={this.state.adminName}
                        adminNameHandler={this.adminNameEditor}

                        adminMessage={this.state.adminMessage}
                        adminMessageHandler={this.adminMessageEditor}
                    />
                    <Footer
                        footer={this.state.footer}
                        aboutUsHandler={this.aboutUsEditor}
                        phoneHandler={this.phoneEditor}
                        addressHandler={this.addressEditor}
                        emailHandler={this.emailEditor}
                        whatsappHandler={this.whatsappEditor}
                    />
                    <button style={{ bottom: 30 }} className={classes.saveBt} onClick={this.saveChangesHandler}>Save Changes</button>
                </div>
            </div>
        );
    }

}
