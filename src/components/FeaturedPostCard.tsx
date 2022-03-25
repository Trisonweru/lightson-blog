/* eslint-disable @next/next/link-passhref */
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedPostCard = ({ post }: any) => (
  <div className='h-72 relative'>
    <div
      className='absolute bg-center bg-cover bg-no-repeat h-72 inline-block rounded-lg shadow-md w-full'
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className='absolute bg-center bg-gradient-to-b from-gray-400 h-72 opacity-50 rounded-lg to-black via-gray-700 w-full' />
    <div className='absolute flex flex-col h-full items-center justify-center p-4 rounded-lg w-full'>
      <p className='font-semibold mb-4 text-shadow text-white text-xs'>
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      <p className='font-semibold mb-4 text-2xl text-center text-shadow text-white'>
        {post.title}
      </p>
      <div className='absolute bottom-5 flex items-center justify-center w-full'>
        <Image
          unoptimized
          alt={post.author.name}
          height='30px'
          width='30px'
          className='align-middle drop-shadow-lg rounded-full'
          src={post.author.photo.url}
        />
        <p className='align-middle font-medium inline ml-2 text-shadow text-white'>
          {post.author.name}
        </p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className='absolute cursor-pointer h-full w-full' />
    </Link>
  </div>
);

export default FeaturedPostCard;
