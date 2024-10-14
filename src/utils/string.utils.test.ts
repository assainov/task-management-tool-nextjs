import { isEmpty } from './string.utils';

describe('Global utils', () => {
  describe('string.utils', () => {
    describe('isEmpty()', () => {
      it('truthy for undefined', () => {
        expect(isEmpty(undefined)).toBe(true);
      });

      it('truthy for empty', () => {
        expect(isEmpty('')).toBe(true);
      });

      it('false for a normal string', () => {
        expect(isEmpty('hello')).toBe(false);
      });
    });
  });
});
