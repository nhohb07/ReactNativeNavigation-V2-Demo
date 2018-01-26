import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Navigation from 'react-native-navigation';

import { Scene } from 'src/components';

export default class ActiveDeal extends Scene {
  constructor(props) {
    super(props);

    // set Component Options
    this.componentOptions.showBackButton = true;

    Navigation.setOptions(this.props.componentId, {
      topBar: {
        title: 'Active Deal',
      }
    });
  }

  componentWillMount() {
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'NewDeal'
              }
            });
          }}
        >
          <Text>To New Deal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}