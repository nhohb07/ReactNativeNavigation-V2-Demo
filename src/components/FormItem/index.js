import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { Text, Input } from 'src/components';

import styles from './styles';

export class FormItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
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
      <View style={[styles.container, style]}>
        {this._renderLabel()}

        <Input
          {...this.props}
          value={this.state.value}
          style={inputStyle}
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