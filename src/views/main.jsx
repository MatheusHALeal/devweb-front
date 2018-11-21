import React, { Component } from 'react';
import MySidebar from '../components/sidebar/Sidebar.jsx';
import MyNavbar from '../components/navbar/Navbar.jsx';
import MyCardGroup from '../components/card/CardGroup.jsx';
class App extends Component {
  render() {
    return (

      <div>
        <MyNavbar/>
        <MySidebar/>
        <MyCardGroup/>
      </div>

    );
  }
}

export default App;
