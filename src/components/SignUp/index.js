import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
 
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const SignUpPage = () => (
  <div>
    <div className="container">
      <h1>SignUp</h1>
      <FirebaseContext.Consumer>
        {firebase => <SignUpForm firebase={firebase} />}
      </FirebaseContext.Consumer>
    </div>
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props)
    this.state = {...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
 
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      
        <Form className="col-md-12" onSubmit={this.onSubmit}>
          <Form.Group className="signup-form-group" controlId="signupUsername">
            <Form.Control name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            className="signup-form-input"
            placeholder="Full Name" />
          </Form.Group>
          <Form.Group controlId="signupEmail">
            <Form.Control name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address" />
          </Form.Group>
          <Form.Group controlId="signupPasswordOne">
            <Form.Control name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="signupPasswordTwo">
            <Form.Control name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password" />
          </Form.Group>
          <Button variant="primary" disabled={isInvalid} type="submit">
            Sign Up
          </Button>
  
          {error && <p>{error.message}</p>}
        </Form>
    )
  }
}

const SignUpForm = compose(withRouter,withFirebase)(SignUpFormBase);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;
 
export { SignUpForm, SignUpLink };