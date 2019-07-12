import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <div className="container-fluid navbarBack">
                <div className="container myNav">
                    <ul className="navbar-nav ml-auto list-inline">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/News">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
