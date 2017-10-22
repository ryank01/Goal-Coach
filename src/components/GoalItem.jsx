import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeGoalRef, goalRef} from '../firebase';
import '../styles/GoalItemStyle.css';

class GoalItem extends Component {
  completeGoal() {
    //add to complete goals on the database
    //remove goal from goals ref
    const {email} = this.props.user;
    const {title, serverKey} = this.props.goal;
    console.log('TITLE AND SERVER KERY', title, serverKey)
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email, title});
  }
  render() {
    const {email, title} = this.props.goal;
    return (
      <div className="Goal-Item">
        <strong>{title}</strong>
        <span className="list-item"> submitted by <em>{email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
          >
          Complete
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {user} = state;
  return {
    user
  }
}
export default connect(mapStateToProps, null)(GoalItem);
