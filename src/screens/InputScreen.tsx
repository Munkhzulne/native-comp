import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Switch} from 'react-native';
import {StyleSheet, View, Keyboard, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text, Header, BottomSheet, Input, InputProps, Status} from '../components';
import {Dropdown} from '../components/core/dropdown';
import {NestTheme} from '../theme';

export const InputScreen: React.FC = () => {
  const navigation = useNavigation();
  const [inputState, setButtonState] = useState<
    Pick<InputProps, 'disabled' | 'statusText' | 'secureTextEntry' | 'statusType'> & {modal: boolean}
  >({
    modal: false,
    statusType: undefined,
    statusText: 'Status text',
    secureTextEntry: false,
    disabled: false,
  });
  return (
    <SafeAreaView style={Style.cont}>
      <Header
        leftNode={<Button variant="text" title="Back" onPress={() => navigation.goBack()} />}
        rightNode={<Button variant="text" title="Edit" onPress={() => setButtonState({...inputState, modal: true})} />}
        textHeader={'Input'}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={[Style.flexCenter]}>
          <View style={Style.w300}>
            <Input
              placeholder="Placeholder"
              label="Label text"
              statusType={inputState.statusType}
              statusText={inputState.statusText}
              disabled={inputState.disabled}
              secureTextEntry={inputState.secureTextEntry}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <BottomSheet visible={inputState.modal}>
        <View style={Style.modalView}>
          <ScrollView>
            <Dropdown
              label="statusType"
              options={['error', 'success', 'warning', 'default']}
              value={inputState.statusType}
              onSelect={(item: Status) =>
                setButtonState({...inputState, statusType: item})
              }
            />
            <Text>Disabled</Text>
            <Switch
              value={inputState.disabled}
              onValueChange={() => setButtonState({...inputState, disabled: !inputState.disabled})}
            />
            <Text>secureTextEntry</Text>
            <Switch
              value={inputState.secureTextEntry}
              onValueChange={() => setButtonState({...inputState, secureTextEntry: !inputState.secureTextEntry})}
            />

            <Button title="Close" onPress={() => setButtonState({...inputState, modal: false})} />
          </ScrollView>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  modalView: {
    padding: 20,
    backgroundColor: NestTheme.pallete.gradient[500],
    borderRadius: 10,
    height: 320,
    justifyContent: 'space-around',
  },
  cont: {
    flex: 1,
    backgroundColor: NestTheme.pallete.background.dark,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  w300: {
    width: 300,
  },
});
