import React, { Component } from 'react';
import classes from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

export default class NavItem extends Component {

    render() {
        return (
            <li>
                <NavLink activeClassName={classes.active} id="NavAnchor" exact className={classes.NavLink} to={this.props.navHref}>{this.props.navText}</NavLink>
            </li>
        );
    } 
}