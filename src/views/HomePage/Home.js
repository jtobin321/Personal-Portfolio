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
                                        My name is Jack Tobin. I was borned and raised in a very small town called Bogota, NJ.
                                        In my free time I like to make websites and go for runs. I'm always looking for innovaitve
                                        creative experiences and connecting with new people.
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
                    <Grid.Row centered style={{ marginBottom: '8em' }}>
                        <Grid.Column width={4}>
                            <Button.Group
                                fluid
                                size='huge'
                                buttons={[
                                    <Button icon>
                                        <Icon name='angle double down' />
                                    </Button>,
                                    <Button>View My Projects</Button>,
                                    <Button icon>
                                        <Icon name='angle double down' />
                                    </Button>
                                ]}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Element>
            <Element name="projects">
                <Grid style={{ padding: '10em 0em' }} stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
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