import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

import { ContactsList, ContactData, Button } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContactFoo = contactId => {
    dispatch(deleteContact(contactId)).then(() =>
      toast.success('Contact successfully deleted')
    );
  };

  return (
    <ContactsList>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactData>
            {contact.name}: {contact.number}
          </ContactData>
          <Button type="button" onClick={() => deleteContactFoo(contact.id)}>
            Delete
          </Button>
        </li>
      ))}
    </ContactsList>
  );
};
