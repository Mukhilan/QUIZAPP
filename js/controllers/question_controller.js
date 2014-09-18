App.QuestionController = Ember.ObjectController.extend({

    isSelected: null,
    currentIndex:1,
    pass:1,
    needs:['resultant'],

  actions: {
      nextQuestion: function(){
          var model = this.get('model'),
          currentValue=this.get('isSelected');
          this.set('isTesting',currentValue);
          if(currentValue!=undefined){
              this.send('questionEvaluate', currentValue);
              this.set("isSelected",null);
          }
          else{
              alert("Select the option");
          }
      },
      questionEvaluate: function(currentValue){
          if(this.get("controllers.resultant").get("resultValue")>100){
              alert("sorry something went wrong..You can start from the first ");
          }
          else {
              var currentIndex = this.get('currentIndex'),
                  resultValue = this.get("controllers.resultant").get("resultValue"),
                  pass = this.get('pass'), correctValue, self = this;
                  this.store.find('question', currentIndex).then(function (fulfil){
                      correctValue = fulfil.get('actualResult');
                      if (correctValue == currentValue) {
                          resultValue = resultValue + 10;
                          self.get("controllers.resultant").set("resultValue", resultValue);
                      }
                      $('.messageCheckbox').attr('checked', false);
                  },
                  function (reason) {
                      console.log("Reason:", reason);
                  });
              currentIndex = currentIndex + 1;
              this.set('currentIndex', currentIndex);
              if (currentIndex == 11){
                  this.transitionToRoute('resultant');
                  if (pass != 1) {
                      pass = pass - 1;
                      alert("you did not attend  " + pass + "  questions");
                  }
              }
              else
                  this.transitionToRoute('question', currentIndex);
          }
      },
      passQuestion : function(){
              var pass = this.get('pass'),
              currentIndex = this.get('currentIndex');
              if (currentIndex == 10) {
                  if (pass == 10)
                     this.get("controllers.resultant").set("resultValue",0);
                     this.transitionToRoute('resultant');
                     alert("you did not attend  " + pass + "  questions");
                  }
              else {
                  pass = pass + 1;
                  currentIndex = currentIndex + 1;
                  this.set('pass', pass);
                  this.set('currentIndex', currentIndex);
                  this.transitionToRoute('question', currentIndex);
                  $('.messageCheckbox').attr('checked', false);
              }
      }
}

});