import React from 'react';
import classes from './main.module.css';
import Navbar from '../Navbar/navbar';
import Frontscreen from '../Homepage/home';
import Recipe from '../recipe/Recipepage';
import Gallery from '../gallery/Gallerypage';
import Contact from '../contactme/Contactme';

import { HashRouter, Route } from 'react-router-dom';

function App() {


    return (
        <div className={classes.App}>
            <HashRouter>
                <Navbar />
                <Route exact path="/" component={Frontscreen} />
                <Route exact path="/recipe" component={Recipe} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/contact" component={Contact} />

            </HashRouter>
        </div>
    );
}

export default App;