import React from 'react';
import classes from './main.module.css';
import Navbar from './Navbar/Navbar';
import Calendar from './Calendar/Calendar';
import Contact from './Contact/contact';
import Myscreen from './Homepage/home';
import Research from './Research/Research';
import Request from './Calendar/RequestTecher';
import TeacherCalendar from './TeacherCalendar/TeacherCalendar';
import Notifi from './Contact/Notification';
import { HashRouter as Router, Route } from 'react-router-dom';

function App(props) {

    return (
        <div className={classes.App}>
            {props.published ? null : <div className={classes.topdiv}></div>}
            <Router>
                <Navbar />
                <Route path="/" exact component={Myscreen} />
                <Route path="/research" exact component={Research} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/request" exact component={Request} />
                <Route path="/notifi" exact component={Notifi} />
                <div className={classes.calendar}>
                    <Route path="/meeting" exact component={TeacherCalendar} />
                    <Route path="/calendar" exact component={Calendar} />
                </div>

            </Router>
        </div>
    );
}

export default App;