define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/project.html',
    'text!templates/console.html'
], function($, _, Backbone, projectTemplate, consoleTemplate) {
    return Backbone.View.extend({

        tagName: "li",

        template: _.template(projectTemplate),

        events: {
            'click a': 'loadProject'
        },

        initialize: function() {
            //this.model.on('change', this.render);
            this.model.on('destroy', this.unrender);
        },

        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        },

        loadProject: function() {
            this.$el.parent().children()
                  .removeClass("active")
                .end().end()
                  .addClass("active");

            var consoleTemp = _.template(consoleTemplate);
            $("#console").html( consoleTemp( this.model.toJSON() ) );
            document.title = this.model.get("name");
            $(window).resize();
        },

        unrender: function() {
            this.$el.remove();
        },

        remove: function() {
            this.model.destroy();
        }

    });
});