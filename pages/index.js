import Image from 'next/image'
import { Inter } from 'next/font/google'
import FeatureMatches from './components/FeatureMatches'
import News from './components/News'
import Articles from './components/Articles'
import Specials from './components/Specials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className="max-w-[1400px] m-auto flex flex-col px-10"
    >

      <FeatureMatches />
      <div className='flex'>
        <News />
        <Articles />
        <Specials/>
      </div>
    </main>
  )
}
