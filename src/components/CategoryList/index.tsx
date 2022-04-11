import React, { Children, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import categoriesService from '../../services/categories';

import { setCategories } from '../../store/actions/categories';
import { ICategory } from '../../types/categories';
import CategoryListItem from './CategoryItem';

function CategoryList(): JSX.Element {
  const categories = useSelector((state: RootState) => state.categories.data);
  const dispatch = useDispatch();

  const fetchCategoriesData = (): void => {
    const data = categoriesService.getAll();
    dispatch(setCategories(data));
  };

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  return (
    <div className="bg-grey-normal top-0 z-30 w-full h-full lg:block lg:static">
      <div className="lg:container lg:mx-auto flex flex-col lg:flex-row lg:justify-evenly md:items-center relative">
        {Children.toArray(
          categories.map((category: ICategory) => (
            <CategoryListItem category={category} />
          )),
        )}
      </div>
    </div>
  );
}

export default CategoryList;
