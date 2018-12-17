import React, {Component} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import { Api } from '../../Api';

class FormEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        event: {
          title: '',
          description: '',
          date: '',
          city: '',
          image: ''
        }
    }
}

reset = () => {
  this.setState({
    event: {
      title: '',
      description: '',
      date: '',
      city: '',
      image: ''
    }
});
};

submit = () => {
  Api.post(`/event`, this.state.event).then(
    response => {
      if (this.props.newEvent) {
        this.props.newEvent(this.state.event);

      }
    }
  );
  this.reset();
};

handleInputChange = text => event => {
  this.setState({
    event: { ...this.state.event, [text]: event.target.value }
  });
};

  render() {

    return (
      <Segment inverted>
        <Form inverted>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Título' placeholder='Título' onChange={this.handleInputChange("title")} />
            <Form.Input fluid label='Descrição' placeholder='Descrição' onChange={this.handleInputChange("description")} />

          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Data' placeholder='Data' onChange={this.handleInputChange("date")} />
            <Form.Input fluid label='Cidade' placeholder='Cidade' onChange={this.handleInputChange("city")} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Imagem' placeholder='Link de uma imagem' onChange={this.handleInputChange("image")}/>
          </Form.Group>
          <Button onClick={this.submit}  as={NavLink} to='/'>Criar</Button>
        </Form>
      </Segment>


    )


  }



}
export default FormEvent
