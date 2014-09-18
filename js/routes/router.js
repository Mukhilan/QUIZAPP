App.Router.map(function(){
    this.resource('quiz' ,{ path: '/' }),
    this.resource('question',{path : '/question/:id'});
    this.resource('resultant',{path :'/resultant'})
});