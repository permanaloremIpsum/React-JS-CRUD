import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Link
  } from "react-router-dom";
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const PageComp = () => {
    return (
        <Row className="mb-2">
            <Col>
            <Link to={"/"}>
                <Button size="sm" color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back
                </Button>
            </Link>
            </Col>
        </Row>
    )
}

export default PageComp
