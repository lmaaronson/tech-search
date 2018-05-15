import axios from "axios";

// The getJobs method retrieves jobs from the server
// It accepts a "query" or term to search the jobs api for
export default {
  getJobs: function(query) {
    console.log(" Client side Query::::: ", query);
    return axios.get("/api/searchJobs", { params: { q: query } });
  }
};
