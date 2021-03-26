import { Product } from '../models/product';

describe('Product', () => {
  it('should be defined', () => {
    expect(new Product()).toBeDefined();
  });
});
