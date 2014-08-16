/** test/unit/spec/controllersSpec.js */

describe('linkCtrl', function lcDesc () {
  var mockScope = {};
  var testCtrl;
  
  beforeEach(angular.mock.module('symptomTrackerApp'));
  beforeEach(angular.mock.inject(function beInject ($rootScope, $controller) {
    mockScope = $rootScope.$new();
    testCtrl = $controller('linkCtrl', {$scope:mockScope});
  }));
  
  it('should create a links model and process 8 links', function itLM (scope) {
    expect(mockScope.links.length).toBe(8);
  });

  it('should always be true', function itTrue () {
    expect(true).toBe(true);
  });

});
