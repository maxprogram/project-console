define([
    'jquery',
    'underscore',
    'backbone',
    'collections/projects',
    'views/project',
    'common'
], function($, _, Backbone, projects, ProjectView, Common) {
    return Backbone.View.extend({

        el: $("#panel"),

        events: {
            'click #test': 'test',
            'click .switch': 'toggle',
            'click li a': 'toggle'
        },

        initialize: function() {
            this.$list = this.$('.projects');
            this.$console = $('#console');

            this.listenTo(projects, 'add reset', this.render);
            projects.fetch();
        },

        render: function() {
            var _this = this;
            this.$list.empty();
            projects.each(function(p){
                var projectView = new ProjectView({ model: p });
                _this.$list.append(projectView.render().el);
                if (Common.project == p.id) projectView.loadProject();
            });
        },

        isPanel: true,

        toggle: function() {
            var width = this.$el.width(),
                left = (this.isPanel) ? -width : 0;
            this.$el.animate({ left: left });
            this.isPanel = !this.isPanel;
        },

        test: function() {
            var id = Math.floor(Math.random()*100);
            projects.create({
                name: "Test Project " + id,
                one: "https://trello.com/board/project-map-wiki/500449a1ab3ad38b62021f2c",
                two: "https://docs.google.com/document/d/1aFhbU0bExYV7PN26vi65_D2bRLXtw7ue6fSWFeQD-IY/edit",
                three: "https://atlastory.hipchat.com/chat"
            }, {wait: true});
        }

    });
});