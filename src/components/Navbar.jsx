import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

class Navbarr extends Component {
    render() {
        return (
            <div>
                <Navbar style={{backgroundColor:'#CACAFE', padding:"1.5rem"}}>
                    <Navbar.Brand href="#home"><b>Dravmo</b></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">User</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navbarr;
