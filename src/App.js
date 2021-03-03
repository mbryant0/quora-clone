import React from 'react';
import SignIn from './components/SignIn/SignIn';
import Home from './components/Home/Home';
import './App.css';
import { auth } from './firebase/firebase.utils';
import { Switch, Route } from 'react-router-dom';

/* We still need to add protected routes so that people can only access the content if they are logged in 
/api/posts
/api/post/id	GET	Retrieves post by id	
/api/post/id/comments	GET	Retrieves all comments for post by id	
/api/u/user	GET	Retrieves profile information about user	
/api/u/{user}/posts	GET	Retrieves all posts by user	
/api/u/{user}/comments	GET	Retrieves all comments by user	
/api/register	POST	Registers an account

*/

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/home'>
            <Home currentUser={this.state.currentUser} />
          </Route>
          <Route path='/' component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
