import React from 'react';

const SignupSubmissionForm = (props) => {
  return (<div style={{"text-align":"center", "padding-top": "2em"}}><form name="signup" onSubmit={props.onSignupHandler}>
    <input name="username" id="username" type="text" placeholder="Username"></input>
    <input name="password" id="password" type="password" placeholder="Password"></input>
    <button type="submit">Sign Up</button>
  </form></div>);
}

export default SignupSubmissionForm;
