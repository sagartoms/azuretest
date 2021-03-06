let DocumentDBClient = require('documentdb').DocumentClient;
let async = require('async');
let jsalert = require('js-alert');

function TaskList(taskModel) {
this.taskModel = taskModel;
}

TaskList.prototype = {
 showTasks: function(req, res) {
     let self = this;

     let querySpec = {
     query: 'SELECT * FROM root r WHERE r.completed=@completed',
     parameters: [
         {
         name: '@completed',
         value: false
         }
     ]
     };

     self.taskModel.find(querySpec, function(err, items) {
     if (err) {
         throw err;
     }
     console.log(items);
     res.render('index', {
         title: 'My ToDo List ',
         tasks: items
     });
     });
 },

 addTask: function(req, res) {
     let self = this;
     let item = req.body;

     self.taskModel.addItem(item, function(err) {
     if (err) {
         throw err;
     }

     res.redirect('/');
     });
 },

 completeTask: function(req, res) {
     let self = this;
     let completedTasks = Object.keys(req.body);

     async.forEach(
     completedTasks,
     function taskIterator(completedTask, callback) {
         self.taskModel.updateItem(completedTask, function(err) {
         if (err) {
             callback(err);
         } else {
             callback(null);
         }
         });
     },
     function goHome(err) {
         if (err) {
         throw err;
         } else {
         res.redirect('/');
         }
     }
     );
 },
search: function(req, res) {
     let self = this;
     let item = req.body;
     console.log(item);
     self.taskModel.searchItem(item, function(err,out) {
     if (err) {
         throw err;
     }
     //alert(out[0].name);
     //res.redirect('/');
     //console.log("--------------------");
     console.log(out);
     
     res.render('index', {
         title: 'My ToDo List ',
         tasks: out
     });
     //res.redirect('/');
     });

 }
 };

module.exports = TaskList;


