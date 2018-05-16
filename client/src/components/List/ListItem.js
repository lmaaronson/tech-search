import React from "react";
import { Container, Row, Col } from "../Grid";

// ListItem renders a bootstrap list item containing data from the authentic jobs api call
export const ListItem = props => (
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
          <button type="button" class="btn btn-success save">Save job</button>
         
        </Col>
      </Row>
    </Container>
  </li>
);
