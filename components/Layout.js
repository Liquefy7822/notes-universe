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
            <button>
              <Link href="/">Home</Link>
            </button>
          </li>
          <li>
            <button>
              <Link href="/login">Login</Link>
            </button>
          </li>
          <li>
            <button>
              <Link href="/signup">Signup</Link>
            </button>
          </li>
          <li>
            <button>
              <Link href="/profile">Profile</Link>
            </button>
          </li>
          {/* Add more menu items as buttons for other sections */}
        </ul>
      </nav>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
