import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { selectContacts } from 'redux/selectors';

import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { AddContact } from './AddContact/AddContact';

import { GlobalStyle } from 'styles/GlobalStyle';
import { Layout, PageTitle, Title } from './App.styled';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Layout>
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 1500 }} />

      <PageTitle>Phonebook</PageTitle>
      <Title>Contacts</Title>
      {contacts.length > 0 && <Filter />}
      <ContactList />
      <AddContact />
    </Layout>
  );
};
