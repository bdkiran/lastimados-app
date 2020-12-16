import React from 'react';

import styles from './Topbar.module.css';

const Topbar = () => {
    return (
        <header className={styles.siteHeader}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLeft}>
                    <h1>Lastimatos.com</h1>
                </div>
                <div className={styles.headerRight}>
                    <a>Search</a>
                    <a>Account</a>
                    <a>Post</a>
                </div>
            </div>
        </header>
    )
}

export default Topbar;