import React, {Component} from 'react';
import {Menu, Segment, Item, Button, Input} from 'semantic-ui-react';

class MyNavbar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted size='large'>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' />
          </Menu.Item>
          <Menu.Item position='right'>
            <Button secondary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }



}

export default MyNavbar;
