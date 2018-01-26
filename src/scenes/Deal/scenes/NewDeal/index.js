import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Navigation from 'react-native-navigation';

import { Scene } from 'src/components';

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

  onNavigationButtonPressed(id) {
    if (id === 'BACK_BUTTON') {
      alert('back');
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.switchToTab(0)}>
          <Text>To Calculator</Text>
        </TouchableOpacity>
      </View>
    );
  }
}