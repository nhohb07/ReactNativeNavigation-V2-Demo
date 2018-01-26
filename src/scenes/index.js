import Navigation from 'react-native-navigation';

import Calculator from './Calculator';

import Deal from './Deal';
import ActiveDeal from './Deal/scenes/ActiveDeal';
import NewDeal from './Deal/scenes/NewDeal';

import Invoice from './Invoice';

import Compare from './Compare';

import More from './More';

const registerScreens = () => {
  Navigation.registerComponent('Calculator', () => Calculator);

  Navigation.registerComponent('Deal', () => Deal);
  Navigation.registerComponent('ActiveDeal', () => ActiveDeal);
  Navigation.registerComponent('NewDeal', () => NewDeal);

  Navigation.registerComponent('Invoice', () => Invoice);

  Navigation.registerComponent('Compare', () => Compare);

  Navigation.registerComponent('More', () => More);
}

export default registerScreens;