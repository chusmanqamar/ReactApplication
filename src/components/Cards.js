import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Cards extends Component {
  render() {
    return (
         <div className="card">
            <img className="card-img-top" src={this.props.image} alt="Cards" />
            <div className="card-body">
                <h4 className="card-title">{this.props.title}</h4>
                <p className="card-text">{this.props.cardText}</p>
                <Link to="/News"  className="btn btn-primary mt-3">{this.props.button}</Link>
            </div>
        </div>
    )
  }
}
