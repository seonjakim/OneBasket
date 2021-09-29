import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from './Register';
import userEvent from '@testing-library/user-event';

// let getByTestId;
// beforeEach(() => {});
describe('textfield input check', () => {});

test('check all the contents are filled when the submit button is clicked', () => {
  render(<Register />);
  userEvent.type(
    screen.getByPlaceholderText(/YYYYMMDD형식으로 입력해주세요./i),
    '19891115',
  );
  screen.getByRole('');
  // expect(screen.findByRole('button', { type: /button/i })).toBeDisabled();
});
