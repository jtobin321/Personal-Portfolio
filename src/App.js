import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Home from './views/Home';
import AboutMe from './views/AboutMe';
import Projects from './views/Projects';
import Contact from './views/Contact';

const hist = createBrowserHistory();

const App = () => {
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/" component={Home} />
                <Route exact path="/about-me" component={AboutMe} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </Router>
    );
}

export default App;