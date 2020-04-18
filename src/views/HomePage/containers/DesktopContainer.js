import React from 'react';
import { scroller } from 'react-scroll';

import {
    Button,
    Container,
    Icon,
    Image,
    Menu,
    Responsive,
    Segment,
    Visibility,
    Dropdown
} from 'semantic-ui-react';

import { getWidth } from '../../../utils/responsive';
import logo from '../../../logos/navbar-logo.png';
import { links } from '../../../defaults';

import HomePageHeading from '../heading/HomePageHeading';

const DesktopContainer = (children) => {
    const handleScrollTo = (elementName) => {
        scroller.scrollTo(elementName, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      }

    const [fixed, setFixed] = React.useState(null);

    return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility
                once={false}
                onBottomPassed={() => { setFixed(true) }}
                onBottomPassedReverse={() => { setFixed(false) }}
            >
                <Segment
                    inverted
                    textAlign='center'
                    style={{ minHeight: 600, padding: '1em 0em' }}
                    vertical
                >
                    <Menu
                        fixed={fixed ? 'top' : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                    >
                        <Container>
                            <Menu.Item active as='a'>
                                <Image size='mini' src={logo} />
                            </Menu.Item>
                            <Menu.Item as='a' onClick={() => { handleScrollTo('about-me'); }}>About Me</Menu.Item>
                            <Menu.Item as='a'>Projects</Menu.Item>
                            <Dropdown item simple text='Media'>
                                <Dropdown.Menu>
                                    <Dropdown.Item href={links.github} target="_blank">Github</Dropdown.Item>
                                    <Dropdown.Item href={links.linkedin} target="_blank">LinkedIn</Dropdown.Item>
                                    <Dropdown.Item href={links.twitter} target="_blank">Twitter</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Menu.Item position='right'>
                                <Button
                                    as='a'
                                    href="/contact"
                                    inverted={!fixed}
                                    primary={fixed}
                                    style={{ marginLeft: '0.5em' }}
                                >
                                    <Icon name='mail' />Contact Me
                                    </Button>
                                <Button
                                    as='a'
                                    inverted={!fixed}
                                    primary={fixed}
                                    style={{ marginLeft: '0.5em' }}
                                    href={links.source}
                                    target="_blank"
                                >
                                    <Icon name="github" />View Source
                                    </Button>
                            </Menu.Item>
                        </Container>
                    </Menu>
                    <HomePageHeading />
                </Segment>
            </Visibility>
            {children.children}
        </Responsive>
    )
}


export default DesktopContainer;