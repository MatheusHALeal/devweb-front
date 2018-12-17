import React, { Component } from 'react';
import MyNavbar from '../../components/navbar/Navbar.jsx';
import MyTab from '../../components/tab/Tab.jsx';
import {Container} from 'semantic-ui-react';
import FormEvent from '../../components/form/formEvent.jsx'

class NewEvent extends Component {

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
          <FormEvent/>
        </Container>
      </div>

    );
  }
}

export default NewEvent;
