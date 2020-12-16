import Main from 'layouts/Main';
import Head from 'next/head';

import style from 'styles/Question.module.css';


const Question = ( data ) => {
    const responsePosts = data.postData.map((item) => {
        let date = new Date (item.CreatedAt);
        let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
        let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

        let formatedDay = `${day} ${month}, ${year}`
        return (
            <div key={item.QPostID} className={style.reponseCard}>
                <div className={style.responseCardTitle}>
                    <h3>Jose Salvador</h3>
                    <h6>Answered {formatedDay}</h6>
                </div>
                <div>
                    <p>{item.Body}</p>
                </div>
            </div>
        )
    });

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Main>
                <div className={style.questionThreadContainer}>
                    <div className={style.questionTitleContainer}>
                        <h1>{data.threadData.Title}</h1>
                    </div>
                    <div className={style.responsesContainer}>
                        {responsePosts}
                    </div>
                    
                </div>
            </Main>
        </>
    )
}

export async function getServerSideProps(context) {
    let threadID = context.params.question
    const res = await fetch(`http://localhost:8000/qthread/${threadID}`)
    const data = await res.json()
    const res1 = await fetch(`http://localhost:8000/qposts/${threadID}`)
    const data1 = await res1.json()

    let props = {
        threadData: data.data,
        postData: data1.data
    }
    return {props};
}

export default Question;