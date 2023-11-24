import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { getFilter } from 'redux/filterSlice';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { filterContacts } from 'helpers/filterContacts';

import { ContactsList, ContactData, Button } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const deleteContactFoo = contactId => {
    dispatch(deleteContact(contactId));
    toast.success('Contact successfully deleted');
  };

  const filteredContacts = filterContacts(contacts, filter);
  const contactList = filteredContacts.map(contact => (
    <li key={contact.id}>
      <ContactData>
        {contact.name}: {contact.number}
      </ContactData>
      <Button type="button" onClick={() => deleteContactFoo(contact.id)}>
        Delete
      </Button>
    </li>
  ));

  return <ContactsList>{contactList}</ContactsList>;
};
