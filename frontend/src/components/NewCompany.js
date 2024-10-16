import React, { useState } from 'react';

function NewCompany(props) {
    const { contact, companies, setCompanies } = props;
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    async function addCompany(e) {
        e.preventDefault();

        if (!name) {
            console.error('Company name is required');
            return;
        }

        try {
            const response = await fetch(`http://localhost/api/contacts/${contact.id}/companies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    address: address
                })
            });

            if (!response.ok) {
                throw new Error('Failed to add new company');
            }

            const newCompany = await response.json();
            console.log("New company added:", newCompany);
            setCompanies([...companies, newCompany]);

            // Reset form fields
            setName('');
            setAddress('');
        } catch (error) {
            console.error('Error adding new company:', error);
        }
    }

    return (
        <form onSubmit={addCompany}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Company Name"
                required
            />
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Company Address"
            />
            <button type="submit" className="button green">Add Company</button>
        </form>
    );
}

export default NewCompany;
