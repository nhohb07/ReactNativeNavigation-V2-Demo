import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button as NBButton } from 'native-base';
import { Text } from 'src/components';

import styles from './styles';

export class Button extends Component {
  render() {
    const { style, textStyle } = this.props;

    return (
      <NBButton {...this.props} style={[styles.container, style]}>
        <Text style={[styles.text, textStyle]}>
          {this.props.text}
        </Text>

        {this.props.children}
      </NBButton>
    );
  }
}

Button.propTypes = {
  style: PropTypes.string,
  textStyle: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element
};