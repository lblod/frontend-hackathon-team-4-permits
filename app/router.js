import EmberRouter from '@ember/routing/router';
import config from 'hackathon-team-4-frontend-permits/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('citizen', function () {
    this.route('index');
    this.route('search-erfgoed');
  });
  this.route('municipality', function () {
    this.route('index');
  });
  this.route('heritage', function () {
    this.route('index');
    this.route('request', { path: '/aanvraag/:post_id' });
  });
});
