import { useEffect, useRef, useState } from "react";
import {
  Product,
  onChangeArgs,
  InitialValues,
} from "../interfaces/products.interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newCounter = Math.max(counter + value, initialValues?.minCount || 0);
    if (initialValues?.maxCount) {
      newCounter = Math.min(newCounter, initialValues.maxCount);
    }
    setCounter(newCounter);
    onChange && onChange({ count: newCounter, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
    isMounted.current = true;
  }, [value]);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    reset,
    increaseBy,
  };
};
