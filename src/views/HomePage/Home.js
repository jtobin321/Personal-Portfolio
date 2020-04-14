import PropTypes from 'prop-types';
import React, { Component } from 'react';

import profilePicture from '../../images/profile-picture.jpg';
import handEmoji from '../../logos/waving_hand_emoji.png';
import logo from '../../logos/navbar-logo.png';
import fullLogo from '../../logos/full-logo.png';

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Dropdown
} from 'semantic-ui-react';

const getWidth = () => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
}

const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='Jack Tobin'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '.5em' : '1em',
            }}
        />
        <Header
            as='h2'
            content={<div><p>Hi there!<Image src={handEmoji} size="mini" inline={true} style={{marginLeft: "1.2em"}} /></p><p>I'm a <strong>Software Engineer</strong> developing modern applications and solutions from NYC.</p></div>}
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        <Button primary size='huge'>
            Learn More About Me
      <Icon name='right arrow' />
        </Button>
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
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
                                <Menu.Item as='a'>About Me</Menu.Item>
                                <Menu.Item as='a'>Projects</Menu.Item>
                                <Dropdown item simple text='Media'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="https://github.com/jtobin321" target="_blank">Github</Dropdown.Item>
                                        <Dropdown.Item href="https://www.linkedin.com/in/jack-tobin/" target="_blank">LinkedIn</Dropdown.Item>
                                        <Dropdown.Item href="https://twitter.com/__jack_tobin__" target="_blank">Twitter</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        <Icon name='mail' />
                                        Contact Me
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }} href="https://github.com/jtobin321/personal-portfolio" target="_blank">
                        <Icon name="github" />
                                        View Source
                  </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

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
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item as='a' active>
                        Home
          </Menu.Item>
                    <Menu.Item as='a' href="#">Projects</Menu.Item>
                    <Menu.Item as='a' href="#">Resume</Menu.Item>
                    <Menu.Item as='a' href="#">Contact Me</Menu.Item>
                    <Menu.Item as='a' href="https://github.com/jtobin321" target="_blank">Github</Menu.Item>
                    <Menu.Item as='a' href="https://linkedin.com/in/jack-tobin" target="_blank">LinkedIn</Menu.Item>
                    <Menu.Item as='a' href="https://twitter.com/__jack_tobin__" target="_blank">Twitter</Menu.Item>
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
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted>
                                        <Icon name='mail' />
                                        Contact Me
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }} href="https://github.com/jtobin321/personal-portfolio" target="_blank">
                        <Icon name="github" />
                                        View Source
                  </Button>
                                </Menu.Item>
                                
                            </Menu>
                        </Container>
                        <HomepageHeading mobile />
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Responsive>
        )
    }
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
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            We Help Companies and Companions
            </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            We can give your company superpowers to do things that they never thought possible.
                            Let us delight your customers and empower your needs... through pure data analytics.
            </p>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            We Make Bananas That Can Dance
            </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                            bioengineered.
            </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Check Them Out</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            "What a Company"
            </Header>
                        <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            "I shouldn't have gone with their competitor."
            </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            <Image avatar src='/images/avatar/large/nan.jpg' />
                            <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Breaking The Grid, Grabs Your Attention
        </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Instead of focusing on content creation and hard work, we have learned how to master the
                    art of doing nothing by providing massive amounts of whitespace and generic content that
                    can seem massive, monolithic and worth your attention.
        </p>
                <Button as='a' size='large'>
                    Read More
        </Button>

                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <a href='#'>Case Studies</a>
                </Divider>

                <Header as='h3' style={{ fontSize: '2em' }}>
                    Did We Tell You About Our Bananas?
        </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                    it's really true. It took years of gene splicing and combinatory DNA research, but our
                    bananas can really dance.
        </p>
                <Button as='a' size='large'>
                    I'm Still Quite Interested
        </Button>
            </Container>
        </Segment>

        <Segment inverted style={{ margin: '2em 0em 0em', padding: '3em 0em' }} vertical>
            <Container textAlign='center'>
                
                <Divider inverted section />
                <Image src={logo} centered size='tiny' />
                <List horizontal inverted divided link size='small'>
                    <List.Item>
                        Created by Jack Tobin
              </List.Item>
              <List.Item as='a' href='#'>
                        Github
              </List.Item>
              <List.Item as='a' href='#'>
                        LinedIn
              </List.Item>
              <List.Item as='a' href='#'>
                        Twitter
              </List.Item>
              <List.Item as='a' href='#'>
                        Contact Me
              </List.Item>
                </List>
            </Container>
        </Segment>
    </ResponsiveContainer>
)

export default Home;