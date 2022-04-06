/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useRef, useState } from 'react';
import { FlatList, Modal, Pressable, TouchableOpacity, View } from 'react-native';
import { Text } from '..';
import { makeStyles, NestTheme } from '../../../theme';

interface DropDownTypes<T> {
  value?: T;
  options?: T[];
  label?: string;
  onSelect?: (item: T) => void;
}

const useStyles = makeStyles({
  common: {
    backgroundColor: NestTheme.pallete.opacity[300],
    borderRadius: 6,
    paddingRight: NestTheme.spacing(4),
    paddingLeft: NestTheme.spacing(4),
    paddingTop: NestTheme.spacing(3),
    paddingBottom: NestTheme.spacing(3),
    marginTop: NestTheme.spacing(0.5),
    borderWidth: 1,
  },
  dropdown: {
    container: {
      main: {
        position: 'relative',
      },
      items: {
        position: 'absolute',
        backgroundColor: NestTheme.pallete.background.dark,
        borderWidth: 1,
        borderColor: NestTheme.pallete.text.disabled,
        width: '100%',
        borderRadius: 4,
        maxHeight: 180,
      },
    },
    item: {
      pressed: {
        backgroundColor: NestTheme.pallete.opacity[300],
      },
      main: {
        paddingLeft: NestTheme.spacing(4),
        paddingRight: NestTheme.spacing(4),
        paddingTop: NestTheme.spacing(3),
        paddingBottom: NestTheme.spacing(3),
      },
    },
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  border: {
    main: {
      borderColor: NestTheme.pallete.opacity[100],
    },
    active: {
      borderColor: NestTheme.pallete.secondary.main,
    },
  },
});

export const Dropdown = <T extends string>(props: DropDownTypes<T>) : React.ReactElement => {
  const { value = '', options = [], label = '', onSelect } = props;
  const styles = useStyles();
  const [dropdownValue, setDropdownValue] = useState<T | string>(value);
  const [active, setActive] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DropdownButton = useRef<React.ElementRef<typeof View> | any>(null);
  const [dropdownSpace, setDropdownSpace] = useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const onSelectItem = (item: T): void => {
    setDropdownValue(item);
    onSelect && onSelect(item);
    setActive(false);
  };
  const openDropdown = (): void => {
    DropdownButton.current.measure((_fx: number, _fy: number, w: number, h: number, px: number, py: number) => {
      setDropdownSpace({ top: py + h + 5, width: w, left: px });
    });
    setActive(true);
  };
  const renderItem = ({ item }: { item: T }): JSX.Element => (
    <View>
      <Pressable
        style={({ pressed }) => [styles['dropdown-item-main'], pressed && styles['dropdown-item-pressed']]}
        onPress={() => onSelectItem(item)}
      >
        <Text align="left">{item}</Text>
      </Pressable>
    </View>
  );
  return (
    <View style={[styles['dropdown-container-main']]}>
      <Text color={'white'} variant="body1" align="left">
        {label}
      </Text>

      <Pressable
        style={[styles.common, active ? styles['border-active'] : styles['border-main']]}
        ref={DropdownButton}
        onPress={() => (active ? setActive(false) : openDropdown())}
      >
        <Text variant="body1" align="left" color={active ? 'white' : 'disabled'}>
          {dropdownValue === '' ? 'Select item' : dropdownValue}
        </Text>
      </Pressable>

      <Modal visible={active} transparent animationType="none">
        <TouchableOpacity style={styles.overlay} onPress={() => setActive(false)}>
          <View
            style={[
              styles['dropdown-container-items'],
              { top: dropdownSpace.top, width: dropdownSpace.width, left: dropdownSpace.left },
            ]}
          >
            <FlatList data={options} renderItem={renderItem} keyExtractor={(_item, index) => index.toString()} />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
