import React from 'react';

import {
    Button,
    Image,
    Grid,
    Header,
    Form,
    Segment
} from 'semantic-ui-react';

import logo from '../../logos/navbar-logo.png';
import NavBar from '../../components/NavBar';

const options = [
    { key: 'request', text: 'Website Request', value: 'request' },
    { key: 'offer', text: 'Job Offer', value: 'offer' },
    { key: 'other', text: 'Other', value: 'other' },
]

const Contact = () => {
    const [email, setEmail] = React.useState(null);
    const [name, setName] = React.useState(null);
    const [errors, setErrors] = React.useState(null);

    const handleSubmit = () => {
        console.log(email);
    }

    return (
        <div>
        <NavBar />
        <Grid textAlign='center' style={{ height: '102.25vh', backgroundColor: "#1b1c1d" }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 700 }}>
                <Form size='large'>
                    <Segment stacked>
                        <Header as='h2' textAlign='center'>
                            <Image src={logo} /> Contact Me</Header>

                        <Form.Group widths='equal'>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Full Name' />
                            <Form.Input
                                fluid
                                icon='mail'
                                iconPosition='left'
                                placeholder='Email'
                            />
                            <Form.Select
                                fluid
                                options={options}
                                placeholder='Subject'
                            />
                        </Form.Group>
                        <Form.TextArea label='Message' placeholder="Please describe your inquiry in detail..." />
                        <Form.Checkbox label='I am not a robot' />

                        <Button style={{ backgroundColor: "#5cc2f2" }} fluid size='large'>
                            Send
          </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
        </div>
    );
}

export default Contact;