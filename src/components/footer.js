import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import './footer.css';

class SITE_Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="footer">
                    <Row className="mt-5">
                        <Col md="4">
                            <div className="single_footer">
                                <h4>Services</h4>
                                <ul>
                                    <li><a href="#">{this.props.list}</a></li>
                                    <li><a href="#">Simply dummy text</a></li>
                                    <li><a href="#">The printing and typesetting </a></li>
                                    <li><a href="#">Standard dummy text</a></li>
                                    <li><a href="#">Type specimen book</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="single_footer single_footer_address">
                                <h4>Page Link</h4>
                                <ul>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Simply dummy text</a></li>
                                    <li><a href="#">The printing and typesetting </a></li>
                                    <li><a href="#">Standard dummy text</a></li>
                                    <li><a href="#">Type specimen book</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="single_footer single_footer_address">
                                <h4>Subscribe today</h4>
                                <div className="signup_form">
                                    <Form className="subscribe">
                                        <input type="text" className="subscribe__input" placeholder="Enter Email Address" />
                                        <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane"></i>
                                        </button>
                                    </Form>
                                </div>
                                <div className="social_profile">
                                    <ul className="list-inline">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" sm="12">
                            <p className="copyright">Copyright © 2019 <a href="#">Akdesign</a>.</p>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default SITE_Footer;