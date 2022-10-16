import ListCSS from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={ListCSS.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={ListCSS.item}>
          <span className={ListCSS.paragraph}>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            className={ListCSS.btn}
            onClick={() => onDelete(contact.name)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
