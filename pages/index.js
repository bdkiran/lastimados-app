import Head from 'next/head';
import Main from 'layouts/Main';

const Home = () => {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Main>
          <div>
            <p>We made it or some shit....</p>
          </div>
        </Main>
      </>
    )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8000/qthreads`)
  const data = await res.json()

  return {props: data};
}

export default Home;
