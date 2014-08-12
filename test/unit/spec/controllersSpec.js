/** test/unit/spec/controllersSpec.js */

describe('linkCtrl', function() {
  var scope;
  var testCtrl;
  
  
  beforeEach(module('symptomTrackerApp'));
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.new();
    testCtrl = $controllr('linkCtrl', {$scope:scope});
  }));
  
  it('should create a links model and process 8 links', function() {
    expect(scope.links.length).tobe(8);
  });
});