jQuery(function() {
  App.Models.User = Backbone.Model.extend({
    defaults: {
      score: 0,
      name: 'john doe',
      status: 'ready'
    }
  });
  App.Models.Question = Backbone.Firebase.Model.extend({
    firebase: new Backbone.Firebase("https://gregbenner2.firebaseio.com"),
    defaults: {
      answer: '',
      question: '',
      '1': '',
      '2': '',
      '3': '',
      '4': ''
    }
  });
  return App.Collections.Questions = Backbone.Firebase.Collection.extend({
    model: App.Models.Question,
    firebase: new Backbone.Firebase("https://gregbenner2.firebaseio.com")
  });
});

//# sourceMappingURL=model.js.map
