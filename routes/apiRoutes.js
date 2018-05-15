const axios = require("axios");
const router = require("express").Router();

router.get("/searchJobs", (req, res) => {
    //console.log(" Server side Query::::: ", req.query);
    axios
      .get(`https://authenticjobs.com/api/?api_key=7aa3eac14c96fe5c4fe58dc504d956e0&method=aj.jobs.search&keywords=${req.query.q}&format=json`)
      .then(({ data: { listings } }) => {
          //console.log("response ::: ", listings);
          res.json(listings);
      })
      .catch(err => res.status(422).json(err));
  });


  
module.exports = router;
