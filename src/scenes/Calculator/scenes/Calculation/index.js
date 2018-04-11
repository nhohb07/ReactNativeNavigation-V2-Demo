import React, { Component } from 'react';
import { Content } from 'native-base';
import Navigation from 'react-native-navigation';
import { FormItem, Button } from 'src/components';

import _ from 'lodash';

// import styles from './styles';

const initialState = {
  email: 'nhohuynh@vinasource.com',
  username: 'nhohb07',
  password: null,
};

export class Calculation extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive && nextProps.actionName) {
      if (nextProps.actionName === 'clearData') {
        this.setState({ ...initialState }, () => {
          if (_.isFunction(this.props.updateState)) {
            this.props.updateState({ actionName: null });
          }
        });
      }
    }
  }

  render() {
    const { email, username, password } = this.state;

    return (
      <Content padder>
        <FormItem
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={(email) => this.setState({ email })}
        />

        <FormItem
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChangeText={(username) => this.setState({ username })}
        />

        <FormItem
          password
          label="Password"
          placeholder="Enter your password"
          onChangeText={(password) => this.setState({ password })}
        />

        <Button
          text='Sign up'
          block
          onPress={() => {
            Navigation.push(this.props.parentComponentId, {
              component: {
                name: 'NewDeal',
                passProps: {
                  email,
                  username,
                  password
                }
              }
            });
          }}
        />
      </Content>
    );
  }
}