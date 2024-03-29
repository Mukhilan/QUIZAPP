window.App = Ember.Application.create();

App.ApplicationStore = DS.Store.extend({
    adapter: DS.FixtureAdapter
});

App.ApplicationAdapter = DS.FixtureAdapter.extend({
    simulateRemoteResponse: false,

    queryFixtures: function(records, query, type) {
        return records.filter(function(record) {
            for (var key in query) {
                if (!query.hasOwnProperty(key)) {
                    continue;
                }
                var value = query[key],
                    recordValue = record[key];

                if (recordValue instanceof Object && recordValue.get) {
                    if (recordValue.get("id") != value) {
                        return false;
                    }
                } else if (record[key] != value) {
                    return false;
                }
            }
            return true;
        });
    }
});