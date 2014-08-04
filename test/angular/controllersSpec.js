describe('linkCtrl', function() {
  it('should create a links model and process 8 links', function() {
    var scope = {},
    linkCtrl = new linkController(scope);
    
    expect(scope.links.length).tobe(8);
  });
});