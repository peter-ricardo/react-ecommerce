import React from 'react';
import { Link } from 'react-router-dom';
import { ICategory } from '../../types/categories';

type IProps = {
  category: ICategory;
};

function CategoryListItem({ category }: IProps): JSX.Element {
  return (
    <Link to={category.path}>
      <p className="text-white md:hover:bg-grey-dark text-base mt-6 md:mt-0 md:py-3 md:px-2 lg:px-4 transition">
        {category.name}
      </p>
    </Link>
  );
}

export default CategoryListItem;
