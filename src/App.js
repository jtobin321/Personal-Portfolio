import React from 'react';
import { createBrowserHistory } from "history";
import { 
    BrowserRouter, 
    Route, 
    Switch 
} from 'react-router-dom';

import Home from './views/HomePage/Home';
import Contact from './views/ContactPage/Contact';
import Resume from './views/ResumePage/Resume';

const history = createBrowserHistory();

const App = () => {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/resume" component={Resume} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;