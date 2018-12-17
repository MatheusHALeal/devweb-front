import React, {Component} from 'react'
import { Tab } from 'semantic-ui-react'
import MyCardGroup from '../card/CardGroup.jsx';

class MyTab extends Component{


  render() {
    return (
      <Tab panes={[
          {menuItem: 'Eventos', render: () => <MyCardGroup events = {this.props.events}/>},
          { menuItem: 'Restaurantes', render: () => <MyCardGroup/> },
        ]}/ >
    )
  }


}

export default MyTab
