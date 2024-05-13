// pages/home.tsx

import React from 'react';
import styles from '../styles/Home.module.css'; // Import CSS styles

const HomePage: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Side Navbar */}
      <div className={styles.sideNavbar}>
        <div className={styles.navbarItem}>
          <a href="#">Home</a>
        </div>
        <div className={styles.navbarItem}>
          <a href="#">My Profile</a>
        </div>
        <div className={styles.navbarItem}>
          <a href="#">My Chats</a>
        </div>
        <div className={styles.navbarItem}>
          <a href="#">Help</a>
        </div>
      </div>
      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Search Bar */}
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." />
        </div>
        {/* Additional content goes here */}
      </div>
    </div>
  );
};

export default HomePage;
