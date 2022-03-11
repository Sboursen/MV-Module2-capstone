import {
  createMockDocument,
  appendElementToMain,
  removeElementFromMain,
} from '../__mocks__/document-mock';
import { getAllCarsCount } from '../../modules/home/home-app';

describe('cars counter', () => {
  it('works for empty container', () => {
    createMockDocument();

    const carCount = getAllCarsCount();

    expect(carCount).toEqual(0);
  });

  it('works for container that contains one item', () => {
    createMockDocument();
    appendElementToMain();

    const carCount = getAllCarsCount();

    expect(carCount).toEqual(1);
  });

  it('works for container that contains multiple items', () => {
    createMockDocument();
    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(() => appendElementToMain());

    const carCount = getAllCarsCount();

    expect(carCount).toEqual(9);
  });

  it('works if some elements were removed in the process', () => {
    createMockDocument();
    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(() => appendElementToMain());
    [1, 2, 3].forEach(() => removeElementFromMain());

    const carCount = getAllCarsCount();

    expect(carCount).toEqual(6);
  });

  it('works with multiple add and remove actions', () => {
    createMockDocument();
    [1, 2, 3, 4].forEach(() => appendElementToMain());
    [1, 2, 3].forEach(() => removeElementFromMain());
    [1, 2].forEach(() => appendElementToMain());
    removeElementFromMain();

    const carCount = getAllCarsCount();

    expect(carCount).toEqual(2);
  });
});
