describe("User", function() {
  it("Should be an instance of BB model", function() {
    expect(App.user instanceof Backbone.Model).toEqual(true);
  });

});