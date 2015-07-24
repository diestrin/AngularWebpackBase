import {Route} from 'common/annotations/Route';

@Route({path: '/', component: 'home'})
class HomeController {
  constructor ($templateCache) {
    let template = require('./home.jade');
    $templateCache.put('./components/home/home.html', template());
  }
}

export default HomeController;
