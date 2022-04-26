import React from "react";
import "./modal.css";

function Modal2() {
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
            </div>
                <div className="body">
                    <p>Would You like to add a 2nd weekly?</p>
                </div>

                <div className="footer">
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </div>
    );
}

export default Modal2;