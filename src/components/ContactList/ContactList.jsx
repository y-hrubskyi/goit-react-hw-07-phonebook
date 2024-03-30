import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilter, selectFilteredContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactsList } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  let filterInfo = '';
  const results = contacts.length;
  if (!results && !filter) filterInfo = <p>Your contact list is empty</p>;
  if (!results && filter) filterInfo = <p>Not Finded</p>;

  return contacts.length ? (
    <ContactsList>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ContactsList>
  ) : (
    filterInfo
  );
};
