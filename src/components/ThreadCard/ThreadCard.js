import React from 'react';
import Link from 'next/link';

import style from './ThreadCard.module.css';

const ThreadCard = ({threadItem}) => {
    return (
        <li className={style.threadLinkContainer}>
            <Link href={`/${threadItem.Slug}`} >
                <a>
                    {threadItem.Title}
                </a>
            </Link>
        </li>
    )
}

export default ThreadCard;
