import React from 'react';
import style from './PostCard.module.css';
import Image from 'next/image';

const PostCard = ({ postItem }) => {
    let date = new Date(postItem.CreatedAt);
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    let formatedDay = `${day} ${month}, ${year}`

    return (
        <div className={style.reponseCard}>
            <div className={style.responseCardTitle}>
                <div className={style.reponseCardIconContainer}>
                    <Image
                        src="/icon.jpeg"
                        alt="profileIcon"
                        width={30}
                        height={30}
                    />
                </div>
                <div className={style.responseCardTitleText}>
                    <h3>{postItem.Firstname} {postItem.Lastname}</h3>
                    <h6>Answered {formatedDay}</h6>
                </div>
            </div>
            <div>
                <p>{postItem.Body}</p>
            </div>
        </div>
    )
}

export default PostCard;
