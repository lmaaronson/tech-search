
const axios = require("axios");
const router = require("express").Router();

router.get("/searchJobs", (req, res) => {
  //console.log(" Server side Query::::: ", req.query);
  axios
    .get(`https://authenticjobs.com/api/?api_key=7aa3eac14c96fe5c4fe58dc504d956e0&method=aj.jobs.search&keywords=${req.query.q}&format=json`)
    .then(({
      data: {
        listings
      }
    }) => {
      //console.log("response ::: ", listings);
      res.json(listings);
    })
    .catch(err => res.status(422).json(err));
});


// Save job
router.post("/searchJobs/saved", function (req, res) {
  // Use the article id to find and update its saved boolean
  console.log(req)
  Job.create({
      "_id": req.params.id, 
      "title": req.params.title,
      "description": req.params.description,
      "post_date": req.params.post_date,
      "company_name": req.params.company_name,
      "company_city": req.params.company_city,
      "keywords": req.params.keywords,
      "apply_url": req.params.apply_url,
      "company_url": req.params.company_url,
    }, 
    {
      "saved": true
    })
    // Execute the above query
    .exec(function (err, doc) {
      // Log any errors
      if (err) {
        console.log(err);
      } else {
        // Or send the document to the browser
        res.send(doc);
      }
    });
  });

// new comment for commit and add
// get all saved jobs job
router.get("/searchJobs/saved", function (req, res) {
  // Use the article id to find and update its saved boolean
  Job.findAll({
      "_id": req.user.id
    }, {
      "saved": true
    })
    // Execute the above query
    .exec(function (err, doc) {
      // Log any errors
      if (err) {
        console.log(err);
      } else {
        // Or send the document to the browser
        res.send(doc);
      }
    });
  });


// Create a new Task
router.post("/Tasks/:id", function (req, res) {
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
      Task.findOneAndUpdate({
          "_id": req.params.id
        }, {
          $push: {
            "Tasks": Task
          }
        })
        // Execute the above query
        .exec(function (err) {
          // Log any errors
          if (err) {
            console.log(err);
            res.send(err);
          } else {
            // Or send the Task to the browser
            res.send(Task);
          }
        });
      }
    });
  });


// Delete a Task or update a task
router.delete("/Tasks/:Task_id", function (req, res) {
      // Use the Task id to find and delete it
      Task.findOneAndRemove({
        "_id": req.params.Task_id
      }, function (err) {
        // Log any errors
        if (err) {
          console.log(err);
          res.send(err);
        }
      });
    });


      //  needs to go in a put route


      router.put("/Tasks/:Task_id", function (req, res) {
        Task.findOneAndUpdate({
            "_id": req.params.Job_id
          }, {
            $pull: {
              "Tasks": req.params.Task_id
            }
          })
          // Execute the above query
          .exec(function (err) {
            // Log any errors
            if (err) {
              console.log(err);
              res.send(err);
            } else {
              // Or send the Task to the browser
              res.send("Task Deleted");
            }
          })
      });



      module.exports = router

