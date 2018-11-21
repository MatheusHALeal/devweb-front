import React, { Component } from 'react';
import MySidebar from '../components/sidebar/Sidebar.jsx';
import MyNavbar from '../components/navbar/Navbar.jsx';
import MyTab from '../components/tab/Tab.jsx';
import {Container} from 'semantic-ui-react';

import './main.css';

class App extends Component {
  render() {
    return (

      <div>
        <MyNavbar/>

        <Container>
          <MyTab/>
        </Container>




      </div>

    );
  }
}

export default App;
