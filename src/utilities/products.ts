import { Product } from '@/models/product';

const getProducts = async (categories: string[]): Promise<Product[]> => {
  const response = await fetch('./products.json');
  const products = await response.json();
  return categories.length > 0
    ? products.filter((product: Product) => categories.includes(product.category))
    : products;
};

export default getProducts;
