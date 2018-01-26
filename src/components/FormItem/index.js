import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { Text } from 'src/components';

import styles from './styles';

export class FormItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || null
    };
  }

  _renderLabel() {
    const { label, labelStyle } = this.props;
    if (!label) {
      return null;
    }

    return (
      <Text style={[styles.labelStyle, labelStyle]}>
        {label}
      </Text>
    );
  }

  render() {
    const { style, inputStyle } = this.props;

    return (
      <View style={style}>
        {this._renderLabel()}

        <TextInput
          value={this.state.value}
          style={[styles.input, inputStyle]}
        />
      </View>
    );
  }
}

FormItem.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.string,
  style: PropTypes.string,
  inputStyle: PropTypes.string,
};