import React from 'react';
import LandingPage from './landingpage';
import Art from './art';
import About from './about';
import Projects from './projects';
import Resume from './resume';

import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage}/>
        <Route path="/about" component={About}/>
        <Route path="/art" component={Art}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
)

export default Main; 