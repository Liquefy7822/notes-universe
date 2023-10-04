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
      <main className={styles.mainContent}>{children}</main>
      <nav className={styles.sideMenu}>
        <ul>
          <li>
            <button onClick={() => navigateTo('/')}>Home</button>
          </li>
          <li>
            <button onClick={() => navigateTo('/profile')}>Profile</button>
          </li>
          {/* Add more menu items as buttons for other sections */}
        </ul>
      </nav>
      <div className={styles.bottomButtons}>
        <button className={styles.loginButton} onClick={() => navigateTo('/login')}>
          Login
        </button>
        <button className={styles.signupButton} onClick={() => navigateTo('/signup')}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Layout;

