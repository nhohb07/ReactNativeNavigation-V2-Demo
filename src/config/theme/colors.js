import color from 'color';

const blueMain = '#063350';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',

  blueMain: blueMain,
  redMain: '#850101',
  yellowMain: '#E5AF2E',

  text: '#333333',
  textHolder: '#999999',
  border: '#D6D6D6',

  mainTabBar: {
    background: '#efefef',
  },

  get androidStatusBar() {
    return color(blueMain).darken(0.2).hex();
  }
};
