import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Tabs from '../Tabs';

describe('Tabs', () => {
  test('3 tabs items are displayed', () => {
    render(<Tabs />);

    const htmlTab = screen.getByRole('button', { name: /html/i });
    const cssTab = screen.getByRole('button', { name: /css/i });
    const javascriptTab = screen.getByRole('button', { name: /javascript/i });

    expect(htmlTab).toBeInTheDocument();
    expect(cssTab).toBeInTheDocument();
    expect(javascriptTab).toBeInTheDocument();
  });

  test('initialized with default tab if provided', () => {
    render(<Tabs defaultTab='css' />);
    const htmlTab = screen.getByRole('button', { name: /html/i });
    const cssTab = screen.getByRole('button', { name: /css/i });
    const javascriptTab = screen.getByRole('button', { name: /javascript/i });
    expect(cssTab).toHaveClass('tabs__item--active');
    expect(htmlTab).not.toHaveClass('tabs__item--active');
    expect(javascriptTab).not.toHaveClass('tabs__item--active');
  });

  test('initiazlied with first tab when default tab is not provided', () => {
    render(<Tabs />);
    const htmlTab = screen.getByRole('button', { name: /html/i });
    const cssTab = screen.getByRole('button', { name: /css/i });
    const javascriptTab = screen.getByRole('button', { name: /javascript/i });

    expect(htmlTab).toHaveClass('tabs__item--active');
    expect(cssTab).not.toHaveClass('tabs__item--active');
    expect(javascriptTab).not.toHaveClass('tabs__item--active');
  });

  test('active tab item is showing proper style', async () => {
    render(<Tabs />);
    const htmlTab = screen.getByRole('button', { name: /html/i });
    const cssTab = screen.getByRole('button', { name: /css/i });
    const javascriptTab = screen.getByRole('button', { name: /javascript/i });

    await waitFor(async () => await user.click(javascriptTab));
    expect(javascriptTab).toHaveClass('tabs__item--active');
    expect(htmlTab).not.toHaveClass('tabs__item--active');
    expect(cssTab).not.toHaveClass('tabs__item--active');
  });

  test('selecting the tab items displays corresponding content', async () => {
    render(<Tabs />);
    const javascriptTab = screen.getByRole('button', { name: /javascript/i });
    const javacriptContent = screen.getByText(
      'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
    );

    await waitFor(async () => await user.click(javascriptTab));

    expect(javacriptContent).toBeInTheDocument();
  });
});
