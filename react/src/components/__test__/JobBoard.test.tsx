import { render, screen, act } from '@testing-library/react';
import JobBoard from '../JobBoard';
import { createServer } from '../../test/server';

describe.only('Job board', () => {
  createServer([
    {
      path: 'https://hacker-news.firebaseio.com/v0/jobstories.json',
      resolver: () => [1, 2, 3, 4, 5, 6],
    },
    {
      path: 'https://hacker-news.firebaseio.com/v0/item/:id.json',
      resolver: ({ params }: { params: Record<string, unknown> }) => {
        return {
          by: 'julia',
          id: params.id,
          time: 0,
          title: 'Sample Job',
        };
      },
    },
  ]);
  test('display initial loading message', () => {
    render(<JobBoard />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  test.only('job posting rendered correctly', async () => {
    render(<JobBoard />);
    await act(async () => await pause());
  });
  test('render link for a job with url', () => {});
  test('hide button when no more job to load', () => {});
});

const pause = () => new Promise((resolve) => setTimeout(resolve, 1000));
