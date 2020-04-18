import React from 'react';

import { 
    Container, 
    Header,
    Image,
    Button,
    Icon 
} from 'semantic-ui-react';

import handEmoji from '../../../logos/waving_hand_emoji.png';

export const HomePageHeading = ({ mobile }) => (
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

export default HomePageHeading;