import { Component } from 'react';
import { StatusBar } from 'react-native';
import Navigation from 'react-native-navigation';

import AppIcon from 'src/utils/Icon';

import { colors } from 'src/config';
import { images } from 'src/constants';

export class Scene extends Component {
  componentOptions = {
    showBackButton: false
  };

  constructor(props) {
    super(props);

    this.componentName = this.constructor.name;

    StatusBar.setBarStyle('light-content');

    Navigation.setOptions(this.props.componentId, {
      topBar: {
        backgroundColor: colors.blueMain,
        textColor: colors.white,
        translucent: false,
        drawUnder: false,
        leftButtons: [{
          id: 'LOGO_ICON',
          icon: images.logoIcon,
          tintColor: colors.yellowMain,
          disabled: true,
          disableIconTint: true
        }]
      }
    });

    setTimeout(() => {
      if (this.componentOptions.showBackButton) {
        Navigation.setOptions(this.props.componentId, {
          topBar: {
            leftButtons: [{
              id: 'BACK_BUTTON',
              icon: AppIcon.get('md-arrow-round-back'),
              tintColor: colors.white,
            }]
          }
        });
      }
    });
  }

  onNavigationButtonPressed(id) {
    if (id === 'BACK_BUTTON') {
      Navigation.pop(this.props.componentId);
    }
  }

  switchToTab(index) {
    Navigation.setOptions(this.props.componentId, {
      bottomTabs: {
        currentTabIndex: index
      }
    });
  }
}