import axios from "axios";

// The getJobs method retrieves jobs from the server
// It accepts a "query" or term to search the jobs api for
export default {
  getJobs: function(query) {
    return axios.get("/api/searchJobs", { params: { q: query } });
  },
  addJob: function(id) {
    return axios.get("/api/addJob", { params: { q: id } });
  }
};
