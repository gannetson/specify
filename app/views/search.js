import Ember from 'ember';

export default Ember.View.extend({
    didInsertElement: function(){
        // This breaks the ember elements... :-s
        // this.$(document).foundation('clearing', 'reflow');
    },

});
