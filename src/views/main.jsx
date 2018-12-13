import React, { Component } from 'react';
import MyNavbar from '../components/navbar/Navbar.jsx';
import MyTab from '../components/tab/Tab.jsx';
import {Container} from 'semantic-ui-react';

import './main.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          events: []
      }
  }

  search = event => {
    this.setState({ events: event});
  }

  render() {
    const { events } = this.state;
    return (

      <div>
        <div></div>
        <MyNavbar events={this.state.events} onChange={this.search} />
        <Container>
          <MyTab events={this.state.events}/>
        </Container>




      </div>

    );
  }
}

export default App;
