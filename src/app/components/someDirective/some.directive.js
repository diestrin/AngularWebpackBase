class SomeController {
  constructor () {
    'ngInject';
  }
}

class SomeDirective {
  constructor () {
    'ngInject';

    let template = require('./some.jade');
    require('./navbar.scss');

    let directive = {
      restrict: 'E',
      template: template(),
      scope: {

      },
      controller: NavbarController,
      controllerAs: 'Nav',
      bindToController: true
    };

    return directive;
  }
}

export default () => new SomeDirective();
