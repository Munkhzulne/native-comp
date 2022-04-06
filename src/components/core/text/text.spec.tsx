import React from 'react';
import {cleanup, render} from '@testing-library/react-native';
import {Text} from './Text.native';

afterEach(cleanup);

describe('Text', () => {
  it('should render successfully', () => {
    const activeText = render(<Text> Hello </Text>);
    const {getByText} = activeText;
    expect(getByText('Hello')).toBeTruthy();
  });
});
