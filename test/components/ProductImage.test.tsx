import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from '../data/product';
import { ProductCard } from '../../src/components/index';

describe('ProductImage', () => {
  test('should render product image component', () => {
    const wrapper = renderer.create(
      <ProductImage img="./imagen-test-product.jpg" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show component with product image url name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
