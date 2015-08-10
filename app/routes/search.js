import Ember from 'ember';

export default Ember.Route.extend({

    model: function(params) {
        if (params.search) {
            return this.store.find('searchResult', params);
        }
    },

    setupController: function(controller, model, queryParams) {
        controller.set('search', queryParams.params.search.search);
        this._super(controller, model);
    }
});


