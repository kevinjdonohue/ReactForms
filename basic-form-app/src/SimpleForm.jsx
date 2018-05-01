import React, { Component } from 'react';
import Textbox from './Textbox';

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      middleName: '',
      lastName: '',
      occupation: '',
      about: '',
      agreeToTerms: false,
      gender: '',
    };
  }

  handleSubmit = event => {
    alert(
      `${this.state.firstName} ${this.state.middleName} ${this.state.lastName} works in ${this.state.occupation}: ${
        this.state.agreeToTerms
      }`
    );
    event.preventDefault();
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form id="simpleForm" onSubmit={this.handleSubmit}>
        <div>
          <Textbox
            label="First Name:"
            id="firstName"
            name="firstName"
            maxLength="25"
            placeholder="First"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <Textbox
            label="Middle Name:"
            id="middleName"
            name="middleName"
            maxLength="25"
            placeholder="Middle"
            value={this.state.middleName}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <Textbox
            label="Last Name:"
            id="lastName"
            name="lastName"
            maxLength="25"
            placeholder="Last"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="occupation">
            Occupation:
            <select id="occupation" name="occupation" value={this.state.occupation} onChange={this.handleChange}>
              <option value="">Please select one:</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="manufacturing">Manufacturing</option>
            </select>
          </label>
        </div>
        <div>
          <div>
            <label htmlFor="about">About You:</label>
          </div>
          <textarea id="about" name="about" cols="47" rows="15" value={this.state.about} onChange={this.handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input id="gender" name="gender" type="radio" value="male" checked={this.state.gender === 'male'} onChange={this.handleChange} />
            Male
          </label>
          <label>
            <input id="gender" name="gender" type="radio" value="female" checked={this.state.gender === 'female'} onChange={this.handleChange} />
            Female
          </label>
        </div>
        <div>
          <label>
            <input
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              checked={this.state.agreeToTerms}
              onChange={this.handleChange}
            />
            I agree to the{' '}
            <a target="_blank" href="http://www.google.com">
              terms and conditions
            </a>.
          </label>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default SimpleForm;
