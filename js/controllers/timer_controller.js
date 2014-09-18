Ember.Handlebars.registerBoundHelper('digital_clock', function(seconds) {
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);
    if(seconds==45)
    {
        alert("time over");
        this.get('targetObject').transitionToRoute('resultant');
    }
    var addZero = function (number) {
        return (number < 10) ? '0' + number : '' + number;
    };
    var formatHMS = function(h, m, s) {
        if (h > 0) {
            return '%@:%@:%@'.fmt(h, addZero(m), addZero(s));
        }
        return '%@:%@'.fmt(m, addZero(s));
    };
    return new Ember.Handlebars.SafeString(formatHMS(h, m, s));
});
