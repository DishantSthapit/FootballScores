import React from 'react';
import './NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, Form, FormControl, Button  } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="navbar-wrapper">
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand>Football Data</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/league/premierleague">Premier League</Link></Nav.Link>
                    <Nav.Link><Link to="/league/spanish">La Liga</Link></Nav.Link>
                    <Nav.Link><Link to="/league/league1">Ligue 1</Link></Nav.Link>
                    <Nav.Link><Link to="/league/italia">Seria A</Link></Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }
}

export default NavBar;