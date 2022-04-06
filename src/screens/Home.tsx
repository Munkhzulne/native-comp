import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SectionList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '../components';
import {Text} from '../components/core/text';
import {NestTheme} from '../theme';

const SectionItem: React.FC<{title: string}> = ({title = 'Button'}) => {
  const navigation = useNavigation();
  const navigateScreen = (): void => {
    navigation.navigate(title as never);
  };
  return <Button title={title} variant="link" onPress={navigateScreen} />;
};

export const Home: React.FC = () => {
  const DATA = [
    {
      title: 'Core components',
      data: ['Button', 'Text', 'Input', 'Dropdown'],
    },
  ];

  return (
    <SafeAreaView style={style}>
      <SectionList
        sections={DATA}
        renderItem={({item}) => <SectionItem title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text variant={'heading2'} align="left">
            {title}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};
const style = {
  flex: 1,
  backgroundColor: NestTheme.pallete.background.dark,
};
