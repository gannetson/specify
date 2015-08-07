import DS from 'ember-data';

export default DS.Model.extend({
    farm: DS.attr('string'),
    isfamily: DS.attr('boolean'),
    isfriend: DS.attr('boolean'),
    ispublic: DS.attr('boolean'),
    owner: DS.attr('string'),
    secret: DS.attr('string'),
    server: DS.attr('string'),
    title: DS.attr('string'),
    displaySize: 't', // (m)edium (s)mall (t)humbnail z(ozo medium) b(ig)

    imageUrlSmall: function(){
        return this.imageUrl('s');
    }.property('id'),

    imageUrlMedium: function(){
        return this.imageUrl('m');
    }.property('id'),

    imageUrlLarge: function(){
        return this.imageUrl('b');
    }.property('id'),


    imageUrl: function(size){
        return "https://farm" + this.get('farm') + ".staticflickr.com/" + this.get('server') + "/" +
            this.get('id') + "_" + this.get('secret') + "_" + size + ".jpg";
    }
});
