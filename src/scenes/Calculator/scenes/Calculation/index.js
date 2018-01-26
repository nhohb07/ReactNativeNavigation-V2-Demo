import React, { Component } from 'react';
import { Content } from 'native-base';
import { Form, FormItem } from 'src/components';

import styles from './styles';

export class Calculation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content padder>
        <FormItem
          label="Email"
          placeholder="Enter your email"
        />

        <FormItem
          label="Username"
          placeholder="Enter your username"
        />

        <FormItem
          password
          label="Password"
          placeholder="Enter your password"
        />
      </Content>
    );
  }
}