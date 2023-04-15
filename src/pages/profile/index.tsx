import SubmitButton from '@/src/components/common/SubmitButton';
import Detail from '@/src/components/profile/Detail';
import ImageButton from '@/src/components/profile/ImageButton';
import TextInput from '@/src/components/profile/TextInput';
import { setAccount } from '@/src/store/modules/account';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import Title from '../../components/profile/Title';
import Lit from '../../features/profile/litApi';
import store, { AppDispatch, RootState } from '../../store';
import UploadInput from '@/src/components/profile/UploadInput';
import EncryptButton from '@/src/components/profile/EncryptButton';


export default function Profile() {

  return (
    <Provider store={store}>
      <Head>
        <title>ETH-Tokyo</title>
        <meta name="description" content="ETH-Tokyo" />
        <meta name="color-shceme" content="light" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header enable={false} />
      </header>
      <main>
        <div className='mt-24 flex justify-center items-center'>
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
          <UploadInput />
        </div>
        <div className='mt-8 flex justify-evenly  fixed bottom-10 w-full'>
          <EncryptButton name='Save profile' w='w-64' color='btn-primary' />
        </div>
      </main>
    </Provider>
  );
}