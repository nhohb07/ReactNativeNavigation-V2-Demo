import React, { Component } from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export class Text extends Component {
  render() {
    const { style = {} } = this.props;

    return <RNText {...this.props} style={[styles.textDefault, style]} />;
  }
}

Text.propTypes = {
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};