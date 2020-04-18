import React from 'react';
import { createBrowserHistory } from "history";
import { 
    BrowserRouter, 
    Route, 
    Switch 
} from 'react-router-dom';

import Home from './views/HomePage/Home';
import Contact from './views/ContactPage/Contact';

const history = createBrowserHistory();

const App = () => {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;