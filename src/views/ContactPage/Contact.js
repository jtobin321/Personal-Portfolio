import React from 'react';

import {
    Button,
    Icon,
    Grid,
    Header,
    Form,
    Segment,
    Dropdown,
    Message
} from 'semantic-ui-react';

const Contact = () => {
    const [email, setEmail] = React.useState(null);
    const [name, setName] = React.useState(null);
    const [errors, setErrors] = React.useState(null);

    const handleSubmit = () => {
        console.log(email);
    }

    return (
        <div style={{backgroundColor: "#1b1c1d", height: "100vh"}}>
        <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 700 }}>
                    <Header as='h1' color='teal' textAlign='center'>Contact Me</Header>
                    <Form size='large'>
                        <Segment stacked>
                        <Message negative visible={errors} hidden={!errors}>
                            <Message.Header>There are errors with this form</Message.Header>
                            <p>Please make sure all of the fields are filled out properly</p>
                        </Message>
                            <Form.Group widths='equal'>
                                <Form.Input fluid onChange={(event) => setEmail(event.target.value)} label="Email" placeholder="Email" />
                                <Form.Input fluid onChange={(event) => setName(event.target.value)} label="Name" placeholder="Name" />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Button color='teal' fluid onClick={handleSubmit}>Submit</Button>
                            </Form.Group>
                            <Header as='h3' textAlign='center'>Output Text</Header>
                            <Segment raised>
                                nothing
                            </Segment>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
            </div>
    );
}

export default Contact;