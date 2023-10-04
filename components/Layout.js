// components/Layout.js
import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <nav className="side-menu">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          {/* Add more menu items for other sections */}
        </ul>
      </nav>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
