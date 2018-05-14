import React from 'react';

// export const Joblisting = props => (
//     <li className="list-group-item">
//         {props.children}
//     </li>
// );

export const Joblisting = props => (
    <li className="list-group-item">
        <p className="title">Job Title</p>
        <p className="postdate">Jan 1</p>
        <p className="employer">Company Name</p>
        <p className="location">City in MN</p>
        <p className="brief">Brief summary intro to job description, if available. Maybe first 1-3 lines of full description</p>
        <button className="seejob">View Job Details</button>
        <select>
            <option value="apply">Apply</option>
            <option value="savejob" disabled>Save</option>
            <option value="dumpjob">Delete</option>
            <option value="audi">Audi</option>
        </select>
    </li>
);