import React, {Component} from 'react';
import {Menu, Segment, Item, Button, Input, Image} from 'semantic-ui-react';
import './navbar.css'
class MyNavbar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item position='left' fluid>
            <Image src = "https://image.ibb.co/hdRb5V/Imagem1.png" size="tiny"/>
          </Menu.Item>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='meus eventos'
            active={activeItem === 'meus eventos'}
            onClick={this.handleItemClick}

          />
          <Menu.Item
            name='tenho interesse'
            active={activeItem === 'tenho interesse'}
            onClick={this.handleItemClick}
          />

          <Menu.Item position='right' >
                  <Input  fluid icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu>
      </Segment>




    )
  }


}

export default MyNavbar;
