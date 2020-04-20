import React from 'react';

import {
    Container,
    Dropdown,
    Image,
    Menu,
  } from 'semantic-ui-react';

  import logo from '../assets/logos/navbar-logo.png';

const NavBar = (props) => {
    return (
        <div>
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header href="/">
                        <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                        <p style={{ color: "white" }}>Jack Tobin</p>
                    </Menu.Item>
                    <Menu.Item as='a'>About Me</Menu.Item>
                    <Menu.Item as='a'>Projects</Menu.Item>
                    <Dropdown item simple text='Media'>
                        <Dropdown.Menu>
                            <Dropdown.Item href="https://github.com/jtobin321" target="_blank">Github</Dropdown.Item>
                            <Dropdown.Item href="https://www.linkedin.com/in/jack-tobin/" target="_blank">LinkedIn</Dropdown.Item>
                            <Dropdown.Item href="https://twitter.com/__jack_tobin__" target="_blank">Twitter</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Menu>
        </div>
    );
}

export default NavBar;