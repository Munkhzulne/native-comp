import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Switch } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text, Header, BottomSheet, TextProps, TextColorType } from '../components';
import { Dropdown } from '../components/core/dropdown';
import { NestTheme } from '../theme';

export const TextScreen: React.FC = () => {
  const navigation = useNavigation();
  const [textState, setButtonState] = useState<
    Pick<TextProps, 'color' | 'underline' | 'variant' | 'align'> & { modal: boolean }
  >({
    modal: false,
    color: 'white',
    underline: false,
    variant: 'body',
    align: 'left',
  });
  const colorOptions: TextColorType[] = Object.keys(NestTheme.pallete.text) as TextColorType[];
  return (
    <SafeAreaView style={Style.cont}>
      <Header
        leftNode={<Button variant="text" title="Back" onPress={() => navigation.goBack()} />}
        rightNode={<Button variant="text" title="Edit" onPress={() => setButtonState({ ...textState, modal: true })} />}
        textHeader={'Text'}
      />
      <View style={[Style.flexCenter]}>
        <View style={Style.w200}>
          <Text
            underline={textState.underline}
            color={textState.color}
            variant={textState.variant}
            align={textState.align}
          >
            Text component{' '}
          </Text>
        </View>
      </View>
      <BottomSheet visible={textState.modal}>
        <View style={Style.modalView}>
          <ScrollView>
            <View style={Style.flexRow}>
              <Text>Underline</Text>
              <Switch
                value={textState.underline}
                onValueChange={() => setButtonState({ ...textState, underline: !textState.underline })}
              />
            </View>
            <View>
              <Dropdown
                label="Align"
                value={textState.align}
                options={['center', 'right', 'left', 'auto']}
                onSelect={(item: Pick<TextProps, 'align'>['align']) => setButtonState({ ...textState, align: item })}
              />
              <Dropdown
                label="Variant"
                value={textState.variant}
                options={Object.keys(NestTheme.typography)}
                onSelect={(item: Pick<TextProps, 'variant'>['variant']) =>
                  setButtonState({ ...textState, variant: item })
                }
              />
              <Dropdown
                label="Color"
                value={textState.color}
                options={colorOptions}
                onSelect={(item: TextColorType) => setButtonState({ ...textState, color: item })}
              />
            </View>

            <Button title="Close" onPress={() => setButtonState({ ...textState, modal: false })} />
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
    height: 280,
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
