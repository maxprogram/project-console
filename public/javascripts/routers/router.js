define([
    'jquery',
    'backbone',
    'collections/projects'
], function($, Backbone, Projects) {

    var Workspace = Backbone.Router.extend({
        routes:{
            'project/:id': 'project'
        },

        project: function(id) {
            //Projects.trigger('filter');
        }
    });

    return Workspace;
});