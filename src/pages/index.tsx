import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useAccount } from 'wagmi';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '../components/common/Header'
import Metamask from '../components/connect/Metamask';

export default function Home() {

  return (
    <div>
      <Head>
        <title>ETH-Tokyo</title>
        <meta name="description" content="ETH-Tokyo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className='mt-60 flex justify-evenly'>
          <div className="w-fit">
            <Metamask />
          </div>
          <div className="w-fit">
            <Metamask />
          </div>
        </div>
      </main>
    </div>
  );

}
