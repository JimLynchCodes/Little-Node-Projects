(function() {
  'use strict';

  angular
    .module('materialFun')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
