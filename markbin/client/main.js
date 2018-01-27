import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import { Bins } from '../imports/collections/bins';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
);

Meteor.startup(() => {
    ReactDom.render(routes, document.querySelector('.render-target'));
});