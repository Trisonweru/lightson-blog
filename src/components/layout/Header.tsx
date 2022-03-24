/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { getCategories } from '../../../services/Index';

export default function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => setCategories(result.reverse()));
  }, []);

  return (
    <header className='container mb-8 mx-auto px-10'>
      <div className='border-b border-blue-400 inline-block py-8 w-full'>
        <div className='block md:float-left'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              LightsOn
            </span>
          </Link>
        </div>
        <div className='hidden md:contents md:float-left'>
          {categories.map((cat: any) => (
            <Link key={cat.slug} href={`category/${cat.slug}`}>
              <span className='align-middle cursor-pointer duration-700 font-semibold ml-4 mt-2 text-white transition md:float-right hover:text-gray-400'>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
