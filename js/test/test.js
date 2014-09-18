describe('basic testing', function(){

    beforeEach(function(){
        container = App.__container__;
    })
        it("should be a valid user name",function(){
            var nameCheck=container.lookup("controller:quiz");
            stub=sinon.stub(nameCheck,"transitionToRoute",function(){console.log("Inside 1st stub");});
            nameCheck.set('name','mukhilan');                                                                      // set your name
            nameCheck.send('getName');
            var userValue=stub.called;
            expect(userValue).to.be.true; }),

        it("Result Value should between 0 to 100",function(){
            var resultCheck=container.lookup("controller:question");
            stub=sinon.stub(resultCheck,"transitionToRoute",function(){console.log("Inside 2nd stub");})
            resultCheck.get("controllers.resultant").set("resultValue",90);
            resultCheck.send('questionEvaluate',3);
            var userValue=stub.called;
            expect(userValue).to.be.true;})

        it("question routes should between 1 to 10 ",function(){
            var routeCheck=container.lookup("controller:question");
            stub = sinon.stub(routeCheck, "transitionToRoute", function(){console.log("Inside 3rd stub");});
            routeCheck.set('currentIndex',2);                                                                      // set your route
            routeCheck.send('questionEvaluate',3);
            expect(routeCheck.get('currentIndex')).to.be.within(1,10);  }),

    afterEach(function(){
        stub.restore();
    });
});
