import React, {useState} from 'react';
import { Card, ListGroup, ListGroupItem, Row, Button, Col, Modal } from 'react-bootstrap';
import myPicture from '../image/my.jpg';
import EditPostForm from './EditPostForm';

const Post = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
        e.preventDefault();
        props.deletePost(props.userInfo.id)
    }
    return (
        <>

            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditPostForm userInfo={props.userInfo} 
                    editPost={props.editPost} 
                    closeModal={handleClose}
                    />
                </Modal.Body>
            </Modal>

            <Row>
                <Card style={{ marginTop: "4.5rem", boxShadow: "0px 10px 40px 0px rgba(0,0,0,0.2)", paddingBottom: "0.4rem", borderRadius:"1rem" }}>
                    <Card.Img variant="top" src={myPicture} style={{ height: "25rem" }} />
                    <Card.Body>
                        <Card.Title><p className="text-center">{props.userInfo.ProjectName}</p></Card.Title>
                        <Card.Text>{props.userInfo.ProjectDescription}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <Row>
                                <Col>Location: {props.userInfo.ProjectLocation}</Col>
                                <Col>Condition: {props.userInfo.Condition}</Col>
                                <Col>Date: {props.userInfo.Date}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>Posted by: {props.userInfo.Name}</ListGroupItem>
                    </ListGroup>
                    <Card.Body class="d-flex justify-content-around">
                        <Card.Link href="#" class="p-2"><Button style={{borderRadius:"5rem"}} variant="outline-primary" onClick={handleShow}>Edit Post</Button></Card.Link>
                        <Card.Link href="#" class="p-2"><Button style={{borderRadius:"5rem"}} variant="outline-danger" onClick={handleDelete}>Delete Post</Button></Card.Link>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
}

export default Post;
