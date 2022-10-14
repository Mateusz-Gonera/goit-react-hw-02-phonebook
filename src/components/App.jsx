import React, { Component } from 'react';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  render() {
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

        <h2>Contacts</h2>
      </div>
    );
  }
}
