import React from "react";
import AddBtn from "../AddBtn";
import RemoveBtn from "../RemoveBtn";
import { Container, Row, Col } from "../Grid"

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
                    <AddBtn onClick={props.add} />
                </Col>
            </Row>
        </Container>
    </li>
);