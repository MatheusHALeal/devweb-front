import React, {Component} from 'react';
import './semantic/dist/semantic.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./routes/private.jsx";
import FirebaseConfig from './config/keys';
import App from './views/Main/main.jsx';
import Login from './views/Login';
import NewEvent from './views/CreateEvent/createEvent.jsx';

class RotaLink extends Component {
  state = { loading: true, authenticated: false, user: null };


  componentWillMount() {
    FirebaseConfig.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render(){
    const { authenticated, loading } = this.state;

    if (loading) {
      return (<p>Loading..</p>);
    }
    return (
      <Router>
        <div>
          <Route exact path="/" component={App}/>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/createEvent" component={NewEvent} authenticated={authenticated}/>
        </div>
        </Router>
    )
  }
}

export default RotaLink;
