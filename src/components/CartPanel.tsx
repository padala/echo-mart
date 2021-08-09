import React from 'react';
import CartIcon from '@/icons/Cart';
import useLocalStorage from '@/utilities/useLocalStorage';
import RightArrowIcon from '@/icons/RightArrow';

const CartPanel: React.FC<{
  // eslint-disable-next-line @typescript-eslint/ban-types
  expandCart: Function;
}> = ({ expandCart }): JSX.Element => {
  const [cart] = useLocalStorage('cart', {});
  const productsIncart = Object.keys(cart).map((cartItem: string, index: number) => {
    return (
      <div key={`cart-product-${index + 1}`} className="flex flex-row mb-5 p-2 items-center bg-white">
        <div className="flex items-center h-20 w-20 mr-3">
          <img
            className="w-full object-contain h-full"
            src={cart[cartItem]?.product?.imageUrl}
            alt={cart[cartItem]?.product?.name}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-xs">
            <b>{cart[cartItem]?.product?.name}</b>
          </div>
          <div className="text-xs pt-2">
            Price: <b>${cart[cartItem]?.product?.price}</b>
          </div>
          <div className="text-xs pt-2">
            quantity: <b>{cart[cartItem]?.quantity}</b>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex w-3/12 p-4 flex-col  h-full">
      <div className="flex items-center justify-between ">
        <div onClick={(e) => expandCart(e)} role="button">
          <RightArrowIcon />
        </div>
        <div> Your Cart</div>
        <div className="flex flex-col items-center">
          <i>
            <CartIcon />
            {cart && Object.keys(cart).length > 0 ? (
              <span className="px-2 py-1 text-xs absolute top-2 right-1 text-red-100 bg-red-600 rounded-full">
                {Object.keys(cart).length}
              </span>
            ) : null}
          </i>
          <span className="text-xs text-gray-500 py-1">Cart</span>
        </div>
      </div>
      <div className="bg-yellow-50 mt-5 p-2 flex-1 overflow-y-auto">
        <div className="flex flex-col">{productsIncart}</div>
      </div>
    </div>
  );
};
export default CartPanel;
