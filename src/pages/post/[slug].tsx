import React from 'react';
import { getPostDetails, getPosts } from 'services/Index';

import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
} from '@/components';
import Seo from '@/components/Seo';
function PostDetails({ post }: any) {
  return (
    <div className='container mb-8 mx-auto px-10'>
      <Seo templateTitle={post.title} description={post.excerpt} />
      <div className='gap-12 grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((cat: any) => cat.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;

export async function getStaticProps({ params }: any) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }: any) => ({ params: { slug } })),
    fallback: false,
  };
}
