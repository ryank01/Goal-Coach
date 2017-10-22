import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import {logUser} from './actions';
import reducer from './reducers';
import {firebaseApp} from './firebase';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PasswordReset from './components/PasswordReset';

const store = createStore(reducer);
firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    const {email} = user;
    store.dispatch(logUser(email));
    browserHistory.push('/app');
  } else {
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/resetpassword" component={PasswordReset} />
    </Router>
  </Provider>, document.getElementById('root')
)
