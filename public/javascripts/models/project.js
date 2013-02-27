define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    return Backbone.Model.extend({

        idAttribute: "_id",

        defaults: {
            name: "Project Name",
            order: 1,
            one: "one",
            two: "two"
        },

        initialize: function() {}

    });
});