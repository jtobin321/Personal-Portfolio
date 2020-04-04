import React from 'react';

import { Icon, IconSettings, Card, CardFilter, CardEmpty } from '@salesforce/design-system-react';
import { Button, Accordion, AccordionPanel, PillContainer } from '@salesforce/design-system-react';

const sampleItems = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "subscriptions": [
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '1',
            label: 'Global Crude Bundle'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '2',
            label: 'US CPP Imports Data - Daily'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '3',
            label: 'Global LNG Data - Daily'
        },
    ]
},
{
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "subscriptions": [
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '4',
            label: 'Global Crude Bundle'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '5',
            label: 'US CPP Imports Data - Daily'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '6',
            label: 'Global LNG Data - Daily'
        },
    ]
},
{
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "subscriptions": [
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '7',
            label: 'Global Crude Bundle'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '8',
            label: 'US CPP Imports Data - Daily'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '9',
            label: 'Global LNG Data - Daily'
        },
    ]
},
{
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "subscriptions": [
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '10',
            label: 'Global Crude Bundle'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '11',
            label: 'US CPP Imports Data - Daily'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '12',
            label: 'Global LNG Data - Daily'
        },
    ]
},
{
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "subscriptions": [
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '13',
            label: 'Global Crude Bundle'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '14',
            label: 'US CPP Imports Data - Daily'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '15',
            label: 'Global LNG Data - Daily'
        },
    ]
},
{
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "subscriptions": [
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '16',
            label: 'Global Crude Bundle'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '17',
            label: 'US CPP Imports Data - Daily'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '18',
            label: 'Global LNG Data - Daily'
        },
    ]
},
{
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "subscriptions": [
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '19',
            label: 'Global Crude Bundle'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '20',
            label: 'US CPP Imports Data - Daily'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '21',
            label: 'Global LNG Data - Daily'
        },
    ]
},
{
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "subscriptions": [
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '22',
            label: 'Global Crude Bundle'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '23',
            label: 'US CPP Imports Data - Daily'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '24',
            label: 'Global LNG Data - Daily'
        },
    ]
},
{
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "subscriptions": [
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '25',
            label: 'Global Crude Bundle'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '26',
            label: 'US CPP Imports Data - Daily'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '27',
            label: 'Global LNG Data - Daily'
        },
    ]
},
{
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "subscriptions": [
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '28',
            label: 'Global Crude Bundle'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '29',
            label: 'US CPP Imports Data - Daily'
        },
        {
            icon: <Icon category="standard" name="product" title="Product" />,
            id: '30',
            label: 'Global LNG Data - Daily'
        },
    ]
}
];

const CurrentSubscribers = () => {
    const [isEmpty, setIsEmpty] = React.useState(false);
    const [subscribers, setSubscribers] = React.useState(sampleItems);
    const [expandedPanel, setExpandedPanel] = React.useState(null);

    const handleFilterChange = (event) => {
        const filteredItems = sampleItems.filter((item) =>
            RegExp(event.target.value, 'i').test(item.name)
        );
        setSubscribers(filteredItems);
        setIsEmpty(filteredItems.length < 1);
    };



    return (
        <div>
            <IconSettings iconPath="/icons">
                <div className="slds-grid slds-grid_vertical">
                    <Card
                        id="ExampleCard"
                        heading={<strong>Current Subscribers</strong>}
                        empty={
                            isEmpty ? (
                                <CardEmpty heading="Nothing found" />
                            ) : null
                        }
                        headerActions={
                            <div style={{ float: "right", width: "75%" }}><CardFilter placeholder="Search..." onChange={handleFilterChange} /></div>

                        }
                    >
                        <ul style={{height: "60vh", overflow: "auto"}}>
                            {subscribers.map(subscriber => {
                                return(
                                    <li>
                                        <Card 
                                            className="slds-card_boundary"
                                            heading={<Accordion id="base-example-accordion">
                                            <AccordionPanel
                                                summary={subscriber.name}
                                                expanded={subscriber.id === expandedPanel}
                                                id={subscriber.id}
                                                key={subscriber.id}
                                                onTogglePanel={() => setExpandedPanel(subscriber.id)}
                                            >
                                                <p style={{fontSize: ".8em"}}>Email: {subscriber.email}</p>
                                                <p style={{fontSize: ".8em"}}>User Id: {subscriber.username}</p>
                                                <p style={{fontSize: ".8em"}}>Subscriptions: {
                                                    <PillContainer
                                                        id="pill-container-with-icons"
                                                        options={subscriber.subscriptions}
                                                    />
                                                }</p>
                                            </AccordionPanel>
                                </Accordion>}
                                            icon={
                                                <Icon category="standard" name="avatar" size="large" />
                                            }
                                            headerActions={
                                                subscriber.id === expandedPanel ?
                                                <Button
                                                    assistiveText={{ icon: 'edit' }}
                                                    iconCategory="utility"
                                                    iconName="edit"
                                                    iconSize="large"
                                                    iconVariant="bare"
                                                    onClick={() => {
                                                        console.log('Icon Bare Clicked');
                                                    }}
                                                    variant="icon"
                                                /> :
                                                null
                                            }
                                        >
                                        </Card>
                                    </li>
                                );
                            })}
                        </ul>
                    </Card>
                </div>
            </IconSettings>
        </div>
    );
}

export default CurrentSubscribers;