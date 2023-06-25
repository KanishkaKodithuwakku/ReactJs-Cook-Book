import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputWidthLabel from './InputWithLabel';
import Button from '../Button';

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      email: "",
      mobileNumber: "",
      age: "",
    };
    this.handleOnChangeName = this.handleOnChangeName.bind(this);
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangeMobile = this.handleOnChangeMobile.bind(this);
    this.handleOnChangeAge = this.handleOnChangeAge.bind(this);
    this.handleFormData = this.handleFormData.bind(this);
  }

  handleOnChangeName(e) {
    const { value } = e.target;
    this.setState({ fname: value });
  }

  handleOnChangeEmail(e) {
    const { value } = e.target;
    this.setState({ email: value });
  }

  handleOnChangeMobile(e) {
    const { value } = e.target;
    this.setState({ mobileNumber: value });
  }

  handleOnChangeAge(e) {
    const { value } = e.target;
    this.setState({ age: value });
  }

  isFormValid() {
    const { fname, email, mobileNumber, age } = this.state;
    return fname && email && mobileNumber && age;
  }

  handleFormData(e) {
    e.preventDefault();

    const { fname, email, mobileNumber, age } = this.state;
    const user = {
      id: uuidv4(),
      fname,
      email,
      mobile: mobileNumber,
      age,
    };
    this.props.handleAddUserData(user);
    this.setState({ fname: "" });
    this.setState({ email: "" });
    this.setState({ mobileNumber: "" });
    this.setState({ age: "" });
  }

  render() {
    const { fname, email, mobileNumber, age, cols } = this.state;
    const isDisabled = !this.isFormValid();
    return (
      <div>
        <h2>Add New User</h2>
        <form onSubmit={this.handleFormData} className={`mt-4 ${cols}`}>
          <InputWidthLabel
            label="Full Name"
            value={fname}
            onChange={this.handleOnChangeName}
          />
          <InputWidthLabel
            label="Email Address"
            value={email}
            onChange={this.handleOnChangeEmail}
          />
          <InputWidthLabel
            label="Mobile Number"
            value={mobileNumber}
            onChange={this.handleOnChangeMobile}
          />
          <InputWidthLabel
            label="Age"
            value={age}
            onChange={this.handleOnChangeAge}
          />
          <Button
            type="submit"
            handleSubmit={this.handleFormData}
            disabled={isDisabled}
          >
            Add New User
          </Button>
        </form>
      </div>
    );
  }
};



export default UserForm;
