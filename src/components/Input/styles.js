import {StyleSheet} from 'react-native';
import {appColors} from '../../assets/theme/Colors';
import {Fonts} from '../../assets/theme/Fonts';

export default StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  label: {
    paddingBottom: 5,
    fontFamily: Fonts.FontBold,
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: appColors.primary,
    height: 40,
    borderRadius: 5,
    position: 'relative',
  },
  error: {
    color: appColors.danger,
    paddingTop: 5,
  },
  icon: {
    position: 'absolute',
    alignSelf: 'center',
  },
});