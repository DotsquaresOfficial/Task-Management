// controllers/taskController.js
const Task = require('../models/task');

exports.getAllTasks = function(req, res) {
    Task.getAllTasks((err, tasks) => {
        if (err) throw err;
        res.json(tasks);
    });
};

exports.getTaskById = function(req, res) {
    Task.getTaskById(req.params.id, (err, task) => {
        if (err) throw err;
        res.json(task);
    });
};

exports.createTask = function(req, res) {
    const { title, description, due_date, status } = req.body;

    // Validate status
    const validStatuses = ["pending", "in-progress", "completed"];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: "Invalid status value" });
    }

    const newTask = {
        title,
        description,
        due_date,
        status
    };

    if (!newTask.title || !newTask.description || !newTask.due_date || !newTask.status) {
        return res.status(400).json({ error: "All fields are required" });
    }

    Task.createTask(newTask, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Task created successfully' });
    });
};

exports.updateTask = function(req, res) {
    const { title, description, due_date, status } = req.body;

    // Validate status
    const validStatuses = ["pending", "in-progress", "completed"];
    if (status && !validStatuses.includes(status)) {
        return res.status(400).json({ error: "Invalid status value" });
    }

    const updatedTask = {
        title,
        description,
        due_date,
        status
    };

    Task.updateTask(req.params.id, updatedTask, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Task updated successfully' });
    });
};

exports.deleteTask = function(req, res) {
    Task.deleteTask(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Task deleted successfully' });
    });
};