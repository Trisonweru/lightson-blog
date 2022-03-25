/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { getCategories } from '../../services/Index';
function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => setCategories(result.reverse()));
  }, []);
  return (
    <div className='bg-white mb-8 p-8 pb-12 rounded-lg shadow-lg'>
      <h3 className='border-b font-semibold mb-8 pb-4 text-xl'>Categories</h3>
      {categories.map((category: any) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='block cursor-pointer duration-700 mb-3 pb-3 text-md transition hover:text-pink-600'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
