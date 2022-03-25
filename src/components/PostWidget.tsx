/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { getRecentPosts, getSimilarPosts } from '../../services/Index';

function PostWidget({ categories, slug }: any) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  return (
    <div className='bg-white mb-8 p-8 rounded-lg shadow-lg'>
      <h3 className='border-b font-semibold mb-8 pb-4 text-xl'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post: any) => (
        <div key={post.title} className='flex items-center mb-4 w-full'>
          <div className='bg-black flex-none rounded-full w-16'>
            <img
              src={post.featuredImage.url}
              className='h-16 mx-auto object-fill rounded-full w-24'
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 text-xs'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`}>
              <span className='cursor-pointer duration-700 text-md transition hover:text-pink-600'>
                {post.title}
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostWidget;
