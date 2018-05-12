import React from 'react';
import "./Dashboard.css";

const Dashboard = props =>
    <div>
        <h1>Dashboard</h1>
        <button title="search">Search</button>
        <button title="add">Add</button>
        <div>
            <a href="#wishlist">Saved Jobs </a> &nbsp;| &nbsp;<a href="#share_wishlist">Share</a>
            <div id="wishlist">
                <div id="sortlist">Sort by: &nbsp;
            <button id="datesort">Date posted</button>
                    <button id="prioritysort">Priority</button>
                    <button id="titlesort">Job Title</button>
                    <button id="employersort">Employer</button>
                </div>
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
            </div>
            <a href="appliedjobs.html">Jobs Applied for </a> &nbsp;| &nbsp; <a href="#share_appliedjobs">Share</a>
        </div >
    </div>

export default Dashboard;