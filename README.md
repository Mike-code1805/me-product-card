# me-product-card

## Example
```
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from 'me-product-card'
```
```
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, isMaxCountReached, increaseBy, maxCount, count }) => (
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </>
        )}
      </ProductCard>
```
