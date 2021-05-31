import React, { useState, useEffect } from 'react';
import AboutMe from './AboutMe/aboutMe';
import Intro from './Intro/intro';
import LatestResearches from './LatestResearches/researches';
import Services from './Services/services';
import ContactUs from "../Contact/contact";
import Footer from "../Footer/Footer";
import axios from "axios";
import SideEditor from "./../ReusableStuff/SideEditor/SideEditor";
import TextEditor from "./../ReusableStuff/Editors/TextEditor/TextEditor";
import classes from "./home.module.css"

const Home = () => {

    const [introName, setintroName] = useState();
    const [researches, setresearches] = useState();
    const [s1h, sets1h] = useState();
    const [s1d, sets1d] = useState();
    const [s2h, sets2h] = useState();
    const [s2d, sets2d] = useState();
    const [s3h, sets3h] = useState();
    const [s3d, sets3d] = useState();
    const [aboutme, setaboutme] = useState();
    const [introF2, setintroF2] = useState();
    const [introF3, setintroF3] = useState();
    const [specialities, setSpecialities] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [footer, setfooter] = useState();
    const [showEditor, setshowEditor] = useState(false);

    const [showNameEditor, setshowNameEditor] = useState(false);
    const [showNameEditor1, setshowNameEditor1] = useState(false);
    const [showNameEditor2, setshowNameEditor2] = useState(false);

    const [sk1Editor, setsk1Editor] = useState(false);
    const [sk2Editor, setsk2Editor] = useState(false);
    const [sk3Editor, setsk3Editor] = useState(false);

    const [sh1Editor, setsh1Editor] = useState(false);
    const [sh2Editor, setsh2Editor] = useState(false);
    const [sh3Editor, setsh3Editor] = useState(false);
    const [sd1Editor, setsd1Editor] = useState(false);
    const [sd2Editor, setsd2Editor] = useState(false);
    const [sd3Editor, setsd3Editor] = useState(false);

    const [abtEditor, setabtEditor] = useState(false);

    const [fabtEditor, setfabtEditor] = useState(false);
    const [contact1Editor, setcontact1Editor] = useState(false);
    const [contact2Editor, setcontact2Editor] = useState(false);
    const [contact3Editor, setcontact3Editor] = useState(false);
    const [contact4Editor, setcontact4Editor] = useState(false);


    useEffect(() => {

        getData();

    }, []);

    async function getData() {
        let response = await axios.get("http://localhost:8080/d1td/getHomeData?id=" + localStorage.getItem("id"));
        setintroName(response.data.data.introName);
        setintroF2(response.data.data.introF2);
        setintroF3(response.data.data.introF3);
        setSpecialities(response.data.data.specialities);
        setEmail(response.data.data.email);
        setPhone(response.data.data.phone);


        setresearches(response.data.data.researches);

        sets1h(response.data.data.s1h);
        sets2h(response.data.data.s2h);
        sets3h(response.data.data.s3h);
        sets1d(response.data.data.s1d);
        sets2d(response.data.data.s2d);
        sets3d(response.data.data.s3d);

        setaboutme(response.data.data.aboutme);

        setfooter(response.data.data.footer);

    }

    let saveChangesHandler = () => {
        fetch("http://localhost:8080/d1td/updateHomeData", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                name: introName,
                s1h: s1h,
                s2h: s2h,
                s3h: s3h,
                s1d: s1d,
                s2d: s2d,
                s3d: s3d,
                aboutme: aboutme,
                introF2: introF2,
                introF3: introF3,
                specialities: specialities,
                phone: phone,
                email: email,
                footer: footer
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

    let nameHandler = () => {
        setshowNameEditor(true);
        setshowEditor(true);
    }

    let changeIntroName = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setintroName(changedData);
    }

    let name1Handler = () => {
        setshowNameEditor1(true);
        setshowEditor(true);
    }

    let changeIntroName1 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setintroF2(changedData);
    }

    let name2Handler = () => {
        setshowNameEditor2(true);
        setshowEditor(true);
    }

    let changeIntroName2 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setintroF3(changedData);
    }

    //intro specialities, phone and email functions

    let sk1Handler = () => {
        setsk1Editor(true);
        setshowEditor(true);
    }

    let changesk1 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setSpecialities(changedData);
    }

    let sk2Handler = () => {
        setsk2Editor(true);
        setshowEditor(true);
    }

    let changesk2 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setPhone(changedData);
    }

    let sk3Handler = () => {
        setsk3Editor(true);
        setshowEditor(true);
    }

    let changesk3 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setEmail(changedData);
    }

    //service description functions

    let sd1Handler = () => {
        setsd1Editor(true);
        setshowEditor(true);
    }

    let changesd1 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setSpecialities(changedData);
    }

    let sd2Handler = () => {
        setsd2Editor(true);
        setshowEditor(true);
    }

    let changesd2 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setPhone(changedData);
    }

    let sd3Handler = () => {
        setsd3Editor(true);
        setshowEditor(true);
    }

    let changesd3 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setEmail(changedData);
    }

    // service headings functions:

    let sh1Handler = () => {
        setsh1Editor(true);
        setshowEditor(true);
    }

    let changesh1 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setSpecialities(changedData);
    }

    let sh2Handler = () => {
        setsh2Editor(true);
        setshowEditor(true);
    }

    let changesh2 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setPhone(changedData);
    }

    let sh3Handler = () => {
        setsh3Editor(true);
        setshowEditor(true);
    }

    let changesh3 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setEmail(changedData);
    }

    //about editor
    let abtHandler = () => {
        setabtEditor(true);
        setshowEditor(true);
    }

    let changeabt = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setaboutme(changedData);
    }

    //footer functions
    let fabtHandler = () => {
        setfabtEditor(true);
        setshowEditor(true);
    }

    let changefabt = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setfooter({ ...footer, aboutUs: changedData })
    }

    let contact1Handler = () => {
        setcontact1Editor(true);
        setshowEditor(true);
    }

    let changecontact1 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setfooter({ ...footer, address: changedData })
    }

    let contact2Handler = () => {
        setcontact2Editor(true);
        setshowEditor(true);
    }

    let changecontact2 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setfooter({ ...footer, phone: changedData })
    }

    let contact3Handler = () => {
        setcontact3Editor(true);
        setshowEditor(true);
    }

    let changecontact3 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setfooter({ ...footer, whatsapp: changedData })
    }

    let contact4Handler = () => {
        setcontact4Editor(true);
        setshowEditor(true);
    }

    let changecontact4 = (newName, newSize, newFamily, newColor, bold, italic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }

        let changedData = {
            text: newName,
            fontSize: newSize,
            fontColor: newColor,
            fontFamily: newFamily,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align
        }

        setfooter({ ...footer, email: changedData })
    }


    let textEditor = <SideEditor editorHandler={() => setshowEditor(false)} />

    if (showEditor === false) {
        textEditor = null;
    }
    if (showNameEditor === true) {
        textEditor = <TextEditor closeHandler={() => { setshowNameEditor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changeIntroName(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={introName} />
    }
    if (showNameEditor1 === true) {
        textEditor = <TextEditor closeHandler={() => { setshowNameEditor1(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changeIntroName1(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={introF2} />
    }
    if (showNameEditor2 === true) {
        textEditor = <TextEditor closeHandler={() => { setshowNameEditor2(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changeIntroName2(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={introF3} />
    }
    if (sk1Editor === true) {
        textEditor = <TextEditor closeHandler={() => { setsk1Editor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changesk1(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={specialities} />
    }
    if (sk2Editor === true) {
        textEditor = <TextEditor closeHandler={() => { setsk2Editor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changesk2(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={phone} />
    }
    if (sk3Editor === true) {
        textEditor = <TextEditor closeHandler={() => { setsk3Editor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changesk3(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={email} />
    }
    if (sh1Editor === true) {
        textEditor = <TextEditor closeHandler={() => { setsh1Editor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changesh1(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={s1h} />
    }
    if (sh2Editor === true) {
        textEditor = <TextEditor closeHandler={() => { setsh2Editor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changesh2(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={s2h} />
    }
    if (sh3Editor === true) {
        textEditor = <TextEditor closeHandler={() => { setsh3Editor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changesh3(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={s3h} />
    }
    if (sd1Editor === true) {
        textEditor = <TextEditor closeHandler={() => { setsd1Editor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changesd1(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={s1d} />
    }
    if (sd2Editor === true) {
        textEditor = <TextEditor closeHandler={() => { setsd2Editor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changesd2(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={s2d} />
    }
    if (sd3Editor === true) {
        textEditor = <TextEditor closeHandler={() => { setsd3Editor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changesd3(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={s3d} />
    }
    if (abtEditor === true) {
        textEditor = <TextEditor closeHandler={() => { setabtEditor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changeabt(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={aboutme} />
    }
    if (fabtEditor === true) {
        textEditor = <TextEditor closeHandler={() => { setfabtEditor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changefabt(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={footer.aboutUs} />
    }
    if (contact1Editor === true) {
        textEditor = <TextEditor closeHandler={() => { setcontact1Editor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changecontact1(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={footer.address} />
    }
    if (contact2Editor === true) {
        textEditor = <TextEditor closeHandler={() => { setcontact2Editor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changecontact2(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={footer.phone} />
    }
    if (contact3Editor === true) {
        textEditor = <TextEditor closeHandler={() => { setcontact3Editor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changecontact3(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={footer.whatsapp} />
    }
    if (contact4Editor === true) {
        textEditor = <TextEditor closeHandler={() => { setcontact4Editor(false) }} changeHandler={(newName, newSize, newFamily, newColor, bold, italic, underline, align) => changecontact4(newName, newSize, newFamily, newColor, bold, italic, underline, align)} data={footer.email} />
    }

    return (
        introName && researches && s3d && aboutme && footer ?
            <>
                <div style={{ display: 'flex' }}>
                    <div> {textEditor} </div>
                    <div className={showEditor ? classes.spacer : ''} />
                    <div className={classes.content} style={showEditor ? { width: "65%" } : { width: "100%" }}>

                        <Intro
                            name={introName}
                            introF2={introF2}
                            introF3={introF3}

                            email={email}
                            specialities={specialities}
                            phone={phone}

        
                        />
                        <LatestResearches
                            researches={researches}
                        />
                        <Services
                            s1h={s1h}
                            s2h={s2h}
                            s3h={s3h}


                            s1d={s1d}
                            s2d={s2d}
                            s3d={s3d}

                            
                        />
                        <AboutMe
                            aboutme={aboutme}
                        

                        />
                        <ContactUs />
                        <Footer

                            footer={footer}
                            
                       
                        />
                        
                    </div>

                </div>


            </>
            : null
    );
}

export default Home;