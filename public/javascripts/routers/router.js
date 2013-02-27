define([
    'jquery',
    'backbone',
    'collections/projects',
    'common'
], function($, Backbone, Projects, Common) {

    var Workspace = Backbone.Router.extend({
        routes:{
            'projects/:id': 'project'
        },

        project: function(id) {
            Common.project = id;
            //Projects.trigger('filter');
        }
    });

    return Workspace;
});