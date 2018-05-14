import React from 'react';
// import Joblist from "./Joblist";
import { Joblist, Joblisting } from "../Joblist";
import { Jobdetail } from "../Jobdetail";
import "./Dashboard.css";

const Dashboard = props =>
    <div>
        <h1>Dashboard</h1>
        <button title="search">Search</button>
        <button title="add">Add</button>
        <div id="app-root">Modal root should be here</div>
        <div>
            <a href="#wishlist">Saved Jobs </a> &nbsp;| &nbsp;<a href="#share_wishlist">Share</a>
            <div id="wishlist">
                <div id="sortlist">Sort by: &nbsp;
            <button id="datesort">Date posted</button>
                    <button id="prioritysort">Priority</button>
                    <button id="titlesort">Job Title</button>
                    <button id="employersort">Employer</button>
                </div>
                <Joblist>
                    <Joblisting></Joblisting>
                </Joblist>
                <Joblist>
                    <Joblisting></Joblisting>
                </Joblist>
                <Joblist>
                    <Joblisting></Joblisting>
                </Joblist>
            </div>

            <div id="modal-root"></div>

            <a href="#appliedjobs">Jobs Applied for </a> &nbsp;| &nbsp; <a href="#share_appliedjobs">Share</a>
            <div id="appliedjobs">
                <div id="sortlist">Sort by: &nbsp;
            <button id="datesort">Date posted</button>
                    <button id="prioritysort">Priority</button>
                    <button id="titlesort">Job Title</button>
                    <button id="employersort">Employer</button>
                </div>
                <Joblist>
                    <Joblisting></Joblisting>
                </Joblist>
                <Joblist>
                    <Joblisting></Joblisting>
                </Joblist>
            </div>
        </div >
    </div>

export default Dashboard;