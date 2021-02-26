import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Form, Button, Col } from 'react-bootstrap';
import { signupUser } from '../actions/authActions';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state);
        this.setState({
            username: "",
            email: "",
            password: "",
        })
    }


    render() {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Signup Here</h1>
                <Container style={{ padding: "1rem", marginTop: "2rem", marginBottom: "4rem", boxShadow: "0px 10px 100px 0px rgba(0,0,0,0.2)", borderRadius: "1rem" }}>
                    <Form style={{ textAlign: "center", margin: "3rem 0rem", }} onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="username">
                                <Form.Label style={{ fontWeight: "bold" }}>Username</Form.Label>
                                <Form.Control required type="username" value={this.state.username} placeholder="Enter name" name="username" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="email">
                            <Form.Label style={{ fontWeight: "bold" }}>Email address</Form.Label>
                            <Form.Control required value={this.state.email} rows={4} name="email" placeholder="Enter email" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="password">
                                <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                                <Form.Control required type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>

                        <Button style={{ marginTop: "1rem", borderRadius: "5rem" }} variant="outline-primary" type="submit">
                            Signup
                        </Button>
                    </Form>
                </Container>
            </>
        );
    }
}

const mapDispatchToProps = {
    signup: signupUser
};


export default connect(null, mapDispatchToProps)(Signup);