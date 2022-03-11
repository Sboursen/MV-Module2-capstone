import commentCounter from '../modules/comments/comment-counter';

describe('Test length of an array', () => {
  test('Test array should return Length in number', () => {
    const array = ['jerry', 'sbourne', 'nwafrika'];
    expect(commentCounter(array)).not.toEqual(array);
  });

  test('Get array Length', () => {
    const array = ['jerry', 'sbourne', 'nwafrika'];
    expect(commentCounter(array)).toBe(3);
  });

  test('Get array Length', () => {
    const array = ['jerry', 'sbourne', 'nwafrika', 123, 'osborne', 'esther'];
    expect(commentCounter(array)).toBe(6);
  });

  test('Get array Length', () => {
    const array = ['Jane'];
    expect(commentCounter(array)).toBe(1);
  });

  test('Get empty array Length', () => {
    const array = [];
    expect(commentCounter(array)).toBe(0);
  });
});
