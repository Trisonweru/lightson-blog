import moment from 'moment';
import { comment } from 'postcss';
import React, { useEffect, useState } from 'react';
import { getComments } from 'services/Index';
function Comments({ slug }: any) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);
  return (
    <>
      {comment.length > 0 && (
        <div className='bg-white mb-8 p-8 pb-12 rounded-lg shadow-lg'>
          <h3 className='border-b font-semibold mb-8 pb-4 text-xl'>
            {comments.length} Comments
          </h3>
          {comments.map((comment: any) => (
            <div
              key={comment.createdAt}
              className='border-b border-gray-100 mb-4 pb-4'
            >
              <p className='mb-4'>
                <span className='font-semibold'>{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className='text-gray-600 w-full whitespace-pre-line'>
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Comments;
