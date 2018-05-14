const axios = require("axios");
const router = require("express").Router();

// router.get("/searchJobs", (req, res) => {
//   axios
//     .get("https://jobs.github.com/positions.json?description=node")
//     .then(({ data: { results } }) => {res.json(results);
//         console.log('res', res);})
//     .catch(err => res.status(422).json(err));
// });

router.get("/searchJobs", (req, res) => {
    axios
      .get("https://authenticjobs.com/api/?api_key=7aa3eac14c96fe5c4fe58dc504d956e0&method=aj.jobs.search&keywords=Node&format=json", { params: req.query })
      .then(({ data: { listings } }) => {
          res.json(listings);
          console.log("id : " + listings.listing[0].id);
          console.log("title : " + listings.listing[0].title);
          console.log("desc : " + listings.listing[0].description);
          console.log("post_date : " + listings.listing[0].post_date);
          console.log("company_name : " + listings.listing[0].company.name);
          console.log("city : " + listings.listing[0].company.location.city);
          console.log("state : " + listings.listing[0].company.location.state);    
          console.log("keywords : " + listings.listing[0].keywords);
          console.log("apply url : " + listings.listing[0].apply_url);
          console.log("url : " + listings.listing[0].url);
      })
      .catch(err => res.status(422).json(err));
  });


  
module.exports = router;
