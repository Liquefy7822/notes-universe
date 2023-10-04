// components/Layout.js

import Link from 'next/link';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.appContainer}>
      <div className={styles.sideMenu}>
        <ul>
          <li>
            <Link href="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link href="/Viewnotes">
              <button>View Notes</button>
            </Link>
          </li>
          <li>
            <Link href="/Createnote">
              <button>Create Note</button>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <button>User Profile</button>
            </Link>
          </li>
          <li>
            <Link href="/Settings">
              <button>Settings</button>
            </Link>
          </li>
        </ul>
        <div className={styles.bottomButtons}>
          <Link href="/login">
            <button className={styles.loginButton}>Login</button>
          </Link>
          <Link href="/signup">
            <button className={styles.signupButton}>Signup</button>
          </Link>
        </div>
      </div>
      <div className={styles.mainContent}>{children}</div>
    </div>
  );
}
