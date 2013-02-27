var Project = require('../models/Project');

// GET /projects
exports.index = function(req,res) {

    Project.find(function(err, projects) {
        if (err) throw err;
        res.json(projects);
    });

};

// POST /projects
exports.create = function(req,res) {

    // Get POST params
    var data = {
        name:       req.param('name'),
        one:        req.param('one'),
        two:        req.param('two'),
        three:      req.param('three'),
        order:      0,
        created_at: new Date(),
        updated_at: new Date()
    };

    var project = new Project(data);

    project.save(function(err,result){
        if (err) log.error(err);
        res.json(result);
    });

};

// GET /projects/:id
exports.show = function(req,res) {

    var id = req.param('id');
    Project.findById(id, function(err,project) {
        if (err) throw err;
        res.json(project);
    });

};

// PUT /projects/:id
exports.update = function(req,res) {

    var data = req.body, id = req.param('id');
    delete data.id;
    data.updated_at = new Date();
    Project.findByIdAndUpdate(id, data, function(err,result){
        if (err) throw err;
        res.json(result);
    });

};

// DELETE /projects/:id
exports.destroy = function(req,res) {

    var id = req.param('id');
    Project.findByIdAndRemove(id, function(err){
        if (err) throw err;
    });

};