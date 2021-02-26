import React from 'react';
import { Container, Row } from 'react-bootstrap';

const ProjectHead = () => {
    return (
        <Container>
            <Row style={{justifyContent:"center"}}>
            <h4 className="text-center">Recent Projects</h4>
            </Row>
        </Container>
    );
}

export default ProjectHead;
