import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCompleted} from '../actions';
import {completeGoalRef, goalRef} from '../firebase';
import '../styles/CompleteGoalListStyle.css';

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const {email, title} = completeGoal.val();
        const serverKey = completeGoal.key;
        completeGoals.push({email, title, serverKey});
      })
      this.props.setCompleted(completeGoals);
    })
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  clearCompletedGoal(serverKey) {
    completeGoalRef.child(serverKey).remove();
  }
  render() {
    console.log('this.props.completeGoals', this.props.completeGoals);
    return (
      <div>
        {
          this.props.completeGoals.map((completeGoal, index) => {
            const {email, title, serverKey} = completeGoal;
            return (
              <div key={index}>
                <strong>{title}</strong>
                <span> Completed By <em>{email}</em> </span>
                <button
                  className="btn btn-danger"
                  onClick={() => this.clearCompletedGoal(serverKey)}
                  >
                  Remove
                </button>
              </div>
            )
          })
        }
        <div className="button">
          <button
            className="btn btn-primary"
            onClick={() => this.clearCompleted()}
            >
            Clear All
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {completeGoals, user, goals} = state;

  return {
    completeGoals, user, goals
  }
}

export default connect(mapStateToProps, {setCompleted})(CompleteGoalList);
