import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizePayload: function(payload) {
        return { searchResult: payload.photos.photo };
    }
});
