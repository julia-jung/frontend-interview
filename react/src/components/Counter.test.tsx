import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './Counter';

test('render a button and increment count', async () => {
  render(<Counter />);
  const button = screen.getByRole('button', {
    name: 'Clicks: 0',
  });

  expect(button).toBeInTheDocument();

  await waitFor(async () => {
    await user.click(button);
    await user.click(button);
    await user.click(button);
    expect(button).toHaveTextContent('Clicks: 3');
  });
});
