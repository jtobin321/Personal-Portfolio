import React from 'react';

import { 
    Container, 
    Header,
    Image,
    Button,
    Icon 
} from 'semantic-ui-react';

import { handleScrollTo } from '../../../utils/responsive';

import handEmoji from '../../../assets/images/waving-hand-emoji.png';

export const HomePageHeading = ({ mobile }) => (
    <Container text style={{ height: "100vh"}}>
        <Header
            as='h1'
            content='Jack Tobin'
            inverted
            style={{
                fontSize: mobile ? '3em' : '4em',
                fontWeight: 'normal',
                marginBottom: mobile ? '1em' : '0em',
                marginTop: '.5em',
            }}
        />
        <Header
            as='h2'
            content={
            <div><p style={{fontSize: mobile ? '1.2em' : '1em'}}>Hi there!<Image src={handEmoji} size="tiny" inline={true} style={{marginLeft: "1.2em"}} /></p><p>I'm a <strong>Software Engineer</strong> developing modern applications and solutions from NYC.</p></div>}
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
                marginBottom: mobile ? '5em' : '2em'
            }}
        />    
            <Button primary size='huge' onClick={() => { handleScrollTo('about-me') }}>
            Learn More About Me
      <Icon name='right arrow' />
        </Button>
    </Container>
)

export default HomePageHeading;