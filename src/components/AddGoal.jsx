import React, {Component} from 'react';
import {goalRef} from '../firebase';
import {connect} from 'react-redux';

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal() {
    console.log('this', this);
    const {title} = this.state;
    const {email} = this.props;
    goalRef.push({email, title});
  }

  render() {
    return (
        <div className="form-inline">
          <div className="form-group">
            <input
              type="text"
              placeolder="Add a Goal"
              className="form-control"
              onChange={event => this.setState({title: event.target.value})}
            />
            <button
              className="btn btn-success"
              type="button"
              onClick={() => this.addGoal()}
              >
              Submit
            </button>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  const {email} = state;
  return {
    email
  }
}

export default connect(mapStateToProps, null)(AddGoal);