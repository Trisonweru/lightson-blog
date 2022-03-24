/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

function Author({ author }: any) {
  return (
    <div className='bg-black bg-opacity-80 mb-8 mt-20 p-12 relative rounded-lg text-center'>
      <div className='-top-14 absolute left-0 right-0'>
        <Image
          height='100px'
          width='100px'
          unoptimized
          alt={author.name}
          className='align-middle rounded-full'
          src={author.photo.url}
        />
      </div>
      <h3 className='font-bold my-4 text-white text-xl'>{author.name}</h3>
      <p className='text-md text-white'>{author.bio}</p>
    </div>
  );
}

export default Author;
