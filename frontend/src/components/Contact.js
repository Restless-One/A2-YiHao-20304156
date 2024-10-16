import { useState, useEffect } from 'react';  // import useEffect
import PhoneList from './PhoneList.js';
import CompanyList from './CompanyList.js';  // Import CompanyList component

function Contact(props) {
    const {contact, contacts, setContacts} = props;
    const [expanded, setExpanded] = useState(false);
    const [phones, setPhones] = useState([]);
    const [companies, setCompanies] = useState([]);  // Add companies state

    useEffect(() => {
        fetch('http://localhost/api/contacts/' + contact.id + '/phones')
            .then(response => response.json())
            .then(data => setPhones(data))
            .catch((error) => {
                console.error('Error:', error);
            });

        // Fetch company list
        fetch('http://localhost/api/contacts/' + contact.id + '/companies')
            .then(response => response.json())
            .then(data => setCompanies(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [contact.id]);  // Add contact.id as a dependency

    const expandStyle = {
        display: expanded ? 'block' : 'none'
    };

    async function doDelete(e) {
        e.stopPropagation();
        
        const response = await fetch('http://localhost/api/contacts/' + contact.id, {
            method: 'DELETE',
        });

        let newContacts = contacts.filter((c) => {
            return c.id !== contact.id;
        });

        setContacts(newContacts);
    }

    function handleExpand(e) {
        e.stopPropagation();
        setExpanded(!expanded);
    }

	return (
		<div key={contact.id} className='contact'>
            <h2 style={{ textAlign: 'center' }}>Contact Summary</h2>
            <div className='title' onClick={handleExpand}>
                <div>
                <h3>Name: <span className="light-text">{contact.name}</span></h3>
                <h3>Address: <span className="light-text">{contact.address}</span></h3>
                </div>
                <button className='button red' onClick={doDelete}>Delete Contact</button>
            </div>

            <div style={expandStyle} onClick={(e) => e.stopPropagation()}>
                <hr />
                <PhoneList phones={phones} setPhones={setPhones} contact={contact} />
                <hr />
                <CompanyList companies={companies} setCompanies={setCompanies} contact={contact} />
            </div>
        </div>
	);
}

export default Contact;
