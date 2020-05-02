import React from 'react';
import PropTypes from 'prop-types';

import { Element } from 'react-scroll';

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
    Icon
} from 'semantic-ui-react';

import DesktopContainer from './containers/DesktopContainer';
import MobileContainer from './containers/MobileContainer';

import logo from '../../assets/logos/navbar-logo.png';
import profilePic from '../../assets/images/profile-picture.jpg';
import { links } from '../../defaults';
import { handleScrollTo } from '../../utils/responsive';
import rsaProjectImage from '../../assets/images/rsa-encryption-project.png';
import usersWikiImage from '../../assets/images/users-wiki-project.png';
import hackwitusImage from '../../assets/images/apply-witus-project.png';

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const Home = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '2em 0em' }} vertical>
            <Element name='about-me'>
                <Grid style={{ padding: '10em 0em' }} stackable>
                    <Grid.Row centered>
                        <Grid.Column width={8}>
                            <Segment>
                                <Header as='h1' style={{ textAlign: "center" }}>Here's All About Me!</Header>
                                <div style={{ fontSize: "1.4em" }}>
                                    <p>
                                        I'm Jack Tobin, an amateur software engineer and React enthusiast <span role='img' aria-label='react-emoji'>⚛️</span>.
                                        I'm currently working in NYC as a junior software developer, but I'm always looking for new opportunities.
                                        Some would describe me as "intelligent" and "eccentric", but most would say "friendly" and "genuine" <span role='img' aria-label='hand-emoji'>🙋‍♂️</span>.
                                        I'm always ready for new experiences and connecting with different people.
                                    </p>
                                    <p>
                                        If you like what you've seen so far, you can click on the button below or
                                        scroll down to view some of my finest projects/work.
                                    </p>
                                </div>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Image src={profilePic} rounded fluid />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column width={4}>
                            <Button.Group
                                fluid
                                size='huge'
                                buttons={[
                                    <Button icon onClick={() => handleScrollTo('projects')}>
                                        <Icon name='angle double down' />
                                    </Button>,
                                    <Button onClick={() => handleScrollTo('projects')}>View My Projects</Button>,
                                    <Button icon onClick={() => handleScrollTo('projects')}>
                                        <Icon name='angle double down' />
                                    </Button>
                                ]}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Element>
        </Segment>
        <Segment vertical>
            <Element name='projects'>
                <Grid stackable>
                    <Grid.Row style={{ padding: '2em 4em 2em 4em' }} centered>
                        <Grid.Column>
                            <Segment>
                                <Header as='h1' style={{ textAlign: "center" }}>My Projects</Header>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered style={{padding: '0em 4em 4em 4em'}}>
                        <Grid.Column width={6}>
                            <Image src={hackwitusImage} rounded />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment>
                                <Header as='h2' style={{ textAlign: "center" }}>ApplyWITus - Hackathon</Header>
                                <div style={{ fontSize: "1.2em" }}>
                                    <p>
                                        This is a full-stack web application built at the 
                                        <a href="https://hackwit.us/" target="_blank">HackWITus Hackathon 2019</a>.
                                        The purpose of this app is to automate job applications for it's users using Selenium WebDriver.
                                        This application uses Docker, Node.js, and Material UI.
                                    </p>
                                    <p>
                                        View the source <a href={links.hackwitusSource} target="_blank">here</a>
                                    </p>
                                </div>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered style={{padding: '0em 4em 4em 4em'}}>
                        <Grid.Column width={6}>
                            <Image src={rsaProjectImage} rounded />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment>
                                <Header as='h2' style={{ textAlign: "center" }}>RSA Encryption</Header>
                                <div style={{ fontSize: "1.2em" }}>
                                    <p>
                                        This is a web app that I built using React and Semantic UI
                                        to showcase a simple usage of the RSA encryption method.
                                        This was made for a group project for a cryptography class.
                                        The RSA cryptosystem is one of the first public-key cryptosystems 
                                        and is widely used for secure data transmission (<a href={links.rsaWiki}>wikipedia</a>).
                                    </p>
                                    <p>
                                        View a live demo <a href={links.rsaDemo} target="_blank">here</a><br />
                                        or View the source <a href={links.rsaSource} target="_blank">here</a>
                                    </p>
                                </div>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered style={{padding: '0em 4em 4em 4em'}}>
                        <Grid.Column width={6}>
                            <Image src={usersWikiImage} rounded />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment>
                                <Header as='h2' style={{ textAlign: "center" }}>Users Wiki</Header>
                                <div style={{ fontSize: "1.2em" }}>
                                    <p>
                                        This is a web application built using React that uses a third-party API 
                                        to pull several random users to load a dashboard page. The home page 
                                        features a working search bar to filter the list of Users currently being shown.
                                    </p>
                                    <p>
                                        View a live demo <a href={links.usersWikiDemo} target="_blank">here</a><br />
                                        or View the source <a href={links.usersWikiSource} target="_blank">here</a>
                                    </p>
                                </div>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Element>
        </Segment>
        <Segment inverted style={{ margin: '2em 0em 0em', padding: '3em 0em' }} vertical>
            <Container textAlign='center'>

                <Divider inverted section />
                <Image src={logo} centered size='tiny' />
                <List horizontal inverted divided link size='large'>
                    <List.Item as='a' href={links.github} target="_blank">
                        <Icon link size='large' name='github' />
                    </List.Item>
                    <List.Item as='a' href={links.linkedin} target="_blank">
                        <Icon link size='large' name='linkedin' />
                    </List.Item>
                    <List.Item as='a' href={links.twitter} target="_blank">
                        <Icon link size='large' name='twitter' />
                    </List.Item>
                    <List.Item as='a' href='/contact'>
                        <Icon link size='large' name='mail' />
                    </List.Item>
                </List>
            </Container>
        </Segment>
    </ResponsiveContainer>
)

export default Home;