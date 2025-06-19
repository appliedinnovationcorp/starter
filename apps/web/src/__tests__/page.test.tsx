import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import { greet } from '@monorepo/ui';

vi.mock('@/lib/trpc', () => ({
  trpc: {
    greet: { useQuery: () => ({ data: 'Hello, World!' }) },
    getUsers: { useQuery: () => ({ data: [] }) },
  },
}));

describe('Home Page', () => {
  it('renders greeting', () => {
    render(<Home />);
    expect(screen.getByText(greet('World'))).toBeInTheDocument();
  });
});