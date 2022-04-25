import React from "react";
import "./modal.css";

function Modal({ closeModal }) {
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h3>Uncheck only the weekly envelopes you want to REMOVE from the schedule:</h3>
                </div>

                <div className="body">
                    <p>Once you are finished, click "Next"</p>
                </div>

                <div className="footer">
                    <button onClick={() => closeModal(false)} id="cancelBtn">Close</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;