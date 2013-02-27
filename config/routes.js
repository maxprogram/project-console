module.exports = function(match, resources) {

    match('/', 'home#index');
    resources('/projects', 'project');

};