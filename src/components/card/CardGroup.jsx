import React, {Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import MyCard from './Card.jsx';
import './Card.css';

class MyCardGroup extends Component {

  constructor(props) {
      super(props);
  }


  render() {

    if (this.props.events) {
        return (
          <Card.Group centered className="CardGroup">
            {this.props.events.map((event, i) => (
                <MyCard key={i} event={event}></MyCard>
            )
            )}
          </Card.Group>
        )

    }
    return null;

  }


}

export default MyCardGroup;
