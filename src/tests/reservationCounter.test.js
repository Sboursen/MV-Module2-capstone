const modules = require('../modules/reservations/reservation-counter');

describe('String Tests', () => {
  test('Get String Length',
    () => expect(modules.stringLength('hello')).toBe(5));

  test('String Length less than 1', () => {
    expect(() => modules.stringLength('')).toThrowError('String is empty');
  });
});