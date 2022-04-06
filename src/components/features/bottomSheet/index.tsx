import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';

export const BottomSheet: React.FC<{visible: boolean}> = ({children, visible = false}) => {
  return (
    <Modal animated transparent animationType="slide" visible={visible}>
      <View style={[Styles.cont]}>{children}</View>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  cont: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
