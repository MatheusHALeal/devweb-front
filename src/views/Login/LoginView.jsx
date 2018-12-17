import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
const Login= ({ onSubmit }) => { return (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='https://image.ibb.co/hdRb5V/Imagem1.png' /> Entre em sua conta
        </Header>
        <Form onSubmit={onSubmit}>
        <Segment>
      Email
      <Form.Input
        style={{ width: "100%" }}
        name="email"
        type="email"
        placeholder="Email"
      />
      Password
      <Form.Input
        style={{ width: "100%" }}
        name="password"
        type="password"
        placeholder="Password"
      />
    <Button color='teal' fluid size='large' type="submit">Log in</Button>
    </Segment>
  </Form>
        <Message>
          Novo? <a href='#'>Cadastre-se</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)}

export default Login;
