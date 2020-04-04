import React from 'react';

import logo from '../logos/navbar-logo.png';

import {
    Container,
    Grid,
    Image,
    Segment,
    List,
    Header,
    Divider
} from 'semantic-ui-react'

const Footer = (props) => {
    return (
        <div>
            <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                <Container textAlign='center'>
                    <Divider inverted section />
                    <Image centered size='mini' src={logo} />
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='mailto:jtobin321@gmail.com'>
                            Contact
          </List.Item>
                        <List.Item as='a' href='https://github.com/jtobin321' target="_blank">
                            Github
          </List.Item>
                        <List.Item as='a' href='https://linkedin.com/in/jack-tobin' target="_blank">
                            LinkedIn
          </List.Item>
                    </List>
                </Container>
            </Segment>
        </div>
    );
}

export default Footer;