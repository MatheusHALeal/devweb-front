import React, {Component} from 'react'
import { Tab } from 'semantic-ui-react'
import MyCardGroup from '../card/CardGroup.jsx';

class MyTab extends Component{

  constructor(props) {
      super(props);
      this.state = {
          events: props.events
      }
  }

  render() {
    return (
      <Tab panes={[
          {menuItem: 'Eventos', render: () => <MyCardGroup events = {this.state.events}/>},
          { menuItem: 'Restaurantes', render: () => <MyCardGroup/> },
        ]}/ >
    )
  }


}

export default MyTab
