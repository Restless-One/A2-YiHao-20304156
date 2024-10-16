import React, { useState } from 'react';

function Company(props) {
    const {company, contact, companies, setCompanies} = props;
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(company.company_name || '');
    const [newAddress, setNewAddress] = useState(company.company_address || '');

    async function deleteCompany() {
        try {
            const response = await fetch(`http://localhost/api/contacts/${contact.id}/companies/${company.company_id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                let newCompanies = companies.filter((p) => p.company_id !== company.company_id);
                setCompanies(newCompanies);
            } else {
                console.error('Failed to delete company');
            }
        } catch (error) {
            console.error('Error deleting company:', error);
        }
    }

    async function updateCompany() {
        try {
            const response = await fetch(`http://localhost/api/contacts/${contact.id}/companies/${company.company_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    company_name: newName,
                    company_address: newAddress
                })
            });

            if (response.ok) {
                const updatedCompany = {
                    ...company,
                    company_name: newName,
                    company_address: newAddress
                };
                const updatedCompanies = companies.map(c => 
                    c.company_id === company.company_id ? updatedCompany : c
                );
                setCompanies(updatedCompanies);
                setIsEditing(false);
            } else {
                console.error('Failed to update company');
            }
        } catch (error) {
            console.error('Error updating company:', error);
        }
    }

    function startEditing() {
        setIsEditing(true);
    }

    function cancelEditing() {
        setNewName(company.company_name || '');
        setNewAddress(company.company_address || '');
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <tr key={company.company_id}>
                <td>
                    <input 
                        value={newName} 
                        onChange={(e) => setNewName(e.target.value)}
                    />
                </td>
                <td>
                    <input 
                        value={newAddress} 
                        onChange={(e) => setNewAddress(e.target.value)}
                    />
                </td>
                <td>
                    <button className="button blue" onClick={updateCompany}>Save</button>
                    <button className="button red" onClick={cancelEditing}>Cancel</button>
                </td>
            </tr>
        );
    }

    return (
        <tr key={company.company_id}>
            <td>{company.company_name || ''}</td>
            <td>{company.company_address || ''}</td>
            <td>
                <button className="button blue" onClick={startEditing}>Update</button>
                <button className="button red" onClick={deleteCompany}>Delete</button>
            </td>
        </tr>
    )
}

export default Company;
