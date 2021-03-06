import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import '../styles/AppStyle.css';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App">
          <h3>Goal Coach</h3>
          <AddGoal />
          <hr />
          <h4>Goals</h4>
          <GoalList />
          <hr />
          <h4>Complete Goals</h4>
          <CompleteGoalList />
          <hr />
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
  //console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null) (App);
