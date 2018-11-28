import React, {Component} from 'react';
import {Menu, Segment, Item, Button, Input, Image} from 'semantic-ui-react';
import { Api } from '../../Api';
import './navbar.css'
class MyNavbar extends Component {

  constructor() {
    super()
    this.state = {
      searchValue: ''
    }
  }


  componentWillMount = async() => {
      await this.refresh();
  }

  refresh = async(query) => {
      Api.get('/search?city='+query).then((response) => {
      const { onChange } = this.props;
      onChange(response.data.events);
    })

  }


  state = { activeItem: 'home' }

  handleChange = (e, data) => {
    this.setState({searchValue: data.value})
  }

  handleSearch = (event) => {
    if (event.key == "Enter") {
      this.refresh(this.state.searchValue)
    }
  }

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
                  <Input  fluid icon='search' onChange={this.handleChange} onKeyPress = {this.handleSearch} placeholder='Search...'/>
          </Menu.Item>
        </Menu>
      </Segment>




    )
  }


}

export default MyNavbar;
