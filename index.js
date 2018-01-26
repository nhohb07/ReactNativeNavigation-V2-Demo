debug = (...args) => {
  console.log('RN Info: ', args);
};

import App from 'src/App';
import AppIcon from 'src/utils/Icon';

AppIcon.load().then((result) => {
  App.start();
});
