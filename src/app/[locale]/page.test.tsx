import '@testing-library/jest-dom';
import { SiteLocale } from 'constants/i18n.constants';
import { render, screen } from 'test-utils/index';
import { resolveComponent } from 'test-utils/resolveComponent';
import Page from './page';

// This is just an example.
// Personally speaking, E2E testing is better suited to test the UI.
describe('Pages', () => {
  describe('Home Page', () => {
    it('renders a link in English', async () => {
      const PageResolved = await resolveComponent(Page, { params: { locale: SiteLocale.En } });

      render(<PageResolved />);

      const enterLink = await screen.getByRole('link', {
        name: /enter the app/i,
      });

      expect(enterLink).toHaveAttribute('href', '/boards/default');
    });
  });
});
