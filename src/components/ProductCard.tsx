import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import React, { createContext, CSSProperties } from 'react';
import {
  InitialValues,
  onChangeArgs,
  ProductCartHandlers,
} from '../interfaces/products.interfaces';
import {
  Product,
  ProductContextProps,
} from '../interfaces/products.interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children?: (args: ProductCartHandlers) => JSX.Element | null;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    product,
    onChange,
    value,
    initialValues,
  });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children!({
          count: counter,
          isMaxCountReached: isMaxCountReached,
          maxCount,
          product,
          reset,
          increaseBy,
        })}
      </div>
    </Provider>
  );
};
