import React from 'react';

function Header() {
  return (
    <div className='mt-10 flex flex-col gap-5 items-center justify-center text-white px-4 md:px-8 lg:px-16'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>
        Your ideal job awaits, start the search
      </h1>
      <p className='text-base md:text-lg lg:text-xl text-center'>
        Get latest job openings that best suits you!
      </p>
    </div>
  );
}

export default Header;
