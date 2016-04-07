(function() {
  'use strict';

  angular
    .module('angularLayoutTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
