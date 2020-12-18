import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Topbar.module.css';

const Topbar = () => {
    return (
        <header className={styles.siteHeader}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLeft}>
                    <Link href={"/"} >
                        <a>
                            <Image
                                src="/logo.png"
                                alt="Lastimados.com logo"
                                width={150}
                                height={50}
                            />
                        </a>
                    </Link>
                </div>
                <div className={styles.headerRight}>
                    <Link href={"/"} >
                        <a className={styles.accountButton}>Account</a>
                    </Link>
                    
                    <Link href={"/"} >
                        <a className={styles.postButton}>Post</a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Topbar;