App.QuizController = Ember.Controller.extend({
    actions: {
        getName: function(){
            var name = this.get('name'),
            letters=/^[a-zA-Z]+$/;
            console.log(name);
            if(name.match(letters)) {
                this.transitionToRoute('question', this.get('model').objectAt(0));
            }
            else if(!name )
                alert("Enter your name ");
            else
                alert("Please input alphanumeric characters only");
        }
    }
});

