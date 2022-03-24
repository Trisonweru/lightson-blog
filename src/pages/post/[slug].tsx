import React from 'react';
import { Categories, PostCard, PostWidget } from '@/components';
function PostDetails() {
  return (
    <div className='container mb-8 mx-auto px-10'>
      <div className='gap-12 grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-8'>ff</div>
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

export default PostDetails;
