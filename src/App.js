import React, { useState } from "react";
import './App.css'

export default function App() {
  // inputsValue
  const [inputValues, setInputValues] = useState({
    frist_name: '',
    last_name: '',
    email: ''
  })
  // submit 
  const [submit, setSubmit] = useState(false)
  // valid 
  const [valid ,setValid] =useState(false)
  // handel frist name
  const handelFristName = (e) => {
    setInputValues({ ...inputValues, frist_name: e.target.value })
  }
  // handel last name
  const handelLasttName = (e) => {
    setInputValues({ ...inputValues, last_name: e.target.value })
  }
  // handel email
  const handelEmail = (e) => {
    setInputValues({ ...inputValues, email: e.target.value })
  }
  // handelSubmit
  const handelSubmit = (e) => {
    e.preventDefault();
    setSubmit(true)
    if(inputValues.frist_name && inputValues.last_name && inputValues.email){
      setValid(true)
    }
  }
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handelSubmit}>

        {submit && valid ? <div className="success-message">Success! Thank you for registering</div> : ''}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={inputValues.frist_name}
          onChange={handelFristName}
        />

        {submit && inputValues.frist_name ? '' : <span id="first-name-error">Please enter a first name</span>}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={inputValues.last_name}
          onChange={handelLasttName}
        />
        {submit && inputValues.last_name ? '' : <span id="last-name-error">Please enter a last name</span>}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={inputValues.email}
          onChange={handelEmail}
        />
        {submit && inputValues.email ? '' : <span id="email-error">Please enter an email address</span>}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}