import React, {Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


class MyCard extends Component {


  render() {
    return (
      <Card >
        <Image src='https://media-cdn.tripadvisor.com/media/photo-s/0e/52/e4/d4/restauran.jpg' />
        <Card.Content>
          <Card.Header>Restaurante</Card.Header>
          <Card.Meta>Em Campina Grande</Card.Meta>
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
