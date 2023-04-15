import SubmitButton from '@/src/components/common/SubmitButton';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Chatmate from '../../components/chat/Chatmate';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import store from '../../store';

export default function Chat() {
  const postData = async () => {
    const response = await fetch('https://iriko.testing.huddle01.com/api/v1/create-iframe-room', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'VwTZ4AGTxme9snANex9tep3NwvVMGfYd'
      },
      body: JSON.stringify({ title: 'NetworX' })
    });
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData.data.meetingLink);
      window.open(responseData.data.meetingLink, '_blank')
    } else {
      console.error('Failed to fetch data')
    }
  }
  return (
    <Provider store={store}>
      <Head>
        <title>ETH-Tokyo</title>
        <meta name="description" content="ETH-Tokyo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <div className='mt-8 flex justify-center items-center'>
          <Chatmate />
        </div>
        <div className='mt-40 flex justify-evenly'>
          <SubmitButton name='Start Huddle' w='w-64' color='blue' border='none' onclick={
            postData
          } />
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
