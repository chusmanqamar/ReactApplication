import React, { Component } from 'react';
import { Row, Col, Container, } from 'react-bootstrap';
import './main.css';
import BannerImage from '../images/banner.jpg';
import Cards from './Cards';
import CardImage1 from '../images/card-1.jpg';
import CardImage2 from '../images/card-2.jpg';
import CardImage3 from '../images/card-3.jpg';
import SITE_Footer from '../components/footer';
import './footer.css';


export default class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="container-fluid p-0">
          <div className="banner">
            <img src={BannerImage} alt="banner" className="img-fluid" />
          </div>
        </div>
        <Container className="mt-5">
          <Row>
            <Col md="4" sm="4">
              <Cards title="Mr. Nenna" cardText="Some example text some example text. John Doe is an architect and engineer" button="See Profile" image={CardImage1} />
            </Col>
            <Col md="4" sm="4">
              <Cards title="Miss Julie" cardText="Some example text some example text. John Doe is an architect and engineer" button="See Profile" image={CardImage2} />
            </Col>
            <Col md="4" sm="4">
              <Cards title="Mr. Node" cardText="Some example text some example text. John Doe is an architect and engineer" button="See Profile" image={CardImage3} />
            </Col>
          </Row>
        </Container>
        <div className="container-fluid footerBack mt-5">
          <Row>
            <Col md="12">
              <SITE_Footer list="test" />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
};
