import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Joblist from "./Joblist";
import { Joblist, Joblisting } from "../Joblist";
import { Jobdetail } from "../Jobdetail";
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
                <Joblist>
                    <Joblisting />
                </Joblist>

                {/* {this.state.Jobs.length ? (
              <Joblist>
                {this.state.Jobs.map(Job => (
                  <Joblisting key={Job._id}>
                    <Link to={"/Jobs/" + Job._id}>
                      <strong>
                        {Job.title} by {Job.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteJob(Job._id)} />
                  </Joblisting>
                ))}
              </Joblist>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
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