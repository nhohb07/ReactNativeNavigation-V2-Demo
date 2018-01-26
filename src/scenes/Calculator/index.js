import React from 'react';
import { View } from 'react-native';
import { Tab, Tabs } from 'native-base';
import Navigation from 'react-native-navigation';

import { Scene } from 'src/components';
import AppIcon from 'src/utils/Icon';

import { Calculation } from './scenes';

import styles from './styles';

const NUMBER_OF_TABS = 5;
const tabList = Array(NUMBER_OF_TABS).fill();

class Calculator extends Scene {
  constructor(props) {
    super(props);

    Navigation.setOptions(this.props.componentId, {
      topBar: {
        title: 'Calculator',
        noBorder: true,
        rightButtons: [
          {
            id: 'MORE_BUTTON',
            icon: AppIcon.get('md-more'),
            tintColor: 'white'
          },
          {
            id: 'CLEAR_BUTTON',
            icon: AppIcon.get('ios-trash'),
            tintColor: 'white'
          }
        ]
      }
    });
  }

  onNavigationButtonPressed(id) {
    if (id === 'CLEAR_BUTTON') {
      alert('clear');
    }
  }

  renderTabBar = (tabsData) => {
    return (
      <View style={styles.tabbarContainer}>
        {
          tabList.map((item, index) => (
            <View
              key={index}
              style={[styles.tabbarItem, (index === tabsData.activeTab) ? styles.tabbarItemActive : {}]}
            />
          ))
        }
      </View>
    );
  }

  render() {
    return (
      <Tabs
        style={styles.tabContainer}
        tabBarUnderlineStyle={styles.tabUnderlineStyle}
        renderTabBar={this.renderTabBar}
      >
        {
          tabList.map((item, index) => (
            <Tab
              heading={`Tab ${index}`}
              key={index}
            >
              <Calculation />
            </Tab>
          ))
        }
      </Tabs>
    );
  }
}

export default Calculator;