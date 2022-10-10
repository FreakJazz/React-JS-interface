import Head from 'next/head'

export default function About({userName}) {
    return (
        <a>Hello {userName}</a>
    )}

About.getInitialProps = async ({ req }) => {
    return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(response => {
      console.log(response)
      return response
    })
    //Promise.resolve({userName: 'Jazz'})

}