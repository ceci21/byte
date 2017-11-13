import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SignupSubmissionForm = (props) => {
  return (
    <div style={{
      "text-align": "center",
      "padding-top": "2em",
      "padding-bottom": "2em"
    }}>
      <form name="signup" onSubmit={props.onSignupHandler}>
        <FormControl className="input-field" name="username" id="username" type="text" placeholder="Username" />
        <FormControl className="input-field" name="password" id="password" type="password" placeholder="Password" />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignupSubmissionForm;
