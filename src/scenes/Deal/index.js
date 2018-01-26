import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Navigation from 'react-native-navigation';

import { Scene } from 'src/components';

class Deal extends Scene {
  constructor(props) {
    super(props);

    Navigation.setOptions(this.props.componentId, {
      topBar: {
        title: 'Deal History',
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'ActiveDeal'
              }
            });
          }}
        >
          <Text>To Active Deal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Deal;
