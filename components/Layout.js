// components/Layout.js
import React from 'react';
import Link from 'next/link';
import styles from './Layout.module.css'; // Import your CSS module

const Layout = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.sideMenu}>
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
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;

