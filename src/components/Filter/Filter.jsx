import FilterCSS from './Filter.module.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <label className={FilterCSS.label}>
        Find contacts by Name
        <input
          className={FilterCSS.input}
          type="text"
          name="filter"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
