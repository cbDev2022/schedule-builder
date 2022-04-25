import React, { useState } from 'react';
import Modal from '../modal';

function AccountNumber() {
    const [formState, setFormState] = useState({ account: '' });
    const { account } = formState;
    const [openModal, setOpenModal] = useState(false);
    
    // Sync State/Handle Change
    function handleChange(e) {
        setFormState({...formState, account: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <form id="account-form" onSubmit={handleSubmit}>
                <div>
                    <input placeholder="Enter Account Number" type="text" defaultValue={ account } onChange={handleChange} name="account"/>
                </div>

                <button 
                className="openModalBtn" 
                onClick={() => {
                    setOpenModal(true);
                }} 
                type="submit">+ Create Schedule
                </button>

                    <div>
                        {openModal && <Modal closeModal={setOpenModal}/>}
                    </div>

            </form>
        </section>
    );
}

export default AccountNumber;