import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Form, Button, Col } from 'react-bootstrap';
import {loginUser} from '../actions/authActions';
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.props.login(this.state.email, this.state.password);
        this.setState({
            email: "",
            password: "",
        })
    }


    render() {
        if (this.props.auth.isLoaded && !this.props.auth.isEmpty){
          return  <Redirect to="/"/>
        }
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Login Here</h1>
                <Container style={{ padding: "1rem", marginTop: "2rem", marginBottom: "4rem", boxShadow: "0px 10px 100px 0px rgba(0,0,0,0.2)", borderRadius: "1rem" }}>
                    <Form style={{ textAlign: "center", margin: "3rem 0rem", }} onSubmit={this.handleSubmit}>

                        <Form.Group controlId="email">
                            <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                            <Form.Control required value={this.state.email} rows={4} name="email" placeholder="Email" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="password">
                                <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                                <Form.Control required type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>

                        <Button style={{ marginTop: "1rem", borderRadius: "5rem" }} variant="outline-primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Container>
            </>
        );
    }
}

const mapDispatchToProps = {
    login: loginUser
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);