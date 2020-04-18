import React from 'react';

import {
    Responsive,
    Sidebar,
    Menu,
    Segment,
    Container,
    Icon,
    Button
} from 'semantic-ui-react';

import HomePageHeading from '../heading/HomePageHeading';

import { getWidth } from '../../../utils/responsive';
import { links } from '../../../defaults';

const MobileContainer = (children) => {
    const [sidebarOpened, setSidebarOpened] = React.useState(false);

    return (
        <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}
        >
            <Sidebar
                as={Menu}
                animation='push'
                inverted
                onHide={() => { setSidebarOpened(false) }}
                vertical
                visible={sidebarOpened}
            >
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a' href="#">Projects</Menu.Item>
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
                                <Button as='a' href="/" inverted><Icon name='mail' />Contact Me</Button>
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
            </Sidebar.Pusher>
        </Responsive>
    )
}

export default MobileContainer;