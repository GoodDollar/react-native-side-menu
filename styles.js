// @flow

import { StyleSheet } from 'react-native';

const absoluteStretch = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

export default StyleSheet.create({
  container: {
    ...absoluteStretch,
    justifyContent: 'center',
  },
  menu: {
    ...absoluteStretch,
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowRadius: 30,
  },
  frontView: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  overlay: {
    ...absoluteStretch,
  },
});
