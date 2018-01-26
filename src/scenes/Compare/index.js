import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigation from 'react-native-navigation';

import { Scene } from 'src/components';

class Compare extends Scene {
  constructor(props) {
    super(props);

    Navigation.setOptions(this.props.componentId, {
      topBar: {
        title: 'Compare History',
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Compare</Text>
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
export default Compare;
