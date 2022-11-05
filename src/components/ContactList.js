import React from "react";
import ContactCard from "./ContactCard";

/*Access the Array Variable from parent component(App.js) using "props"*/
const ContactList = (props) => { 
    
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    /*Function that will get the Array Variable using the .map() array method*/
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact = {contact} clickHandler = {deleteContactHandler} key = {contact.id}/>
        );
    });

    return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;