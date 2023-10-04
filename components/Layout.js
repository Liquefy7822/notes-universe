// components/Layout.js
import React from 'react';
import { useRouter } from 'next/router';
import styles from './Layout.module.css'; // Import your CSS module

const Layout = ({ children }) => {
  const router = useRouter();

  // Function to handle navigation
  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.appContainer}>
      <nav className={styles.sideMenu}>
        <ul>
          <li>
            <button onClick={() => navigateTo('/')}>Home</button>
          </li>
          <li>
            <button onClick={() => navigateTo('/login')}>Login</button>
          </li>
          <li>
            <button onClick={() => navigateTo('/signup')}>Signup</button>
          </li>
          <li>
            <button onClick={() => navigateTo('/profile')}>Profile</button>
          </li>
          {/* Add more menu items as buttons for other sections */}
        </ul>
      </nav>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
