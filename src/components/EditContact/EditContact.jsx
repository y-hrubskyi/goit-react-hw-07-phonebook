import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { updateContact } from 'redux/operations';

import { ModalBase } from 'components/ModalBase/ModalBase';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const EditContact = ({ contact, isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(updateContact({ ...values, id: contact.id }));
    toast.success('Contact successfully updated');
    onClose();
  };

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <ContactForm
        contact={contact}
        action="Update contact"
        onSubmit={handleSubmit}
      />
    </ModalBase>
  );
};
