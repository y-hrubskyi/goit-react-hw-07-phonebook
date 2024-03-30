import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectError,
  selectFilter,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactsList } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  let filterInfo = '';
  const results = contacts.length;
  if (!results && !filter && !error && !isLoading)
    filterInfo = <p>Your contact list is empty</p>;
  if (!results && filter && !error && !isLoading)
    filterInfo = <p>Not Finded</p>;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p> Something went wrong</p>}
      {contacts.length ? (
        <ContactsList>
          {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ContactsList>
      ) : (
        filterInfo
      )}
    </>
  );
};
