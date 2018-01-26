import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

const iconList = [
  'ios-calculator',
  'ios-paper-outline',
  'ios-options-outline',
  'ios-git-compare',
  'ios-more',

  'md-arrow-round-back',
  'ios-trash',
  'md-more'
];

const ICON_SIZE = 30;

class AppIcon {
  constructor() {
    this.icons = {};
  }

  load() {
    const iconImageSourceList = iconList.map((iconName) => Icon.getImageSource(iconName, ICON_SIZE, 'red'));

    return new Promise((resolve, reject) => {
      Promise.all(iconImageSourceList).then((values) => {
        for (let index = 0; index < iconList.length; index++) {
          this.icons[iconList[index]] = values[index];
        }

        resolve(true);
      }).catch((error) => {
        reject(error);
      }).done();
    });
  }

  get(key) {
    return this.icons[key] || null;
  }
}

export default new AppIcon();