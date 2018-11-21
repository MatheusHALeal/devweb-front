import React, {Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import MyCard from './Card.jsx';
import './Card.css';
class MyCardGroup extends Component {


  render() {
    return (
      <Card.Group centered className="CardGroup">
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
      </Card.Group>
    )

  }


}

export default MyCardGroup;
