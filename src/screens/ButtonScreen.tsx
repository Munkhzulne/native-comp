import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Switch} from 'react-native';
import {ScrollView} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, ButtonVariants, Text, Header, BottomSheet} from '../components';
import {NestTheme} from '../theme';

export const ButtonScreen: React.FC = () => {
  const navigation = useNavigation();
  const [buttonState, setButtonState] = useState<{variant: ButtonVariants; disabled: boolean; modal: boolean}>({
    modal: false,
    variant: 'fill',
    disabled: false,
  });
  return (
    <SafeAreaView style={Style.cont}>
      <Header
        leftNode={<Button variant="text" title="Back" onPress={() => navigation.goBack()} />}
        rightNode={<Button variant="text" title="Edit" onPress={() => setButtonState({...buttonState, modal: true})} />}
        textHeader={'Button'}
      />
      <View style={[Style.flexCenter]}>
        <View style={Style.w200}>
          <Button title="Button" variant={buttonState.variant} disabled={buttonState.disabled} />
        </View>
      </View>
      <BottomSheet visible={buttonState.modal}>
        <View style={Style.modalView}>
          <ScrollView>
            <View>
              <Text>Disabled</Text>
              <Switch
                value={buttonState.disabled}
                onValueChange={() => setButtonState({...buttonState, disabled: !buttonState.disabled})}
              />
              <Text> Variant</Text>
            </View>
            <View>
              {['fill', 'link', 'ghost', 'text'].map((variant, index) => {
                return (
                  <Button
                    title={variant}
                    key={index}
                    variant="ghost"
                    disabled={buttonState.variant === variant}
                    onPress={() => {
                      setButtonState({...buttonState, variant: variant as ButtonVariants});
                    }}
                  />
                );
              })}
            </View>
            <Button title="Close" onPress={() => setButtonState({...buttonState, modal: false})} />
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
    height: 300,
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
    justifyContent: 'space-between',
  },
  w200: {
    width: 200,
  },
});
