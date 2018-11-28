import React, {Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import MyModal from '../modal/Modal.jsx';

class MyCard extends Component {

  constructor(props) {
      super(props);
      this.state = {
          event: props.event
      }
  }

  render() {
    console.log(this.state.event)
    return (
      <Card >
        <MyModal/>
        <Image src='https://media-cdn.tripadvisor.com/media/photo-s/0e/52/e4/d4/restauran.jpg' />
        <Card.Content>
          <Card.Header>{this.props.event.title}</Card.Header>
          <Card.Meta>{this.props.event.title}</Card.Meta>
          <Card.Description>Um restaurante muito chique e caro</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='money bill alternate' />
            10 bolsasDeCocos
          </a>
        </Card.Content>
      </Card>
    )

  }


}

export default MyCard;
