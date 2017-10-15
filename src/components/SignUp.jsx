import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';
import '../styles/SignUpStyle.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp() {
    console.log('this.state', this.state);
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error});
      })
  }

  render() {
    return (
      <div className="SignUp">
        <div className="form-inline">
          <h2>Sign Up</h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="email"
              onChange={event => this.setState({email: event.target.value})}
            />
            <input
              className="form-control"
              type="password"
              placeholder="password"
              onChange={event => this.setState({password: event.target.value})}
            />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signUp()}
            >
            Sign Up
          </button>
          </div>
          <div>{this.state.error.message}</div>
          <div className="link"><Link to={'/signin'}>Already a user ? Sign In Instead</Link></div>
        </div>
      </div>
    )
  }
}

export default SignUp;
