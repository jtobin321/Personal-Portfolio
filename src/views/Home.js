import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import emoji from '../logos/waving_hand_emoji.png';
import logo from '../logos/full-logo.png';

import {
    Container,
    Visibility,
    Icon,
    Menu,
    Segment,
    Header,
    Grid,
    List,
    Divider,
    Image
} from 'semantic-ui-react'

const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '4em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  }
  
  const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }
  
  const overlayStyle = {
    float: 'left',
    margin: '0em 3em 1em 0em',
  }
  
  const fixedOverlayStyle = {
    ...overlayStyle,
    position: 'fixed',
    top: '80px',
    zIndex: 10,
  }
  
  const overlayMenuStyle = {
    position: 'relative',
    left: 0,
    transition: 'left 0.5s ease',
  }
  
  const fixedOverlayMenuStyle = {
    ...overlayMenuStyle,
    left: '800px',
  }
  
  const LeftImage = () => (
    <Image
      floated='left'
      size='medium'
      src='/images/wireframe/square-image.png'
      style={{ margin: '2em 2em 2em -4em' }}
    />
  )
  
  const RightImage = () => (
    <Image
      floated='right'
      size='medium'
      src='/images/wireframe/square-image.png'
      style={{ margin: '2em -4em 2em 2em' }}
    />
  )
  
  const Paragraph = () => (
    <p>
      {[
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
        'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
        'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
        'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
        'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
        'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
        'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
        'accumsan porttitor, facilisis luctus, metus',
      ].join('')}
    </p>
  )

const Home = (props) => {
    return (
        <div>
            <NavBar />
<Container text style={{marginTop: "5em"}}>
<Header centered>Jack Tobin - Personal Portfolio</Header>
          
            <Paragraph />
            <Paragraph />
          <LeftImage />

          <Paragraph />
          <RightImage />
          <Paragraph />
          <LeftImage />

          <Paragraph />
          <RightImage />
          <Paragraph />
        </Container>

            <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
                <Container textAlign='center'>
                    <Grid columns={4} divided stackable inverted>
                        <Grid.Row>
                            <Grid.Column />
                            <Grid.Column>
                                <Header inverted as='h4' content='Jack Tobin - Portfolio' />
                                <p>
                                    This portfolio web application was created with the React Javascript Library
                                    and styled with the React integration for Semantic UI.
                                    All rights reserved.
                  </p>
                            </Grid.Column>
                            <Grid.Column>
                                <Header inverted as='h4' content='Links' />
                                <List link inverted>
                                    <List.Item as='a' href="https://github.com/jtobin321" target="_blank">Github</List.Item>
                                    <List.Item as='a' href="https://linkedin.com/in/jack-tobin" target="_blank">LinkedIn</List.Item>
                                    <List.Item as='a' href="https://twitter.com/__jack_tobin__" target="_blank">Twitter</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column />
                        </Grid.Row>
                    </Grid>
                    <Divider inverted section />
                    <Image src={logo} centered size='small' />
                    <List horizontal inverted divided link size='small'>
                        <List.Item>
                            Created by Jack Tobin
              </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Me
              </List.Item>
                    </List>
                </Container>
            </Segment>
        </div>
    );
}

export default Home;