import React, { useState } from 'react';

function AccountNumber() {
    const [formState, setFormState] = useState({ account: '' });
    const { account } = formState;
    
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
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default AccountNumber;