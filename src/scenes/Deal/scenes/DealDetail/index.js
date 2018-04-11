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
        title: 'Deal Detail',
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
   * Render for Scene
   */
  render() {
    const {
    } = this.state;

    return (

    );
  }
}

export default Calculator;