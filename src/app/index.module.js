// External libraries
import toastr from 'toastr';
import moment from 'moment';
import _ from 'lodash';

// Angular libraries
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngTouch from 'angular-touch';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
import ngNewRouter from 'angular-new-router/index';
import 'restangular';

// Index code
import config from './index.config';
import runBlock from './index.run';

// Controllers
import AppController from './app/app.controller';
import HomeController from './home/home.controller';

require('angular-material/angular-material.css');
require('toastr/toastr.scss');
require('./index.scss');

let dependencies = [
  ngAnimate,
  ngCookies,
  ngTouch,
  ngSanitize,
  ngMaterial,
  ngNewRouter,
  'restangular'
];

angular.module('mpy', dependencies)
.constant('toastr', toastr)
.constant('moment', moment)
.constant('_', _)

.config(config)
.run(runBlock)

.controller('AppController', AppController)
.controller('HomeController', HomeController);
