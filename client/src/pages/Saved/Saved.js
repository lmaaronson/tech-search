import React, { Component } from "react";

//import RemoveBtn from "../../Components/RemoveBtn";
import AddBtn from "../../Components/AddBtn";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem, SearchItem } from "../../Components/List";
import { Input, FormBtn } from "../../Components/Form";


class Saved extends Component {

    state = {
        jobs: [],
        jobSearch: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.getJobs(this.state.jobSearch)
            .then(res => {
                var jobs = res.data.listing
                this.setState({ jobs: jobs });
            })
            .catch(err => console.log(err));
    };

    addJob = (id) => {
        API.AddJob(id)
            .then(res => {
                //remove this listing? or update the list to remove all saved jobs?
            })
    }

    render() {
        return (
            <div>
                <br />
                <Container>
                    <Row>
                        <h1> [PROFANITIES] </h1>
                        <Col size="xs-9 sm-10">
                                            <Input
                                                name="jobSearch"
                                                value={this.state.jobSearch}
                                                onChange={this.handleInputChange}
                                                placeholder="Search For a Job"
                                            />
                                        </Col>
                                        <Col size="xs-3 sm-2">
                                            <FormBtn
                                                onClick={this.handleFormSubmit}
                                                type="success"
                                                className="input-lg">
                                                Search
                                            </FormBtn>
                                        </Col>

                    </Row>
                    <Row>
                        <Col size="md-12">
                            {!this.state.jobs ? (
                                <h1 className="text-center">No Jobs to Display</h1>
                            ) : (
                                    <List>
                                        {this.state.jobs.map(job => {
                                            return (
                                                <div>
                                                <SearchItem
                                                    key={job.id}
                                                    title={job.title}
                                                    url={job.url}
                                                    keywords={job.keywords}
                                                    companyName={job.company.name}
                                                    add={() => this.addJob(job.id)}
                                                />

</div>
                                                

                                            );
                                        })}
                                    </List>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default Saved;
