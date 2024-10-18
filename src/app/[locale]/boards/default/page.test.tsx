import '@testing-library/jest-dom';
import { render, screen } from 'test-utils/index';
import { resolveComponent } from 'test-utils/resolveComponent';
import { SiteLocale } from 'constants/i18n.constants';
import Page from './page';

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: () => null,
      refresh: () => null,
    };
  },
  usePathname() {
    return {
      replace: () => null,
    };
  },
}));

// This is just an example.
// Personally speaking, E2E testing is better suited to test the UI
describe('Pages', () => {
  describe('Boards / default', () => {
    it('renders a title in English', async () => {
      const PageResolved = await resolveComponent(Page, { params: { locale: SiteLocale.En } });

      render(<PageResolved />);

      const pageTitle = await screen.getByRole('heading', {
        level: 3,
      });

      expect(pageTitle).toHaveTextContent(/^Task Management Tool$/);
    });
  });
});
