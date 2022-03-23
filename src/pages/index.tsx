import * as React from 'react';
import { getPosts } from 'services/Index';

import { Categories, PostCard, PostWidget } from '@/components';
import Seo from '@/components/Seo';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage({ posts }: any) {
  return (
    <div className='container mb-8 mx-auto px-10'>
      <Seo templateTitle='LightsOn' />

      <div className='gap-12 grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post: any, index: any) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
