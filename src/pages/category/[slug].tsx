import { useRouter } from 'next/router';
import React from 'react';

import Seo from '@/components/Seo';

import { Categories, Loader, PostCard } from '../../components';
import { getCategories, getCategoryPost } from '../../../services/Index';

const CategoryPost = ({ posts }: any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className='container mb-8 mx-auto px-10'>
      <Seo templateTitle='LightOn' />
      <div className='gap-12 grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post: any, index: any) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }: any) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }: any) => ({ params: { slug } })),
    fallback: true,
  };
}
