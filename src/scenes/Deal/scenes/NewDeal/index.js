import React from 'react';
import { View } from 'react-native';
import Navigation from 'react-native-navigation';

import { Scene, Text, Button } from 'src/components';

export default class NewDeal extends Scene {
  constructor(props) {
    super(props);

    // set Component Options
    this.componentOptions.showBackButton = props.showBackButton || true;

    Navigation.setOptions(this.props.componentId, {
      topBar: {
        title: 'New Deal',
        rightButtons: [
          {
            id: 'SAVE_BUTTON',
            title: 'Save',
            buttonColor: 'white'
          }
        ]
      }
    });
  }

  render() {
    return (
      <View>
        <Text>Your Info:</Text>
        <Text>Email: {this.props.email}</Text>
        <Text>Username: {this.props.username}</Text>

        <Button
          text='Save'
          block
          onPress={() => this.switchToTab(1)}
        />
      </View>
    );
  }
}