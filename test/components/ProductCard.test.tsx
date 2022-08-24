import React from 'react';
import renderer from 'react-test-renderer';
import { product2 } from '../data/product';
import { ProductCard } from '../../src/components/index';

describe('ProductCard', () => {
  test('should render product card component', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <h1>Hi World</h1>}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should increase the counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {({ count, increaseBy }) => (
          <>
            <h1>Hi World</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(+1)}>+</button>
          </>
        )}
      </ProductCard>
    );
    let tree = wrapper.toJSON();
    expect(wrapper.toJSON()).toMatchSnapshot();
    renderer.act(() => {
      (tree as any).children[2].props.onClick();
    });
    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
