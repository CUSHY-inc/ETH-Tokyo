import SubmitButton from '@/src/components/common/SubmitButton';
import Person3 from '@/src/components/matching/Person3';
import Person4 from '@/src/components/matching/Person4';
import Person5 from '@/src/components/matching/Person5';
import Person6 from '@/src/components/matching/Person6';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import Title from '../../components/common/Title';
import store from '../../store';
import postData from '@/src/features/chat/huddle01';

export default function Home() {

  return (
    <Provider store={store}>
      <Head>
        <title>ETH-Tokyo</title>
        <meta name="description" content="ETH-Tokyo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className='flex flex-col items-center justify-center mt-24'>
          <Title title="Let's connect with people" />
          <div className='mt-16'>
            <SubmitButton color='btn-primary' name='Start Huddle01 with them' onclick={postData} />
          </div>
          <div className='mt-10'>
            <Person6 evaluate={false} />
            <div className='mt-4'>
              <Person4 evaluate={false} />
            </div>
            <div className='mt-4'>
              <Person5 evaluate={false} />
            </div>
            <div className='mt-4 mb-8'>
              <Person3 evaluate={false} />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className='mt-16'>
          <Footer />
        </div>
      </footer>
    </Provider>
  );

}
