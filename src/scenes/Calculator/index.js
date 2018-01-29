import React from 'react';
import { View } from 'react-native';
import { Tab, Tabs } from 'native-base';

import { Scene } from 'src/components';
import AppIcon from 'src/utils/Icon';

import { Calculation } from './scenes';

import styles from './styles';
import { colors } from 'src/config';

const NUMBER_OF_TABS = 5;
const tabList = Array(NUMBER_OF_TABS).fill();

class Calculator extends Scene {
  static get options() {
    return {
      topBar: {
        title: 'Calculator',
        noBorder: true,
        rightButtons: [
          {
            id: 'MORE_BUTTON',
            icon: AppIcon.get('md-more'),
            tintColor: colors.white
          },
          {
            id: 'CLEAR_BUTTON',
            icon: AppIcon.get('ios-trash'),
            tintColor: colors.white
          }
        ]
      }
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: 0,
      actionName: null
    };
  }

  /**
   * Handle Navigation buttons press
   * This method will automatic active when press buttons on Navigation
   * @param {string} id 
   */
  onNavigationButtonPressed(id) {
    if (id === 'CLEAR_BUTTON') {
      this.setState({ actionName: 'clearData' });
    }
  }

  /**
   * Handle tab change
   */
  _onChangeTab = (data) => {
    this.setState({
      activeTabIndex: data.i
    });
  }

  /**
   * Handle update state from Child component
   */
  _updateState = (state) => {
    this.setState({ ...state });
  }

  /**
   * Render for Tabbar
   */
  _renderTabBar = (tabsData) => {
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

  /**
   * Render for Scene
   */
  render() {
    const {
      activeTabIndex,
      actionName
    } = this.state;

    return (
      <Tabs
        style={styles.tabContainer}
        tabBarUnderlineStyle={styles.tabUnderlineStyle}
        renderTabBar={this._renderTabBar}
        onChangeTab={this._onChangeTab}
      >
        {
          tabList.map((item, index) => (
            <Tab
              heading={`Tab ${index}`}
              key={index}
            >
              <Calculation
                tabItemIndex={index}
                activeTabIndex={activeTabIndex}
                actionName={actionName}
                isActive={activeTabIndex === index}
                updateState={this._updateState}
              />
            </Tab>
          ))
        }
      </Tabs>
    );
  }
}

export default Calculator;