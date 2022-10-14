import FormCSS from './ContactForm.module.css';
import React, { Component } from 'react';

import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  id: '',
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  elementId = nanoid();

  handleChangeForm = evt => {
    const { name, value, id } = evt.target;
    this.setState({ id: id });
    this.setState({ [name]: value });
  };

  render() {
    const { id, name, number } = this.state;
    return (
      <form
        className={FormCSS.form}
        HTMLfor={this.elementId}
        onSubmit={this.handleSubmit}
      >
        <label className={FormCSS.label}>
          Name
          <input
            id={this.elementId}
            className={FormCSS.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={FormCSS.label}>
          Number
          <input
            id={this.elementId}
            className={FormCSS.input}
            type="tel"
            name="number"
            value={number}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={FormCSS.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
