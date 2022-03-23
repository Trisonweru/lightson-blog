import * as React from 'react';

import UnstyledLink from '../links/UnstyledLink';

export default function Header() {
  const categories = [
    { name: 'Data Science', slug: 'javascript' },
    { name: 'Web Development', slug: 'reactjs' },
  ];
  return (
    <header className='container mb-8 mx-auto px-10'>
      <div className='border-b border-blue-400 inline-block py-8 w-full'>
        <div className='block md:float-left'>
          <UnstyledLink href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              LightsOn
            </span>
          </UnstyledLink>
        </div>
        <div className='hidden md:contents md:float-left'>
          {categories.map((cat, index) => (
            <UnstyledLink key={index} href={`category/${cat.slug}`}>
              <span className='align-middle cursor-pointer font-semibold ml-4 mt-2 text-white md:float-right'>
                {cat.name}
              </span>
            </UnstyledLink>
          ))}
        </div>
      </div>
    </header>
  );
}
