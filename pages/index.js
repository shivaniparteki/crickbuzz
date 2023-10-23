import { Inter } from 'next/font/google'
import Image from 'next/image'
import Articles from './components/Articles'
import FeatureMatches from './components/FeatureMatches'
import Specials from './components/Specials'
import News from './components/News'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }) {

  return (
    <main
      className="max-w-[1400px] m-auto flex flex-col px-10 "
    >

      <FeatureMatches />
      <div className='flex'>
        <News posts={posts} />
        <Articles />
        <Specials />
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json();

  //  console.log(posts); 
  return {
    props: {
      posts,
    }
  }
} 
