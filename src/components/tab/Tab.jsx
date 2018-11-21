import React, {Component} from 'react'
import { Tab } from 'semantic-ui-react'
import MyCardGroup from '../card/CardGroup.jsx';

const panes = [
  { menuItem: 'Restaurantes', render: () => <MyCardGroup/> },
  { menuItem: 'Eventos', render: () => <MyCardGroup/> },
]

class MyTab extends Component{



  render() {
    return (
      <Tab panes={panes}/ >
    )
  }


}

export default MyTab
