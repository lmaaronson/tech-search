import React from 'react';
import "./Joblist.css";

/* 
const Joblisting = props =>
    <div class="joblisting">
        <p class="title">Job Title  <span class="postdate">Jan 1</span></p>
        <p class="employer">Company Name <span class="location">City in MN</span></p>
        <p class="brief">Brief summary intro to job description, if available. Maybe first 1-3 lines of full description</p>
        <button class="seejob">View Job Details</button>
        <select>
            <option value="apply">Apply</option>
            <option value="savejob" disabled>Save</option>
            <option value="dumpjob">Delete</option>
            <option value="audi">Audi</option>
        </select>
    </div>

export default Joblisting;
 */

export const Joblist = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
