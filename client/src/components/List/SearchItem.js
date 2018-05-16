import React from "react";
import AddBtn from "../AddBtn";
import RemoveBtn from "../RemoveBtn";
import { Container, Row, Col } from "../Grid";
import "./SearchItem.css";
import Modal from "../Modal"

export const SearchItem = props => (
    <li className="list-group-item" height="100%">
        <Container>
            <Row>
                <Col size = "md-8">
                    <h3><strong>{props.title}</strong></h3>
                    <h5>{props.companyName}</h5>
                    <a href={props.url}>Link</a>
                </Col>
                <Col size = "md-4">
                    <RemoveBtn onClick={props.add} />
                    <AddBtn />
                    <div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Tasks
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">More stuff</a>
    <a class="dropdown-item" href="#">Details</a>
    <a class="dropdown-item" href="#">Add Comment</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Show More about Job
</button></a>
  </div>
</div>

<Modal />
                </Col>
            </Row>
        </Container>
    </li>
);