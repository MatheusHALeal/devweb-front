import React, {Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import MyCard from './Card.jsx';
import './Card.css';

class MyCardGroup extends Component {

  constructor(props) {
      super(props);
      this.state = {
          events: props.events
      }
  }


  render() {

    if (this.state.events) {
      if (this.state.events[0] !== undefined) {
        console.log(this.state.events[0]);
        return (
          <Card.Group centered className="CardGroup">
            {this.state.events[0].map((event, i) => (
                <MyCard key={i} event={event}></MyCard>
            )
            )}
          </Card.Group>
        )
      }


    }
    return null;

  }


}

export default MyCardGroup;
