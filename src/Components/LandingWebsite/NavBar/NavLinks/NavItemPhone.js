import React, { Component } from 'react';
import classes from './NavItem.module.css';
import { Link } from 'react-router-dom';

export default class NavItemPhone extends Component {

    render() {
        return (
            <li>
                <Link className={classes.NavLinkPhone} to={this.props.navHref}>{this.props.navText}</Link>
            </li>
        );
    }
}