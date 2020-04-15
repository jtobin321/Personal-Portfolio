import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/HomePage/Home';
import Contact from './views/ContactPage/Contact';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;