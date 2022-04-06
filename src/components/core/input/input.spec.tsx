import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {Input} from './Input.native';
import {NestTheme} from '../../../theme';

afterEach(cleanup);

describe('Input', () => {
  it('should render successfully', () => {
    const activeInput = render(<Input />);
    expect(activeInput).toBeDefined();
  });

  it('should render label, placeholder and value', () => {
    const activeInput = render(<Input label="Label" placeholder="Placeholder" value="Value" />);
    const {getByText, getByPlaceholderText, getByDisplayValue} = activeInput;
    expect(getByText('Label')).toBeTruthy();
    expect(getByPlaceholderText('Placeholder')).toBeTruthy();
    expect(getByDisplayValue('Value')).toBeTruthy();
  });

  it('should change value', () => {
    const activeInput = render(<Input placeholder="Placeholder" />);
    const {getByPlaceholderText, getByDisplayValue} = activeInput;
    fireEvent.changeText(getByPlaceholderText('Placeholder'), 'Value');
    expect(getByDisplayValue('Value')).toBeTruthy();
  });

  it('should be disabled', () => {
    const activeInput = render(<Input disabled placeholder="Placeholder" />);
    const {getByPlaceholderText} = activeInput;
    expect(getByPlaceholderText('Placeholder').props.enabled).toBeFalsy();
  });

  it('should have statuses /ex: error/', () => {
    const activeInput = render(<Input statusType="error" statusText="Error" />);
    const {getByText} = activeInput;
    expect(getByText('Error').props.style).toContainEqual({color: NestTheme.pallete.error.main});
  });
});
