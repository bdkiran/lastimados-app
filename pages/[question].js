import Main from 'layouts/Main';
import Head from 'next/head';
import PostCard from 'components/PostCard'

import style from 'styles/Question.module.css';


const Question = ( data ) => {
    const responsePosts = data.postData.map((item) => {     
        return (
            <PostCard key={item.QPostID} postItem={item}/>
        )
    });

    return (
        <>
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
    let threadSlug = context.params.question
    //Lets combine these into 1 api call
    const res = await fetch(`http://localhost:8000/qthread/${threadSlug}`)
    const data = await res.json()
    const res1 = await fetch(`http://localhost:8000/qposts/${data.data.QThreadID}`)
    const data1 = await res1.json()

    //Error handling???

    let props = {
        threadData: data.data,
        postData: data1.data
    }
    return {props};
}

export default Question;