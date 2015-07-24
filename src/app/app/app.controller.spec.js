(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('mpy'));

    it('should do something', inject(function ($controller) {
      var App = $controller('AppController');

      expect(true).toBeTruthy();
    }));
  });
})();
