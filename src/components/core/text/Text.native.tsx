import {capitalize} from 'lodash';
import React from 'react';
import {Text as RawText, TextProps as RawTextProps} from 'react-native';
import {makeStyles, NestTheme} from '../../../theme';


export type TextColorType = keyof typeof NestTheme.pallete.text | 'success' | 'error' | 'warning';
export type TextVariantType =  keyof typeof NestTheme.typography & string;
export interface TextProps extends RawTextProps {
  variant?: TextVariantType,
  color?: TextColorType
  align?: 'center' | 'auto' | 'left' | 'right' | 'justify';
  underline?: boolean;
}

const useStyles = makeStyles({
  colorBlack: {
    color: NestTheme.pallete.text.black,
  },
  colorWhite: {
    color: NestTheme.pallete.text.white,
  },
  colorGrey: {
    color: NestTheme.pallete.text.grey,
  },
  colorDisabled: {
    color: NestTheme.pallete.text.disabled,
  },
  colorNest: {
    color: NestTheme.pallete.text.nest,
  },
  colorHop: {
    color: NestTheme.pallete.text.hop,
  },
  colorBlue: {
    color: NestTheme.pallete.text.blue,
  },
  colorPurple: {
    color: NestTheme.pallete.text.purple,
  },
  colorError: {
    color: NestTheme.pallete.error.main,
  },
  colorSuccess: {
    color: NestTheme.pallete.success.main,
  },
  colorWarning: {
    color: NestTheme.pallete.warning.main,
  },
  alignAuto: {
    textAlign: 'auto',
  },
  alignJustify: {
    textAlign: 'justify',
  },
  alignLeft: {
    textAlign: 'left',
  },
  alignCenter: {
    textAlign: 'center',
  },
  alignRight: {
    textAlign: 'right',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
});

export const Text: React.FC<TextProps> = props => {
  const styles = useStyles();
  const {children, variant = 'body1', color = 'white', align = 'left', underline = false, ...otherProps} = props;
  return (
    <RawText
      style={[
        styles[`color${capitalize(color)}`],
        styles[`align${capitalize(align)}`],
        underline && styles.textUnderline,
        {...NestTheme.typography[variant]},
      ]}
      {...otherProps}>
      {children}
    </RawText>
  );
};
