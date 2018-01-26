import { StyleSheet } from 'react-native';
import { colors } from 'src/config';

export default StyleSheet.create({
  tabContainer: {
    backgroundColor: colors.blueMain,
    borderWidth: 0
  },
  tabbarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10
  },
  tabbarItem: {
    width: 5,
    height: 5,
    borderRadius: 10,
    marginHorizontal: 3,
    backgroundColor: colors.white
  },
  tabbarItemActive: {
    backgroundColor: colors.yellowMain
  }
});