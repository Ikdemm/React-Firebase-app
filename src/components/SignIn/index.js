import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
 
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';
import { Button, Form } from 'react-bootstrap';
 
const SignInPage = () => (
  <div className="container">
    <h1 className="page-title">SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email, password } = this.state;
 
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { email, password, error } = this.state;
 
    const isInvalid = password === '' || email === '';
 
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group className="signin-form-group" controlId="signinEmail">
          <Form.Control name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address" />
        </Form.Group>
        <Form.Group className="signin-form-group" controlId="signinPassword">
          <Form.Control name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password" />
        </Form.Group>
        {error && <p>{error.message}</p>}
        <Button disabled={isInvalid} type="submit" className="submit-button">Sign in</Button>
      </Form>        
    );
  }
}
 
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
 
export default SignInPage;
 
export { SignInForm };