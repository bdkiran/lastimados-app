import Main from 'layouts/Main';
import ThreadCard from 'components/ThreadCard';

const Questions = ({ data }) => {
    const allThreads = data.map((item) => {
        return (
            <ThreadCard key={item.QThreadID} threadItem={item} />
        )
    });

    return (
        <Main>
            <div>
                <div>
                    <h1>All Questions</h1>
                </div>
                <div>
                    <ul>
                        {allThreads}
                    </ul>
                </div>
            </div>
        </Main>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:8000/qthreads`)
    const data = await res.json()
    return { props: data };
}


export default Questions;