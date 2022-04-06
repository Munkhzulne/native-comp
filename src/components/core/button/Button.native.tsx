import React from 'react';
import {FC} from 'react';
import {Pressable} from 'react-native';
import {makeStyles, NestTheme} from '../../../theme';
import {Text} from '../text';

export type ButtonVariants = 'fill' | 'ghost' | 'text' | 'link';

type ButtonProps = {
  title?: string;
  variant?: ButtonVariants;
  disabled?: boolean;
  onPress?: () => void;
};

const useStyles = makeStyles({
  common: {
    textAlign: 'center',
    paddingLeft: NestTheme.spacing(8),
    paddingTop: NestTheme.spacing(3),
    paddingRight: NestTheme.spacing(8),
    paddingBottom: NestTheme.spacing(3),
    borderRadius: 4,
  },
  fill: {
    main: {
      backgroundColor: NestTheme.pallete.primary.main,
      borderWidth: 0,
    },
    pressed: {
      backgroundColor: NestTheme.pallete.primary.light,
    },
    disabled: {
      backgroundColor: NestTheme.pallete.primary.dark,
    },
  },
  ghost: {
    main: {
      borderColor: NestTheme.pallete.secondary.main,
      borderWidth: 1,
      backgroundColor: 'transparent',
    },
    pressed: {
      backgroundColor: NestTheme.pallete.opacity[300],
    },
    disabled: {
      borderColor: NestTheme.pallete.text.disabled,
    },
  },
  link: {
    main: {
      borderWidth: 0,
      backgroundColor: 'transparent',
    },
    pressed: {
      backgroundColor: NestTheme.pallete.opacity[300],
    },
  },
  text: {
    main: {
      borderWidth: 0,
      backgroundColor: 'transparent',
    },
    pressed: {
      backgroundColor: NestTheme.pallete.opacity[300],
    },
  },
});

export const Button: FC<ButtonProps> = props => {
  const styles = useStyles();
  const {title = '', variant = 'fill', disabled = false, onPress, children, ...otherProps} = props;
  return (
    <Pressable
      disabled={disabled}
      style={({pressed}) => [
        styles.common,
        styles[`${variant}-main`],
        (disabled && styles[`${variant}-disabled`]) || (pressed && styles[`${variant}-pressed`]),
      ]}
      onPress={onPress}
      {...otherProps}>
      {children ? (
        children
      ) : (
        <Text
          align="center"
          variant="bodyBold"
          color={disabled ? 'disabled' : (variant === 'fill' ? 'black' : 'white')}
          underline={variant === 'link'}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};
