import React, { Component } from 'react'

export default class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email:'',
      pass: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({target}) {
    const {name, value} = target;
    this.setState({[name]: value})
    console.log(this.state);
  }

  render() {
    const { email, pass } = this.state
    return (
      <div>
        <label htmlFor='emailLogin'>Email
          <input type='text' name="email" value={email} id='emailLogin' onChange={this.handleChange}></input>
        </label>
        <label htmlFor='passLogin'>Password
          <input type='password' name="pass" value={pass} id='passLogin' onChange={this.handleChange}></input>
        </label>
        <button type='Submit'>Sign In</button>
      </div>
    )
  }
}
