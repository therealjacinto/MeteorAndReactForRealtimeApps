import { Meteor } from 'meteor/meteor';
import { Links } from "../imports/collections/links";
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function() {
      return Links.find({});
  });
});

// Executed whenever a user visits with a route like 'localhost:3000/abcd'
function onRoute(req, res, next) {
    // Take the token out of the url and try to find a matching link in the Links collection
    const link = Links.findOne({ token: req.params.token });

    // If we find a link object, redirect the user to the long URL

    // If we don't find a link object, send the user to the normal React app
}

const middleware = ConnectRoute(function(router) {
    router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);