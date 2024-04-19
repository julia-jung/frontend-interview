import { act, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import UncontrolledForm from '../UncontrolledForm';

const handlers = [
  http.post('https://www.greatfrontend.com/api/questions/contact-form', () => {
    return HttpResponse.text(
      'Thank you, your message was received successfully!'
    );
  }),
];

describe('Uncontrolled Form', () => {
  test('render 3 inputs and send button', () => {
    render(<UncontrolledForm />);
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', {
      name: /send/i,
    });

    expect(inputs).toHaveLength(3);
    expect(button).toBeInTheDocument();
  });

  test('clear inputs after submit the form', async () => {
    const server = setupServer(...handlers);
    server.listen();
    render(<UncontrolledForm />);
    const jsdomAlert = window.alert;
    window.alert = () => {};
    // const [nameInput, emailInput, messageInput] =
    //   screen.getAllByRole('textbox');
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const messageInput = screen.getByRole('textbox', {
      name: /message/i,
    });
    await user.click(nameInput);
    await user.keyboard('julia');
    await user.click(emailInput);
    await user.keyboard('julia@gmail.com');
    await user.click(messageInput);
    await user.keyboard('Hi, I am julia!');

    const button = screen.getByRole('button', { name: /send/i });
    await user.click(button);
    await act(async () => await pause());

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');

    window.alert = jsdomAlert;
    server.resetHandlers();
    server.close();
  });
});

const pause = () => new Promise((resolve) => setTimeout(resolve, 500));
