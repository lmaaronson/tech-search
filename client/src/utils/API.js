import axios from "axios";

// The getJobs method retrieves available jobs from the server
// It accepts a "query" or term to search the jobs api for
export default {
  getJobs: function (query) {
    console.log(" Client side Query::::: ", query);
    return axios.get("/api/searchJobs", { params: { q: query } });
  },

  // from solved React book app
  // Gets saved jobs
  getSavedJobs: function () {
    return axios.get("/api/savedJobs");
  },
  // Gets the saved Job with the given id
  getSavedJob: function (id) {
    return axios.get("/api/savedJobs/" + id);
  },
  // Deletes the saved Job with the given id
  deleteJob: function (id) {
    return axios.delete("/api/savedJobs/" + id);
  },
  // Saves a job to the database
  saveJob: function (jobData) {
    return axios.post("/api/savedJobs", jobData);
  }

};
