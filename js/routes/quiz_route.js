App.QuizRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('question');
    }
});

