import EmberRouter from '@ember/routing/router';
import config from 'hackathon-team-4-frontend-permits/config/environment';
import { fallbackRoute, externalRoute } from 'ember-metis';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // other routes above
  externalRoute(this);
  fallbackRoute(this);
});
