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
            'click a': 'loadProject',
            'click .delete': 'clear'
        },

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
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

        clear: function() {
            this.model.destroy();
        }

    });
});