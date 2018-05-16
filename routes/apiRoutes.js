const axios = require("axios");
const router = require("express").Router();

router.get("/searchJobs", (req, res) => {
    //console.log(" Server side Query::::: ", req.query);
    axios
      .get(`https://authenticjobs.com/api/?api_key=7aa3eac14c96fe5c4fe58dc504d956e0&method=aj.jobs.search&keywords=${req.query.q}&format=json`)
      .then(({ data: { listings } }) => {
          //console.log("response ::: ", listings);
          res.send(listings);
      })
      .catch(err => res.status(422).json(err));
  });
  // Save job
router.post("/searchJobs/save/:id", function (req, res) {
    // Use the article id to find and update its saved boolean
    Job.findOneAndUpdate({ "_id": req.params.id }, { "saved": true })
      // Execute the above query
      .exec(function (err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        else {
          // Or send the document to the browser
          res.send(doc);
        }
      });
  });
  // Create a new Task
router.post("/Tasks/save/:id", function (req, res) {
    // Create a new Task and pass the req.body to the entry
    var newTask = new Task({
      body: req.body.text,
      article: req.params.id
    });
    console.log(req.body)
    // And save the new Task the db
    newTask.save(function (error, Task) {
      // Log any errors
      if (error) {
        console.log(error);
      }
      // Otherwise
      else {
        // Use the article id to find and update it's Tasks
        Article.findOneAndUpdate({ "_id": req.params.id }, { $push: { "Tasks": Task } })
          // Execute the above query
          .exec(function (err) {
            // Log any errors
            if (err) {
              console.log(err);
              res.send(err);
            }
            else {
              // Or send the Task to the browser
              res.send(Task);
            }
          });
      }
    });
  });
  // Delete a Task
router.delete("/Tasks/delete/:Task_id/:article_id", function (req, res) {
    // Use the Task id to find and delete it
    Task.findOneAndRemove({ "_id": req.params.Task_id }, function (err) {
      // Log any errors
      if (err) {
        console.log(err);
        res.send(err);
      }
      else {
        Job.findOneAndUpdate({ "_id": req.params.Job_id }, { $pull: { "Tasks": req.params.Task_id } })
          // Execute the above query
          .exec(function (err) {
            // Log any errors
            if (err) {
              console.log(err);
              res.send(err);
            }
            else {
              // Or send the Task to the browser
              res.send("Task Deleted");
            }
          });
      }
  });
})


  
module.exports = router;
