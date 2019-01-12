import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './comp/contactListItem/ContactListItem';

const ContactList = ({contacts}) => (
    <div>
        {
            contacts.map(({id,name, lastName, email}) => (
                <ContactListItem key={id} lastName={lastName} name={name} email={email} />
            ))            
        }
    </div>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default ContactList;