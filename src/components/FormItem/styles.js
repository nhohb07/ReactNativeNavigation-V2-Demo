import { StyleSheet } from 'react-native';
import { colors } from 'src/config';

export default StyleSheet.create({
  container: {
    marginBottom: 10
  },
  textDefault: {
    color: colors.text
  },

  labelStyle: {
    marginBottom: 3
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 10,
    borderRadius: 5
  }
});