define([
    'jquery',
    'underscore',
    'backbone',
    'models/project'
], function($, _, Backbone, Project) {
    var Projects = Backbone.Collection.extend({

        model: Project,

        url: "/projects",

        comparator: function(project) {
            return project.get("order");
        }

    });

    return new Projects();
});