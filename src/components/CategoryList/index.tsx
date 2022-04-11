import React, { Children, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import categoriesService from '../../services/categories';

import { setCategories } from '../../store/actions/categories';
import { ICategory } from '../../types/categories';
import close from '../../assets/header/close.svg';
import CategoryListItem from './CategoryItem';

type IProps = {
  menuOpened: boolean;
  closeMenu: () => void;
};

function CategoryList({ menuOpened = true, closeMenu }: IProps): JSX.Element {
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
    <div
      className={`bg-grey-normal ${
        menuOpened ? 'absolute' : 'hidden md:translate-x-0'
      } top-0 z-30 w-5/6 md:w-full h-full md:block md:static`}
    >
      <div className="md:container md:mx-auto flex flex-col md:flex-row md:justify-evenly md:items-center relative">
        {menuOpened && (
          <button
            type="button"
            onClick={closeMenu}
            className="top-3 right-3 absolute md:hidden"
          >
            <img src={close} alt="Close Button" />
          </button>
        )}
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
