import CartPanel from '@/components/CartPanel';
import Spinner from '@/components/Spinner';
import { Product } from '@/models/product';
import useLocalStorage from '@/utilities/useLocalStorage';
import React, { MouseEvent, useState } from 'react';
import { useQuery } from 'react-query';
import Header from '../../components/partials/Header';
import ProductCard from '../../components/ProductCard';
import getProducts from '../../utilities/products';
import CategoriesFilter from './CategoriesFilter';

function Home(): JSX.Element {
  const [isCartExpanded, setIsCartExpanded] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { data, isLoading } = useQuery(['proucts', { selectedCategories }], () => getProducts(selectedCategories));
  const [cart, setCart] = useLocalStorage('cart', {});
  const expandCart = (): void => {
    setIsCartExpanded(!isCartExpanded);
  };
  const addProductToCart = (e: MouseEvent<HTMLElement>, product: Product): void => {
    setCart({
      ...cart,
      [`${product.productId.value}`]: {
        quantity: cart[product.productId.value] ? cart[product.productId.value].quantity + 1 : 1,
        product,
      },
    });
  };
  const removeProductFromCart = (e: MouseEvent<HTMLElement>, product: Product): void => {
    const requiredQunatity = cart[product.productId.value] ? cart[product.productId.value].quantity - 1 : 0;

    if (cart[`${product.productId.value}`] && requiredQunatity === 0) {
      delete cart[`${product.productId.value}`];
      setCart({ ...cart });
    } else {
      setCart({
        ...cart,
        [`${product.productId.value}`]: {
          quantity: requiredQunatity,
          product,
        },
      });
    }
  };
  const toggleCategorySelection = (category: string): void => {
    if (selectedCategories.includes(category)) {
      const categories = selectedCategories.filter((item) => item !== category);
      setSelectedCategories(categories);
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  return (
    <>
      <div className="flex h-screen">
        <div
          className={`flex flex-col h-screen ${
            isCartExpanded ? 'w-9/12 border-r-2 border-gray-100' : 'w-full border-none'
          }`}
        >
          <Header cartClicked={expandCart} isCartExpanded={isCartExpanded} cartData={cart} />
          <div className="flex-1 overflow-y-auto">
            <div className="container mx-auto w-10/12">
              <div className="pt-6 text-sm font-bold">Shop by category</div>
              <CategoriesFilter
                toggleCategorySelection={toggleCategorySelection}
                selectedCategories={selectedCategories}
              />
              {isLoading ? (
                <Spinner className="h-64 w-64 mx-auto my-32" />
              ) : (
                <div className="pt-7">
                  <div className="flex flex-wrap justify-around">
                    {data?.map((product) => (
                      <ProductCard
                        product={product}
                        addProductToCart={addProductToCart}
                        removeProductFromCart={removeProductFromCart}
                        key={product.productId.value}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {isCartExpanded ? <CartPanel expandCart={expandCart} /> : null}
      </div>

      {/* <div className="text-center">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="text-blue-200" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div> */}
    </>
  );
}

export default Home;
