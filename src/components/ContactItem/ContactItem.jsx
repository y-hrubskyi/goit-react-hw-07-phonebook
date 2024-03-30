import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdEdit, MdDelete } from 'react-icons/md';
import toast from 'react-hot-toast';

import { deleteContact } from 'redux/operations';

import { EditContact } from 'components/EditContact/EditContact';
import { ContactWrapper, ContactData, Button } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const deleteContactFoo = async contactId => {
    try {
      await dispatch(deleteContact(contactId)).unwrap();
      toast.success('Contact successfully deleted');
    } catch (error) {
      toast.error(`Oops... ${error.message}`);
    }
  };

  const toggleModal = () => {
    setModalIsOpen(prevState => !prevState);
  };

  return (
    <li>
      <ContactWrapper>
        <ContactData>
          {contact.name}: {contact.number}
        </ContactData>
        <div>
          <Button type="button" onClick={toggleModal}>
            <MdEdit size={22} />
          </Button>{' '}
          <Button type="button" onClick={() => deleteContactFoo(contact.id)}>
            <MdDelete size={22} />
          </Button>
        </div>
      </ContactWrapper>
      <EditContact
        contact={contact}
        isOpen={modalIsOpen}
        onClose={toggleModal}
      />
    </li>
  );
};
