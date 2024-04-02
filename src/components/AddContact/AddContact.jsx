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

  const toggleModal = () => {
    setModalIsOpen(prevState => !prevState);
  };

  const addContactFoo = async newContact => {
    try {
      const isExist = isInContacts(contacts, newContact.name);

      if (isExist) {
        throw new Error(`${newContact.name} is already in contacts.`);
      }

      await dispatch(addContact(newContact)).unwrap();
      toast.success('Contact successfully added');
      toggleModal();
    } catch (error) {
      toast.error(error.message || `Oops... ${error.message}`);
    }
  };

  return (
    <Wrapper>
      <Button type="button" onClick={toggleModal}>
        ➕ Add new contact
      </Button>
      {modalIsOpen && (
        <ModalBase isOpen={modalIsOpen} onClose={toggleModal}>
          <ContactForm
            contact={{ name: '', number: '' }}
            action="Add contact"
            onSubmit={addContactFoo}
          />
        </ModalBase>
      )}
    </Wrapper>
  );
};
