import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import '../styles/SignInStyle.css';

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  resetPassword() {
    console.log('this.state', this.state);
    const {email} = this.state;
    firebaseApp.auth().sendPasswordResetEmail(email)
      .catch(error => {
        this.setState({error});
      })
  }
  render() {
    return (
      <div className="Password">
        <div className="form-inline">
          <h4>Reset Password</h4>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="email"
              onChange={event => this.setState({email: event.target.value})}
              />
            <button
              className="btn btn-success"
              type="button"
              onClick={() => this.resetPassword()}
              >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordReset
