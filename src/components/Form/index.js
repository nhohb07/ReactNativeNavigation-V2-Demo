import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export class Form extends Component {
  render() {
    return <View {...this.props} />;
  }
}

Form.propTypes = {
  style: PropTypes.string
};