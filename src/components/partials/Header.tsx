import React from 'react';
import BookIcon from '@/icons/Book';
import CartIcon from '@/icons/Cart';
import ProfileIcon from '@/icons/Profile';
import SearchIcon from '@/icons/Search';
import SettingsIcon from '@/icons/Settings';
import ShopIcon from '@/icons/Shop';
import { Product } from '@/models/product';

const Header: React.FC<{
  // eslint-disable-next-line @typescript-eslint/ban-types
  cartClicked: Function;
  isCartExpanded: boolean;
  cartData: Record<string, { product: Product; quantity: number }>;
}> = ({ cartClicked, isCartExpanded, cartData }): JSX.Element => {
  return (
    <nav className="shadow-md bg-white">
      <div className="flex justify-between p-3 items-center">
        <div className="flex w-6/12 items-center">
          <div className="pr-5">
            <img src="/images/logo.png" alt="logo" />
          </div>

          <div className="w-9/12">
            <label htmlFor="search" className="relative text-gray-400 focus-within:text-gray-600 block">
              <i className="pointer-events-none w-8 h-8 absolute top-1/3 right-1">
                <SearchIcon />
              </i>
              <input
                type="text"
                name="search"
                placeholder="Search Jupiter"
                className="w-full form-input border-gray-200 placeholder-gray-200"
              />
            </label>
          </div>
        </div>

        <div className="pl-7 flex justify-between items-center">
          <div className="bg-red-400 text-white rounded p-2 text-sm mr-6">Get 20$ Off</div>
          <div className="flex items-center">
            <div className="flex flex-col items-center px-2">
              <i>
                <BookIcon />
              </i>
              <span className="text-xs text-gray-500 py-1">Recipes</span>
            </div>
            <div className="flex flex-col items-center px-2">
              <i>
                <ShopIcon />
              </i>
              <span className="text-xs text-gray-500 py-1">Shop</span>
            </div>
            <div className="flex flex-col items-center px-2">
              <i>
                <ProfileIcon />
              </i>
              <span className="text-xs text-gray-500 pb-1">Profile</span>
            </div>
            <div className="flex flex-col items-center px-2">
              <i>
                <SettingsIcon />
              </i>
              <span className="text-xs text-gray-500 pt-2 pb-1">Settings</span>
            </div>
            {!isCartExpanded ? (
              <div onClick={() => cartClicked()} role="button">
                <div className="flex flex-col items-center px-2">
                  <i className="relative">
                    <CartIcon />
                    {cartData && Object.keys(cartData).length > 0 ? (
                      <span className="px-2 py-1 text-xs absolute -top-2 -right-3 text-red-100 bg-red-600 rounded-full">
                        {Object.keys(cartData).length}
                      </span>
                    ) : null}
                  </i>
                  <span className="text-xs text-gray-500 py-1">Cart</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
