import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {Dropdown} from './';

afterEach(cleanup);

describe('Dropdown', () => {
  it('should render successfully', () => {
    const activeDropdown = render(<Dropdown label="Label" />);
    expect(activeDropdown).toBeDefined();
  });

  it('should render value and options', () => {
    const activeDropdown = render(<Dropdown label="Label" options={['Option 1', 'Option 2']} value="Value" />);
    const {getByText} = activeDropdown;
    fireEvent.press(getByText('Value'));
    expect(getByText('Option 1')).toBeTruthy();
  });

  it('should select value', async () => {
    const activeDropdown = render(<Dropdown label="Label" options={['Option 1', 'Option 2']} value="Value" />);
    const {getByText, queryByText} = activeDropdown;
    fireEvent.press(getByText('Value'));
    await fireEvent.press(getByText('Option 1'));
    const previousValue = queryByText('Value');
    expect(previousValue).toBeNull();
  });
});
