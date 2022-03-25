import React, { useEffect, useRef, useState } from 'react';

import { submitComment } from '../../services/Index';

function CommentsForm({ slug }: any) {
  const [error, setError] = useState(false);
  const [localStorage, showLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEL = useRef(null);
  const nameEL = useRef<any>(null);
  const emailEL = useRef<any>(null);
  const storeDataEL = useRef<any>(null);

  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment }: any = commentEL.current;
    const { value: name }: any = nameEL.current;
    const { value: email }: any = emailEL.current;
    const { checked: storeData }: any = storeDataEL.current;
    if (!comment || !name || !email) {
      setError(true);
      return;
    }
    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('email');
    }
    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    });
  };
  useEffect(() => {
    nameEL.current.value = window.localStorage.getItem('name');
    emailEL.current.value = window.localStorage.getItem('email');
  });
  return (
    <div className='bg-white mb-8 p-8 pb-12 rounded-lg shadow-lg'>
      <h3 className='border-b font-semibold mb-8 pb-4 text-xl'>
        Leave a reply
      </h3>
      <div className='gap-4 grid grid-cols-1 mb-4'>
        <textarea
          ref={commentEL}
          className='bg-gray-100 outline-none p-4 rounded-lg text-gray-700 w-full focus:ring-gray-200'
          placeholder='Comment'
          name='comment'
        />
      </div>
      <div className='gap-4 grid grid-cols-1 mb-4 lg:grid-cols-2'>
        <input
          ref={nameEL}
          className='bg-gray-100 outline-none px-4 py-2 rounded-lg text-gray-700 w-full focus:ring-gray-200'
          placeholder='Name'
          name='name'
        />
        <input
          ref={emailEL}
          className='bg-gray-100 outline-none px-4 py-2 rounded-lg text-gray-700 w-full focus:ring-gray-200'
          placeholder='Email'
          name='email'
        />
      </div>
      <div className='gap-4 grid grid-cols-1 mb-4'>
        <div>
          <input
            type='checkbox'
            ref={storeDataEL}
            id='storeData'
            name='storeData'
            value='true'
          />
          <label
            className='cursor-pointer ml-2 text-gray-500'
            htmlFor='storeData'
          >
            Save my e-mail and name for next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <p className='text-red-500 text-xs'>All fields are required.</p>
      )}
      <div className='mt-8'>
        <button
          type='button'
          onClick={handleCommentSubmission}
          className='bg-pink-600 cursor-pointer duration-500 ease-in-out inline-block px-8 py-3 rounded-full text-lg text-white transition hover:bg-indigo-900'
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className='float-right font-semibold mt-3 text-green-500 text-sm lg:text-xl'>
            {' '}
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
}

export default CommentsForm;
