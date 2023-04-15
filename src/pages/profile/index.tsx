import Head from 'next/head';
import Header from '../../components/common/Header'
import Metamask from '../../components/connect/Metamask';
import Email from '../../components/connect/Email';
import Title from '../../components/profile/Title';
import { Provider } from 'react-redux';
import store from '../../store';
import Footer from '../../components/common/Footer';
import MetaMaskSDK from '@metamask/sdk';
import ImageButton from '@/src/components/profile/ImageButton';
import TextInput from '@/src/components/profile/TextInput';
import SubmitButton from '@/src/components/common/SubmitButton';
import Detail from '@/src/components/profile/Detail';
import UploadInput from '@/src/components/profile/UploadInput';

export default function Profile() {

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
            <Title />
          </div>
          <div className='mt-8 flex justify-center'>
            <div className="w-fit">
              <ImageButton />
            </div>
          </div>
          <div className='mt-8 flex justify-center'>
              <TextInput />
          </div>
          <div className='mt-8 flex justify-center'>
              <TextInput h='h-48' placeholder='Write your profile here' />
          </div>
          <div className='mt-8 flex justify-center'>
            <Detail />
          </div>
          <div className='mt-8 flex justify-center'>
              <UploadInput placeholder='Upload your resume' />
          </div>
          <div className='mt-8 flex justify-evenly'>
              <SubmitButton name='Save profile' w='w-64' color='btn-primary' />
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