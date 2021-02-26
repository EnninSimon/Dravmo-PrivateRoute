import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Form, Button, Col } from 'react-bootstrap';
import { editPost } from '../store/postsActions';

class EditPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: props.userInfo.Name,
            ProjectName: props.userInfo.ProjectName,
            ProjectDescription: props.userInfo.ProjectDescription,
            ProjectLocation: props.userInfo.ProjectLocation,
            Date: props.userInfo.Date,
            Condition: props.userInfo.Condition,
            Picture: props.userInfo.Picture,
            id: props.userInfo.id,
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editPost(this.state.id, this.state);
        this.setState({
            Name: "",
            ProjectName: "",
            ProjectDescription: "",
            ProjectLocation: "",
            Date: "",
            Condition: "",
            Picture: "",
        })
        this.props.closeModal();
    }


    render() {
        return (
            <Container style={{ padding: "1rem", marginTop: "2rem", marginBottom: "4rem", boxShadow: "0px 10px 100px 0px rgba(0,0,0,0.2)" }}>
                <Col>
                    <Form style={{ textAlign: "center", margin: "3rem 0rem", }} onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label style={{ fontWeight: "bold" }}>Name Of Project</Form.Label>
                                <Form.Control required type="text" value={this.state.ProjectName} placeholder="Enter project's name" name="ProjectName" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label style={{ fontWeight: "bold" }}>Your Name</Form.Label>
                                <Form.Control required type="text" value={this.state.Name} placeholder="Name of Constructor or owner" name="Name" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" value={this.state.Picture} label="Choose Project Picture" name="Picture" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ fontWeight: "bold" }}>Project Description</Form.Label>
                            <Form.Control required as="textarea" value={this.state.ProjectDescription} rows={4} name="ProjectDescription" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label style={{ fontWeight: "bold" }}>Location</Form.Label>
                                <Form.Control required name="ProjectLocation" value={this.state.ProjectLocation} onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label style={{ fontWeight: "bold" }}>Condition</Form.Label>
                                <Form.Control required as="select" defaultValue="Not Set" value={this.state.Condition} placeholder="Not set" name="Condition" onChange={this.handleChange}>
                                    <option>Not Set</option>
                                    <option>New</option>
                                    <option>Ongoing</option>
                                    <option>Completed</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label style={{ fontWeight: "bold" }}>Date</Form.Label>
                                <Form.Control required type="date" value={this.state.Date} placeholder="Date" name="Date" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>

                        <Button style={{ marginTop: "1rem", borderRadius: "5rem" }} variant="outline-primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Col>
            </Container>
        );
    }
}

const mapDispatchToProps = {
    editPost: editPost
}

export default connect(null, mapDispatchToProps)(EditPostForm);
