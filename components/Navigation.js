import React from 'react'
import Image from 'next/image'
//CSS
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.navContainer}>
        <img src='/images/ob-logo-white.png' />
        <nav>
          <ul>
            <li>Find A Job</li>
          </ul>
        </nav>
    </div>
  )
}

export default Navigation