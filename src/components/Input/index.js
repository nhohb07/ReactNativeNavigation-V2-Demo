import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from 'src/config';
import styles from './styles';

export class Input extends Component {
  render() {
    const { style } = this.props;

    return (
      <TextInput
        {...this.props}
        style={[styles.input, style]}
        placeholderTextColor={colors.textHolder}
        secureTextEntry={this.props.password}
      />
    );
  }
}

Input.propTypes = {
  style: PropTypes.string,
  password: PropTypes.bool
};