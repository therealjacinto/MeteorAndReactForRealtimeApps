// Any JS in here is automatically ran for us

// Import the React library
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

// Create a component
const App = () => {
    return (
        <div>
            <ImageList/>
        </div>
    );
};

// Render this component to the screen
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
        .then(response => console.log(response));
});
