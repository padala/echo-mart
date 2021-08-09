import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound(): JSX.Element {
  return (
    <div className="flex h-screen mx-auto">
      <div className="flex flex-col h-full items-center justify-center w-full text-center	">
        <img src="/images/logo.png" alt="logo" />

        <div className="text-8xl font-black	">404</div>
        <div className="text-lg py-1">Page not Found</div>
        <Link to="/" className="text-blue-700  inline-flex items-center font-semibold tracking-wide py-1">
          <span className="hover:underline">Go back to Home</span>
          <span className="text-xl ml-2">&#8594;</span>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
