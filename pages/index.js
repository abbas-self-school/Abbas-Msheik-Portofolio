import Head from 'next/head';
import Portofolio from '../components/all-portofolio';


export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Head>
        <title>Abbas Msheik Portofolio</title>
        <link rel="icon" href="/imgs/portfolio-icon.jpg" />
      </Head>

      <Portofolio />
    </div>
  )
}
