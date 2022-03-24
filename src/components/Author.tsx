/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Author({ author }: any) {
  return (
    <div className='bg-black bg-opacity-80 mb-8 mt-20 p-12 relative rounded-lg text-center'>
      <div className='-top-14 absolute left-0 right-2'>
        <img
          height='100px'
          width='100px'
          alt={author.name}
          className='align-middle rounded-full'
          src={author.photo.url}
        />
      </div>
    </div>
  );
}

export default Author;
