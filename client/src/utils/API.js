import axios from "axios";

// The getJobs method retrieves jobs from the server
// It accepts a "query" or term to search the jobs api for
export default {
  getJobs: function(query) {
    return axios.get("/api/searchJobs", { params: { q: query } });
  },
  addJob: function(obj) {
    return axios.post("/api/searchJobs/saved", { params: obj});
  }
};
