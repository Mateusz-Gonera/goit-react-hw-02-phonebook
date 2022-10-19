import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = { id: nanoid(6), name: name, number: number };
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
    form.reset();
  };

  componentDidUpdate() {
    console.log(this.state.contacts);
  }

  // handleChange = evt => {
  //   const { name, value } = evt.target;
  //   this.setState(state =>
  //     state.contacts.push({ id: nanoid(), [name]: value })
  //   );
  // };

  fooDelete = contactID => {
    const index = this.state.contacts.findIndex(
      contact => contact.id === contactID
    );
    this.setState(state => state.contacts.splice(index, 1));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
          padding: '20px 10px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} onDelete={this.fooDelete} />
      </div>
    );
  }
}
