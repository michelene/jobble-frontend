import React from 'react';
import Logo from './Logo';
function Header() {
  return (
    <header>
      <Logo />
      <div><h1 className="title">Jobble</h1>
      <h5 className="title" id="tagline">Job Posting Management for Job Seekers</h5></div>
    </header>
  );
}

export default Header;
