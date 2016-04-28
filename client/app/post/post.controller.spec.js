'use strict';

describe('Component: PostComponent', function () {

  // load the controller's module
  beforeEach(module('yoHackerNewsApp'));

  var PostComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PostComponent = $componentController('PostComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
