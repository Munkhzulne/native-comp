import _ from 'lodash';
import {useState} from 'react';
import {useEffect} from 'react';
import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {DarkColor} from './colors';
import {baseSpace, spacing} from './spacing';
import {TextVariants} from './typography';

export const NestTheme = {
  baseSpace,
  pallete: {...DarkColor},
  typography: {...TextVariants},
  spacing: spacing,
};

export type CSSNativeProperties = ViewStyle | TextStyle | ImageStyle;

export interface Css {
  [prop: string]: CSSNativeProperties;
}
type UseStylesType = () => Css;

export const makeStyles = (styleObject: object): UseStylesType => {
  const styledObject: {[key: string]: CSSNativeProperties} = {};

  const generateStyles = (p: string, o: object): void => {
    if (typeof o === 'object') {
      type ObjectType = keyof typeof o;
      Object.keys(o).map(key => {
        const path = p === '' ? `${key}` : `${p}-${key}`;
        if (_.values(o[key as ObjectType]).every(value => typeof value === 'string' || typeof value === 'number')) {
          styledObject[path] = o[key as ObjectType];
        } else {
          generateStyles(`${path}`, o[key as ObjectType]);
        }
      });
    }
  };

  return (): Css => {
    const [styles, setStyles] = useState<Css>({});
    useEffect(() => {
      generateStyles('', styleObject);
      setStyles(styledObject);
    }, []);
    return styles;
  };
};
