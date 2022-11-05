import React, { useState, useEffect } from 'react';
import './App.css';
import uuid from 'react-uuid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {

  /*Example of Array Varible
  const contacts = [
    {
    id: '1',
    name: 'Evo',
    email: 'thisis@test.com',
    },
    {
      id: '2',
      name: 'bKd',
      email: 'mymail@test.com',
    }
  ]*/

  const LOCAL_STORAGE_KEY = 'contacts';

  const [contacts, setContacts] = useState([]); 

  const AddContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })

    setContacts(newContactList);
  }


  useEffect (() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retriveContacts) setContacts(retriveContacts);
   }, []);

  /*Store the list item*/
  useEffect (() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (
    <div className='ui container'>
    <Header />
    <AddContact AddContactHandler = {AddContactHandler}/>
    <ContactList contacts = {contacts} getContactId = {removeContactHandler}/> {/*Pass the Array Variable to ContactList and this can be accessed using "props"*/}
    </div>
  );
};

export default App;
