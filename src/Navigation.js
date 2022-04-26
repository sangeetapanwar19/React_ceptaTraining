import React from "react";
import {Link} from 'react-router-dom';
import{Nav,Navbar} from "react-bootstrap";

const Navigation = () =>{
    return(
        <React.Fragment>
            <div className="row">
                <div className="col-12">
                    <Navbar>
                    <Nav.Link><Link to="/app" className='btn btn-outline-warning'>App</Link></Nav.Link>
                    <Nav.Link><Link to="/classcom" className='btn btn-outline-warning'>Class Com</Link></Nav.Link>
                    <Nav.Link><Link to="/todolist" className='btn btn-outline-warning'>TO Do</Link></Nav.Link>
                    <Nav.Link><Link to="/functioncom" className='btn btn-outline-warning'>Functional Comp</Link></Nav.Link>
                    <Nav.Link><Link to="/practice" className='btn btn-outline-warning'>Practice 1</Link></Nav.Link>
                    </Navbar>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navigation;