type TextVariantProps = {
  fontSize: number;
  lineHeight: number;
  fontWeight: '800' | '700' | '400' | '600' | '500' | 'normal' | 'bold' | '100' | '200' | '300' | '900' | undefined;
}

interface TextVariantInterface {
  [textVariant: string]: TextVariantProps;
}

export const TextVariants: TextVariantInterface = {
  heading1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '800',
  },
  heading2: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '800',
  },
  bodyBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
  },
  body: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
  },
  body1: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  body2: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
  },

  subheading: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
  },
  subheadingBold: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
};
