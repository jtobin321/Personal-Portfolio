import React from 'react';
import { scroller } from 'react-scroll';
import PropTypes from 'prop-types';

import {
    Responsive,
    Sidebar,
    Menu,
    Segment,
    Container,
    Icon,
    Button,
    Visibility,
    Dropdown
} from 'semantic-ui-react';

import HomePageHeading from '../heading/HomePageHeading';

import { getWidth } from '../../../utils/responsive';
import { links } from '../../../defaults';

HomePageHeading.propTypes = {
    mobile: PropTypes.bool,
}

const MobileContainer = (children) => {
    const [fixed, setFixed] = React.useState(null);

    return (
        <Responsive
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}
        >
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
                        size='massive'
                        borderless={true}
                    >
                        <Container>
                            <Menu.Item >
                            <Dropdown
                                trigger={<Icon name='sidebar'/>}
                                icon={null}
                            >
                                <Dropdown.Menu>
                <Menu.Item as='a' href="/resume" ><Icon name="address card outline"/>Resume</Menu.Item>
                <Menu.Item as='a' href="/contact"><Icon name="mail outline"/>Contact Me</Menu.Item>
                <Menu.Item as='a' href={links.github} target="_blank"><Icon name="github square"/>Github</Menu.Item>
                <Menu.Item as='a' href={links.linkedin} target="_blank"><Icon name="linkedin"/>LinkedIn</Menu.Item>
                <Menu.Item as='a' href={links.twitter} target="_blank"><Icon name="twitter square"/>Twitter</Menu.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </Menu.Item>
                            <Menu.Item position='right'>
                                <Icon link name='mail' style={{paddingRight: "1.5em"}}/>
                                <Icon link name="github" />
                                </Menu.Item>
                        </Container>
                    </Menu>
                    <HomePageHeading />
                </Segment>
            </Visibility>
            {children.children}
            {/* <Sidebar
                as={Menu}
                animation='push'
                inverted
                onHide={() => { setSidebarOpened(false) }}
                vertical
                visible={sidebarOpened}
            >
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a' href="#">Resume</Menu.Item>
                <Menu.Item as='a' href="/">Contact Me</Menu.Item>
                <Menu.Item as='a' href={links.github} target="_blank">Github</Menu.Item>
                <Menu.Item as='a' href={links.linkedin} target="_blank">LinkedIn</Menu.Item>
                <Menu.Item as='a' href={links.twitter} target="_blank">Twitter</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment
                    inverted
                    textAlign='center'
                    style={{ minHeight: 350, padding: '1em 0em' }}
                    vertical
                >
                    <Container>
                        <Menu inverted pointing secondary size='large'>
                            <Menu.Item onClick={() => { setSidebarOpened(true) }}>
                                <Icon name='sidebar' />
                            </Menu.Item>
                            <Menu.Item position='right'>
                                <Button as='a' href="/contact" inverted><Icon name='mail' />Contact Me</Button>
                                <Button 
                                    as='a' 
                                    inverted 
                                    style={{ marginLeft: '0.5em' }} 
                                    href={links.source} 
                                    target="_blank">
                                    <Icon name="github" />View Source
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </Container>
                    <HomePageHeading mobile />
                </Segment>
                {children.children}
            </Sidebar.Pusher> */}
        </Responsive>
    )
}

export default MobileContainer;