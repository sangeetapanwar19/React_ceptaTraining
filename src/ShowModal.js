import React from "react";
import {useState} from "react";
import Modal1 from "./component/Modal";


const ShowModal = () => {
    const [openModal,setOpenModal] = useState(false)
    
    return(
        <React.Fragment>
           <button onClick ={() => {setOpenModal(true);}}>
                Open Modal
            </button>
            {openModal && (<Modal1 closeModal={setOpenModal}/>) }
        </React.Fragment>
    )
}

export default ShowModal;