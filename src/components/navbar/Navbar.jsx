import React, {Component} from 'react';
import {Menu, Segment, Input, Image} from 'semantic-ui-react';
import { Api } from '../../Api';
import './navbar.css'
import { NavLink } from "react-router-dom";
class MyNavbar extends Component {

  constructor() {
    super()
    this.state = {
      searchValue: '',
      activeItem: ''
    }
  }


  componentWillMount = async() => {
      await this.refresh();
  }

  refresh = async(query) => {
      Api.get('/search?city='+query).then((response) => {
      console.log(response)
      const { onChange } = this.props;
      onChange(response.data.events);

    })

  }


  handleChange = (e, data) => {
    this.setState({searchValue: data.value})
  }

  handleSearch = (event) => {
    if (event.key === "Enter") {
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
            <Image src = "https://image.ibb.co/hdRb5V/Imagem1.png"
              onClick={this.handleItemClick}
              as={NavLink} to='/'
              size="tiny"
              />
          </Menu.Item>

          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={NavLink} to='/'/>
          <Menu.Item
            name='meus eventos'
            active={activeItem === 'meus eventos'}
            onClick={this.handleItemClick}
            as={NavLink} to='/a'
          />

          <Menu.Item
            name='tenho interesse'
            active={activeItem === 'tenho interesse'}
            onClick={this.handleItemClick}
            as={NavLink} to='/b'
          />

          <Menu.Item position='right' >
                  <Input  fluid icon='search' onChange={this.handleChange} onKeyPress = {this.handleSearch} placeholder='Search...'/>
          </Menu.Item>

          <Menu.Item
            name='novo evento'
            active={activeItem === 'novo evento'}
            onClick={this.handleItemClick}
            as={NavLink} to='/createEvent'
          />
        </Menu>
      </Segment>




    )
  }


}

export default MyNavbar;
