import React from 'react';
import {useState} from 'react';
import {View, TextInput} from 'react-native';
import {Text, TextColorType} from '..';
import {makeStyles, NestTheme} from '../../../theme';

export type Status = 'success' | 'error' | 'warning' | 'default';

const a: Record<Status, TextColorType> = {
  success: 'success',
  default: 'disabled',
  warning: 'warning',
  error: 'error',
};

export interface InputProps {
  label?: string;
  disabled?: boolean;
  statusType?: Status;
  statusText?: string;
  placeholder?: string;
  value?: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => undefined;
}

const useStyles = makeStyles({
  common: {
    backgroundColor: NestTheme.pallete.opacity[300],
    borderRadius: 6,
    paddingRight: NestTheme.spacing(4),
    paddingLeft: NestTheme.spacing(4),
    paddingTop: NestTheme.spacing(3),
    paddingBottom: NestTheme.spacing(3),
    borderWidth: 1,
    marginTop: NestTheme.spacing(0.5),
    marginBottom: NestTheme.spacing(0.5),
    flexDirection: 'row',
  },
  rawInput: {
    padding: 0,
    ...NestTheme.typography.body1,
    width: '100%',
  },
  border: {
    default: {
      borderColor: NestTheme.pallete.opacity[100],
    },
    active: {
      borderColor: NestTheme.pallete.primary.light,
    },
    disabled: {
      borderColor: NestTheme.pallete.opacity[100],
    },
    success: {
      borderColor: NestTheme.pallete.success.main,
    },
    error: {
      borderColor: NestTheme.pallete.error.main,
    },
    warning: {
      borderColor: NestTheme.pallete.warning.main,
    },
  },
  text: {
    main: {
      color: NestTheme.pallete.opacity[500],
    },
    active: {
      color: NestTheme.pallete.text.white,
    },
    disabled: {
      color: NestTheme.pallete.opacity[400],
    },
  },
});

export const Input: React.FC<InputProps> = props => {
  const [focus, setFocus] = useState(false);
  const styles = useStyles();
  const {
    label = '',
    disabled = false,
    statusType = 'default',
    placeholder = '',
    secureTextEntry = false,
    value = '',
    statusText = '',
    onChangeText,
  } = props;
  const [inputValue, setInputValue] = useState(value || '');
  const onChange = (text: string): void => {
    setInputValue(text);
    onChangeText && onChangeText(text);
  };
  return (
    <View>
      <Text color={disabled ? 'disabled' : 'white'} variant="body1" align="left">
        {label}
      </Text>
      <View
        style={[
          styles.common,
          focus ? styles['border-active'] : styles[`border-${statusType}`],
          disabled && styles['border-disabled'],
        ]}>
        <TextInput
          style={[
            styles.rawInput,
            focus ? styles['text-active'] : styles['text-main'],
            disabled && styles['text-disabled'],
          ]}
          secureTextEntry={secureTextEntry}
          value={inputValue}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChangeText={onChange}
          editable={!disabled}
          placeholderTextColor={disabled ? NestTheme.pallete.opacity[400] : NestTheme.pallete.opacity[500]}
        />
      </View>
      <Text variant="body" align="left" color={a[statusType]}>
        {statusType && statusText}
      </Text>
    </View>
  );
};
