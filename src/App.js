import Navigation from 'react-native-navigation';

import registerScreens from './scenes';
import mainTabBar from 'src/config/navigation/mainTabBar';

class App {
  start = () => {
    registerScreens();

    Navigation.events().onAppLaunched(() => {
      Navigation.setRoot({
        bottomTabs: mainTabBar()
      });
    });
  };
}

export default new App();
