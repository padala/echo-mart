import { Category } from '@/models/category';

const getCategories = async (): Promise<Category[]> => {
  // const response = await setTimeout(() => {});
  const categories: Promise<Category[]> = new Promise((resolve) => {
    resolve([
      { name: 'Alcohol', id: 1 },
      { name: 'Bakery', id: 2 },
      { name: 'Dairy & Eggs', id: 3 },
      { name: 'Drinks', id: 4 },
      { name: 'Frozen', id: 5 },
      { name: 'Home & Health', id: 6 },
      { name: 'Meat,Fish,& Protien', id: 7 },
      { name: 'Pantry', id: 8 },
      { name: 'Pet Products', id: 9 },
      { name: 'Prepared', id: 10 },
      { name: 'Snacks', id: 11 },
    ]);
  });
  return categories;
};

export default getCategories;
