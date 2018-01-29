import { StyleSheet } from 'react-native';
import { colors } from 'src/config';

export default StyleSheet.create({
  input: {
    fontFamily: 'Roboto',
    borderWidth: 1,
    borderColor: colors.border,
    padding: 10,
    borderRadius: 5,
    letterSpacing: 2,
    color: colors.text
  }
});