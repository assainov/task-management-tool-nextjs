import '@testing-library/jest-dom';
import { render, screen } from 'test-utils/index';
import Page from './page';

// This is just an example.
// Personally speaking, E2E testing is better suited to test the UI
describe('Pages', () => {
  describe('Boards / default', () => {
    it('renders a title', async () => {
      render(<Page />);

      const pageTitle = await screen.getByRole('heading', {
        level: 3,
      });

      expect(pageTitle).toHaveTextContent(/^Task Management Tool$/);
    });
  });
});
