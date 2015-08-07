import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    // Flickr
    host: 'https://api.flickr.com/',
    namespace: 'services/rest/',


    buildURL: function(modelName, id, snapshot, requestType, params) {
        var query = {
            method: 'flickr.photos.search',
            api_key: '6127bf07dfd7ce61d3b3d9b3f96a0cf2',
            text: params.search,
            format: 'json',
            nojsoncallback: '1'

        }
        return this.host + this.namespace + '?' + jQuery.param(query);
    }
});
