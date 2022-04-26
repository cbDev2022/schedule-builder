import React, { useState } from "react";
import "./modal.css";

function Modal({ closeModal }) {
    const dateList = ["January 2, 2022", "January 9, 2022", "January 16, 2022", "January 23, 2022", "January 30, 2022"];
    const [checked, setChecked] = useState([]);

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };
    
      // Generate string of checked items
      const checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
          })
        : "";
    
      // Return classes based on whether item is checked
      var isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";

    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h3>Uncheck only the weekly envelopes you want to REMOVE from the schedule:</h3>
                <div className="list-container">
                    {dateList.map((item, index) => (
                        <div key={index}>
                            <input value={item} type="checkbox" defaultChecked={true} onChange={handleCheck} />
                            <span className={isChecked(item)}>{item}</span>
                        </div>
                    ))}
                </div>
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