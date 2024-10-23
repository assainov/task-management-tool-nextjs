/* eslint-disable no-promise-executor-return */
import '@testing-library/jest-dom';
import { render, screen, waitFor } from 'test-utils/index';
import { resolveComponent } from 'test-utils/resolveComponent';
import { SiteLocale } from 'constants/i18n.constants';
import Page from './page';
import { TaskStatus } from '@/types/tasks.types';

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

const mockData = [
  {
    id: 'task1',
    status: TaskStatus.Done,
    title: 'Project initiation and planning',
    createdAt: new Date().toUTCString(),
  },
];

// This is just an example.
// Personally speaking, E2E testing is better suited to test the UI
describe('Pages', () => {
  describe('Boards / default', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ tasks: mockData }),
      } as Response));
    });

    it('renders a title in English', async () => {
      const PageResolved = await resolveComponent(Page, { params: { locale: SiteLocale.En } });

      render(<PageResolved />);

      await waitFor(() => {
        const pageTitle = screen.getByRole('heading', {
          level: 3,
        });

        expect(pageTitle).toBeInTheDocument();

        expect(pageTitle).toHaveTextContent(/^Task Management Tool$/);
      });
    });
  });
});
