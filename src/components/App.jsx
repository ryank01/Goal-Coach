import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
import '../styles/App.css';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App">
          App
          <div className="button">
            <button
              className="btn btn-danger"
              onClick={() => this.signOut()}
              >
              Sign Out
            </button>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null) (App);
