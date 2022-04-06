import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {NestTheme} from '../../../theme';
import {Text} from '../../core/text';

type PageHeaderProps = {
  leftNode: JSX.Element;
  textHeader: string;
  rightNode: JSX.Element;
};

export const Header: React.FC<PageHeaderProps> = ({leftNode, rightNode, textHeader = ''}) => {
  return (
    <View style={HeaderStyles.container}>
      <View>{leftNode}</View>
      <View>
        <Text variant="heading2" color="white">
          {textHeader}
        </Text>
      </View>
      <View>{rightNode}</View>
    </View>
  );
};

const HeaderStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: NestTheme.pallete.text.disabled,
  },
});
