import React from "react";
import '../css/modal.css';
import {Modal,Button} from "react-bootstrap";

const Modal1 = ({props}) => {
    return(
        <React.Fragment>
         {/* <div className="modalContainer" >
        <div className="modal" >
          <header className="modal_header">
            <h2 className="modal_header-title"> Modal Title </h2>
            <button className="close" onClick = {() =>{props(false)}}>
                X
            </button>
          </header>
          <main className="modal_content">
          This is Modal Content
          </main>
          <footer className="modal_footer">
            <button className="modal-close" onClick = {() =>{props(false)}}>
              Cancel
            </button>

            <button className="submit" onClick>Submit</button>
          </footer>
        </div>
        </div> */}
        <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
          <Button className="close" onClick = {() =>{props(false)}}>
                X
         </Button>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick = {() =>{props(false)}}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog> 
        </React.Fragment>
    )
}

export default Modal1;