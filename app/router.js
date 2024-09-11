import EmberRouter from '@ember/routing/router';
import config from 'hackathon-team-4-frontend-permits/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
