import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [password2Error, setPassword2Error] = useState(true);

  const changeRecord = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      const pattern =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!pattern.test(e.target.value)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    } else if (e.target.name === "password") {
      if (e.target.value.length < 8) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    } else {
      if (e.target.value !== formData.password) {
        setPassword2Error(true);
      } else {
        setPassword2Error(false);
      }
    }
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmission = (e) => {
    e.preventDefault();
    if (!emailError && !password2Error && !passwordError) {
      alert("form submitted successfully");
      setFormData({
        email: "",
        password: "",
        password2: "",
      });
      setEmailError(true);
      setPassword2Error(true);
      setPasswordError(true);
    } else {
      alert("Please enter a valid input");
    }
  };

  if (emailError && passwordError && password2Error) {
  }
  return (
    <div id="form_validation">
      <form>
        <div id="form_email">
          <label htmlFor="email">Email</label>
          <input
            className={emailError && "input-error"}
            name="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => changeRecord(e)}
            required
          />
          {emailError && <small>Please enter valid input</small>}
        </div>
        <div id="form_password">
          <label htmlFor="password">Password</label>
          <input
            className={passwordError && "input-error"}
            name="password"
            type="password"
            value={formData.password}
            id="password"
            onChange={(e) => changeRecord(e)}
            required
          />
          {passwordError && (
            <small>Password should contain at least 8 characters</small>
          )}
        </div>
        <div id="form_confirm_password">
          <label htmlFor="password2">Confirm Password</label>
          <input
            className={password2Error && "input-error"}
            name="password2"
            type="password"
            id="password2"
            value={formData.password2}
            onChange={(e) => changeRecord(e)}
            required
          />
          {password2Error && <small>Password does not match</small>}
        </div>
        <button type="submit" onClick={formSubmission}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Form;
