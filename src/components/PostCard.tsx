/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import moment from 'moment';
import Link from 'next/link';
import React from 'react';

function PostCard({ post }: any) {
  return (
    <div className='bg-white mb-8 p-0 pb-12 rounded-lg shadow-lg lg:p-8'>
      <div className='mb-6 overflow-hidden pb-80 relative shadow-md'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='absolute h-80 object-fill object-top rounded-t-lg shadow-lg w-full lg:rounded-lg'
        />
      </div>
      <h1 className='cursor-pointer duration-700 font-semibold mb-8 text-3xl text-center transition hover:text-pink-600'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block items-center justify-center mb-8 space-y-4 text-center w-full lg:flex lg:flex-col'>
        <div className='flex items-center justify-center mb-4 mr-8 w-full lg:mb-0 lg:w-auto'>
          <img
            alt={post.author.name}
            height='30px'
            width='30px'
            className='align-middle rounded-full'
            src={post.author.photo.url}
          />
          <p className='align-middle inline ml-2 text-gray-700 text-lg'>
            {post.author.name}
          </p>
        </div>
        <div className='font-medium text-gray-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 inline mr-2 text-pink-500 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
            />
          </svg>
          <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
        <p className='font-normal mb-8 px-4 text-base text-center text-gray-700 lg:px-20'>
          {post.excerpt}
        </p>
        <div className='text-center'>
          <Link href={`/post/${post.slug}`}>
            <span className='bg-pink-600 cursor-pointer duration-500 font-medium inline-block px-8 py-3 rounded-full text-lg text-white transform transition hover:-translate-y-1'>
              Continue Reading
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
