import React from 'react';

const LoginSubmissionForm = (props) => {
  return (<div style={{"text-align":"center", "padding-top": "2em", "padding-bottom":"2em"}}><form name="login" onSubmit={props.onLoginHandler}>
    <input name="username" id="username" type="text" placeholder="Username"></input>
    <input name="password" id="password" type="password" placeholder="Password"></input>
    <button type="submit">Login</button>
  </form></div>);
}

export default LoginSubmissionForm;
