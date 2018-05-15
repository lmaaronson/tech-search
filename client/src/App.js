import React, { Component } from 'react';
//import Dashboard from "./Components/Dashboard";
import './App.css';
import Jumbotron from "./Components/Jumbotron";
import Nav from "./Components/Nav";
//import Search from './Components/Search';
import Input from "./Components/Input";
import Button from "./Components/Button";
import API from "./utils/API";
import { List, ListItem }  from "./Components/List";
import { Container, Row, Col } from "./Components/Grid";

class App extends Component {
  state = {
    jobs: [],
    jobSearch: ""
  };
 
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
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
        //console.log(res);
        this.setState({ jobs: res.data.listing });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="jobSearch"
                        value={this.state.jobSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Job"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
            {!this.state.jobs ? (
              <h1 className="text-center">No Jobs to Display</h1>
            ) : (
              <List>
                {this.state.jobs.map(job => {
                  return (
                    <ListItem
                      key={job.title}
                      title={job.title}
                      url={job.url}
                      keywords={job.keywords}
                      companyName={job.company.name}
                      />
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

export default App;
  