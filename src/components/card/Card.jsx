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
        <Image src={this.props.event.image} />
        <Card.Content>
          <Card.Header>{this.props.event.title}</Card.Header>
          <Card.Meta>{this.props.event.data}</Card.Meta>
          <Card.Description>{this.props.event.description}</Card.Description>
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
