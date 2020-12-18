import Head from 'next/head';
import Main from 'layouts/Main';
import Link from 'next/link'

const Profiles = ({ data }) => {
  const allUsers = data.map((item) => {
    return (
      <li key={item.UserID}>
        <h6>{item.Firstname} {item.Lastname}</h6>
      </li>
    )
  });
  return (
    <Main>
      <div>
        <div>
          <h1>All Profiles</h1>
        </div>
        <div>
          <ul>
            {allUsers}
          </ul>
        </div>
      </div>
    </Main>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8000/users`)
  const data = await res.json()
  return { props: data };
}


export default Profiles;