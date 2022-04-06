import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {Button} from './Button.native';

afterEach(cleanup);

describe('Button', () => {
  it('should render successfully', () => {
    const activeButton = render(<Button title="button" />);
    expect(activeButton).toBeDefined();
  });

  it('should render correct text', () => {
    const activeButton = render(<Button title="button" />);
    const {getByText} = activeButton;
    expect(getByText('button')).toBeTruthy();
  });

  it('should call function on press', () => {
    const buttonCallbackFunction = jest.fn();
    const activeButton = render(<Button title="button" onPress={buttonCallbackFunction} />);
    const {getByText} = activeButton;
    fireEvent.press(getByText('button'));
    expect(buttonCallbackFunction.mock.calls.length).toBe(1);
  });

  it('should disables', () => {
    const activeButton = render(<Button title="button" disabled />);
    const {getByText} = activeButton;
    expect(getByText('button')).toBeDisabled();
  });
});
