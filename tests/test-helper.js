import Application from 'hackathon-team-4-frontend-permits/app';
import config from 'hackathon-team-4-frontend-permits/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
