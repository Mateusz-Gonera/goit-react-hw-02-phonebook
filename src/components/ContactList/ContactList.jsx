import ListCSS from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ onDelete, filterArray }) => {
  return (
    <ul className={ListCSS.list}>
      {filterArray().map(contact => (
        <li key={contact.id} className={ListCSS.item}>
          <span className={ListCSS.paragraph}>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            className={ListCSS.btn}
            onClick={() => onDelete(contact.id)}
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
  filterArray: PropTypes.func.isRequired,
};
