import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Header} from '../components';
import {Dropdown} from '../components/core/dropdown';
import {NestTheme} from '../theme';

export const DropdownScreen : React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Style.cont}>
      <Header
        leftNode={<Button variant="text" title="Back" onPress={() => navigation.goBack()} />}
        rightNode={<Button variant="text" title="Edit" />}
        textHeader={'Input'}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={[Style.flexCenter]}>
          <View style={Style.w300}>
            <Dropdown label="My Dropdown" options={['Item1', 'Item2', 'Item3', 'Item4', 'Item5']} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: NestTheme.pallete.background.dark,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  w300: {
    width: 300,
  },
});
