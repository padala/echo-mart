import React from 'react';
import PlusIcon from '@/icons/Plus';
import { Product } from '@/models/product';
import useLocalStorage from '@/utilities/useLocalStorage';
import MinusIcon from '@/icons/Minus';

// eslint-disable-next-line @typescript-eslint/ban-types
const ProductCard: React.FC<{ product: Product; addProductToCart: Function; removeProductFromCart: Function }> = ({
  product,
  addProductToCart,
  removeProductFromCart,
}): JSX.Element => {
  const [cart] = useLocalStorage('cart', {});

  return (
    <div className="text-center w-3/12 p-2 mb-5">
      <div className="flex items-center h-64">
        <img className="w-full object-contain h-full" src={product.imageUrl} alt={product.name} />
      </div>
      <div className="px-6 pt-5">
        <span className="text-sm text-coolGray-900 pt-2 line-clamp h-12">{product.name}</span>
        <div className="text-sm text-gray-500 pt-2 h-6"> {product.subtitle}</div>
        <div className="text-base font-extrabold pt-2"> ${product.price}</div>
      </div>
      {cart[product.productId.value] && cart[product.productId.value].quantity > 0 ? (
        <div className=" m-2 flex items-center text-center justify-around">
          <div
            role="button"
            className=" px-3 py-3 border border-gray-300 flex-row items-center text-center justify-center"
            onClick={(e) => removeProductFromCart(e, product)}
          >
            <i>
              <MinusIcon />{' '}
            </i>{' '}
          </div>
          <div className="text-blue-400 pl-1  flex-row">{cart[product.productId.value].quantity} in Cart</div>

          <div
            role="button"
            className=" px-3 py-3 border border-gray-300 flex-row items-center text-center justify-center"
            onClick={(e) => addProductToCart(e, product)}
          >
            <i>
              <PlusIcon />{' '}
            </i>{' '}
          </div>
        </div>
      ) : (
        <div
          role="button"
          className="px-3 py-2 m-2 border border-gray-300 flex items-center text-center justify-center"
          onClick={(e) => addProductToCart(e, product)}
        >
          <i>
            <PlusIcon />{' '}
          </i>{' '}
          <span className="text-blue-400 pl-1">Add to Cart</span>
        </div>
      )}
    </div>
  );
};
export default ProductCard;
