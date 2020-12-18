import Main from 'layouts/Main';
import ThreadCard from 'components/ThreadCard';
import Link from 'next/link';

import style from 'styles/Home.module.css'

const Home = ({ data }) => {
  const allThreads = data.map((item) => {
    return (
      <ThreadCard key={item.QThreadID} threadItem={item}/>
    )
  });

  return (
    <>
      <Main>
        <div className={style.popularQuestionsContainer}>
          <div className={style.popularQuestionsTitleContainer}>
            <h1>Popular Questions</h1>
            <Link href="/questions">
              <a>{'>'} See all questions</a>
            </Link>
          </div>
          <div>
            <ul>
              {allThreads}
            </ul>
          </div>
        </div>
        <div className={style.popularQuestionsContainer}>
          <div className={style.popularQuestionsTitleContainer}>
            <h1>Popular Profiles</h1>
            <Link href="/profiles">
              <a>{'>'} See all profiles</a>
            </Link>
          </div>
          <div>
            <ul>
              <li/>
            </ul>
          </div>
        </div>
      </Main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8000/qthreads`)
  const data = await res.json()
  return { props: data };
}

export default Home;
