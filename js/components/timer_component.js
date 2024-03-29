App.QuestionTimerComponent = Ember.Component.extend({

    tagName:'span',
    classNames: ['statusContent'],
    ClockService: Ember.Object.extend({
        pulse: Ember.computed.oneWay('_seconds').readOnly(),
        tick: function () {
            var clock = this;
            Ember.run.later(function () {
                var seconds = clock.get('_seconds');
                if (typeof seconds === 'number') {
                    clock.set('_seconds', seconds + (1/4));
                }
            }, 250);
        }.observes('_seconds').on('init'),
        _seconds: 0
    }),
    clock:function()
    {
        this.set('timer',this.get('ClockService').create());
        return this.get('timer');
    }.property()
});
