import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return (
        <h1>Hello there!</h1>
    );
};

Meteor.startup(() => {
    ReactDom.render(<App />, document.querySelector('.render-target'));
});