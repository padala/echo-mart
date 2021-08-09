import CheckMarkIcon from '@/icons/CheckMark';
import getCategories from '@/utilities/categories';
import React from 'react';
import { useQuery } from 'react-query';

// eslint-disable-next-line @typescript-eslint/ban-types
const CategoriesFilter: React.FC<{ toggleCategorySelection: Function; selectedCategories: string[] }> = ({
  toggleCategorySelection,
  selectedCategories,
}): JSX.Element => {
  const { data: categories } = useQuery('categories', getCategories);
  return (
    <div className="pt-3">
      <div className="flex flex-wrap">
        {categories?.map((category) => {
          return (
            <div
              role="button"
              className="border rounded-full px-3 py-1 broder-gray-100 text-coolGray-900 mr-2 my-1 cursor-pointer flex"
              key={category.id}
              onClick={() => toggleCategorySelection(category.name)}
            >
              {selectedCategories.includes(category.name) ? <CheckMarkIcon className="pr-2" /> : null}
              {category.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoriesFilter;
