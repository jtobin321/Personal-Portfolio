import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import logo from '../logos/waving_hand_emoji.png';

import {
    Container,
    Header,
    Image,
  } from 'semantic-ui-react'

const Home = (props) => {
    return (
        <div>
            <NavBar />
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Jack Tobin - Software Engineer</Header>
                <div style={{fontSize: "20px"}}>
                <p>
                    Hi There<Image size='mini' src={logo} floated="left" />
                </p>
                
                <p>I'm glad that you have decided to visit, quite possibly, one of the best portfolios that you will ever look at.</p>
                </div>
            </Container>
                    <Footer />
        </div>
    );
}

export default Home;