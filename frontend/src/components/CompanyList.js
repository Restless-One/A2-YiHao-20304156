import React, { useState, useEffect } from 'react';
import Company from './Company';
import NewCompany from './NewCompany';

function CompanyList(props) {
    const { contact } = props;
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getCompanies();
    }, [contact.id]);

    async function getCompanies() {
        try {
            const response = await fetch(`http://localhost/api/contacts/${contact.id}/companies`);
            if (!response.ok) {
                throw new Error('Failed to fetch companies');
            }
            const companiesData = await response.json();
            console.log('Fetched companies:', companiesData);
            setCompanies(companiesData);
        } catch (error) {
            console.error('Error fetching companies:', error);
        }
    }

    return (
        <div className='phone-list'>
            <h3>Company</h3>
            <NewCompany
                contact={contact}
                companies={companies}
                setCompanies={setCompanies}
            />
            <table onClick={(e) => e.stopPropagation()}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <Company
                            key={company.company_id}
                            contact={contact}
                            company={company}
                            companies={companies}
                            setCompanies={setCompanies}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CompanyList;
