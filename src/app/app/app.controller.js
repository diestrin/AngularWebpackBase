import {Routes} from 'common/annotations/Route';
import {$route as Home} from '../home/home.controller.js';

@Routes([Home])
class AppController {
  constructor () {

  }
}

export default AppController;
