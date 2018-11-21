import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

class MySidebar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  componentDidMount() {}

  render() {
      const { activeItem } = this.state

      return(
          <div className='pusher' >
              <div className='full height'>
                  <div className='toc'>
                      <Menu className='inverted vertical left fixed' size='large'>
                          <Menu.Item active={activeItem === 'home'} onClick={this.handleItemClick}>
                              Home
                              <Icon name='home' />
                          </Menu.Item>
                          <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                              <Icon name='grid layout' />
                              Browse
                          </Menu.Item>
                      </Menu>
                  </div>
                  <div className='article'>
                      <div>Content</div>
                  </div>
              </div>
          </div>
      )
  }
}

export default MySidebar;
