import React from "react";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";
// import ButtonTasks from "../ButtonTasks"

// ListSaved renders a bootstrap list item containing data from the authentic jobs api call
export const ListSaved = props => (
  <li className="list-group-item">
    <Container>
      <Row>
      <Col size="xs-4 sm-2">
      
    </Col>
        <Col size="xs-8 sm-9">

          Title: <h3>{props.title}</h3>
          Company Name : <h3>{props.companyName}</h3>
          
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.url}
          >
            Go to Job Link!
          </a><br></br>

          {/* <button type="button" className="btn btn-success save">Save job</button> */}
          <Button
            className="save"
            onClick={this.deleteJob}
            type="success"
            // className="input-lg"
          > 
          Remove Job
          </Button>
        </Col>
      </Row>
    </Container>
  </li>
);