import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { isInContacts } from 'helpers/isInContacts';

import { ModalBase } from 'components/ModalBase/ModalBase';
import { ContactForm } from 'components/ContactForm/ContactForm';

import { Button } from 'components/ContactForm/ContactForm.styled';
import { Wrapper } from './AddContact.styled';

export const AddContact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addContactFoo = newContact => {
    const isExist = isInContacts(contacts, newContact.name);

    if (isExist) {
      toast.error(`${newContact.name} is already in contacts.`);
      return isExist;
    }

    dispatch(addContact(newContact));
    toast.success('Contact successfully added');
  };

  const toggleModal = () => {
    setModalIsOpen(prevState => !prevState);
  };

  const handleSubmit = values => {
    const isAlreadyAdded = addContactFoo(values);
    if (!isAlreadyAdded) {
      toggleModal();
    }
  };

  return (
    <Wrapper>
      <Button type="button" onClick={toggleModal}>
        ➕ Add new contact
      </Button>
      <ModalBase isOpen={modalIsOpen} onClose={toggleModal}>
        <ContactForm
          contact={{ name: '', number: '' }}
          action="Add contact"
          onSubmit={handleSubmit}
        />
      </ModalBase>
    </Wrapper>
  );
};
