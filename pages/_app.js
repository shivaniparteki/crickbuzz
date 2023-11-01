import '@/styles/globals.css'
import Layout from './Layout'
import Menu from './menu/Menu'
import { useEffect } from 'react';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    const jwtToken = localStorage.getItem('token');
    console.log("jwtToken:", jwtToken);
  }, []);


  return (
    <>
      {/* <Menu /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )


}
