define([
    'jquery',
    'underscore',
    'backbone',
    'views/projects'
], function($, _, Backbone, ProjectsView) {
    return Backbone.View.extend({

        el: $(window),

        events: {
            'resize': 'resize'
        },

        initialize: function() {
            new ProjectsView();
            var _this = this;
            $(function(){ _this.resize(); });
        },

        resize: function() {
            var height = this.$el.height(),
                width = this.$el.width(),
                topRow = 300;

            $("#console").height(height).width(width);
            $("#panel").height(height);
            $("#frameOne").height(topRow).width(width);
            $("#frameTwo").height(height-topRow).width(width*0.65);
            $("#frameThree").height(height-topRow).width(width*0.35);
        }

    });
});