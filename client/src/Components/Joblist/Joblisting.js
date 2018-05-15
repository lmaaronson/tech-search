import React from 'react';
import { Link } from "react-router-dom";
import Jobdetail from '../Jobdetail';

// export const Joblisting = props => (
//     <li className="list-group-item">
//         {props.children}
//     </li>
// );

export const Joblisting = props => (
    <li className="list-group-item">
        {/* Modal Trigger
        <a className="jobtitle modal-trigger" href="#modal1">Full Stack Web Developer</a> */}
        <a className="jobtitle modal-trigger" href="#modal1">Full Stack Web Developer</a>
        {/* <Link to={"/books/" + book._id}>
            <strong>
                {book.title} by {book.author}
            </strong>
        </Link> */}
        {/* <Link to={"#modal1"} className="jobtitle modal-trigger" >
            <strong>
            Full Stack Web Developer
            </strong>
        </Link> */}
        <p className="postdate">Jan 1</p>
        <p className="employer">Company Name</p>
        <p className="location">City in MN</p>
        <p className="brief">Brief summary intro to job description, if available. Maybe first 1-3 lines of full description</p>
        <select>
            <option value="apply">Apply</option>
            <option value="savejob" disabled>Save</option>
            <option value="dumpjob">Delete</option>
            <option value="audi">Audi</option>
        </select>
        {/* <button className="seejob">View Job Details</button> */}
        <Jobdetail />
    </li>
);