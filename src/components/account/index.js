import React, { useState } from 'react';
import Modal from '../modal';

function AccountNumber() {
    const [formState, setFormState] = useState({ account: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { account } = formState;
    const [openModal, setOpenModal] = useState(false);
    
    // Sync State/Handle Change

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (!e.target.value.length) {
                setErrorMessage('Account number is required.');
            } else {
                setErrorMessage('');
            }
    };

    return (
        <section>

                
            <form id="account-form" onSubmit={handleSubmit}>
                <div>
                    <input placeholder="Enter Account Number" type="text" name="account" defaultValue={account} onBlur={handleChange} required />
                </div>

                <button  
                onClick={() => {
                    if(errorMessage) {
                        setOpenModal(false);
                    } else {
                        setOpenModal(true);
                    }
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