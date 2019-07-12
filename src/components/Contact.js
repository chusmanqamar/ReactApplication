import React, { Component } from "react";

class ContactPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      message: "",
      nameError: "name is empty"
    };
  }

  handleName = e => {
    this.setState({ name: e.target.value });
  };
  handlePassword = e => {
    this.setState({ password: e.target.value });
  };
  handleMessage = e => {
    this.setState({ message: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleName}
          />
          <div style={{ color: "red" }}>{this.state.nameError}</div>
        </label>
        <br />
        <br />
        <label>
          Password:{" "}
          <input
            type="text"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
        </label>
        <br />
        <br />
        <label>
          Message:{" "}
          <textarea
            type="text"
            placeholder="Message Here"
            value={this.state.message}
            onChange={this.handleMessage}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default ContactPage;
