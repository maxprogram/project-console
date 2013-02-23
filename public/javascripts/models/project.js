define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    return Backbone.Model.extend({

        defaults: {
            name: "Project Name",
            order: 1,
            one: "one",
            two: "two"
        },

        initialize: function() {
        	if (!this.get("_id")) this.set("_id","");
        }

    });
});