import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/product';
import { ProductCard } from '../../src/components/index';

describe('ProductTitle', () => {
  test('should render product title component', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product Title" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show component with product title name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
