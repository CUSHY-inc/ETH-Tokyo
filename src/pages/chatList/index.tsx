import Head from 'next/head';
import Header from '../../components/common/Header'
import Title from '../../components/chatList/Title';
import { Provider, useSelector } from 'react-redux';
import store from '../../store';
import Describe from '../../components/matching/Describe';
import Footer from '../../components/common/Footer';
import Property from '../../components/matching/Property';
import PersonMatch from '@/src/components/matching/PersonMatch';
import { RootState } from '../../store';
import SubmitButton from '@/src/components/common/SubmitButton';
import ChatList from '@/src/components/chatList/ChatList';

const Page = () => {
    return (
        <Provider store={store}>
        <Head>
            <title>ETH-Tokyo</title>
            <meta name="description" content="ETH-Tokyo" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
            <div className='flex justify-center mt-8'>
                <Title />
            </div>
            <div className='flex-col items-center justify-center mt-16 ml-8'>
                <ChatList image='/images//forerigner.webp' name='AJ Hewitt' explain='🤝 Ryounosuke, please meet' date='Mar 1' />
                <div className='mt-8'>
                    <ChatList image='/images//forerigner.webp' name='AJ Hewitt' explain='🤝 Ryounosuke, please meet' date='Mar 1' />
                </div>
                <div className='mt-8'>
                    <ChatList image='/images//forerigner.webp' name='AJ Hewitt' explain='🤝 Ryounosuke, please meet' date='Mar 1' />
                </div>
                <div className='mt-8'>
                    <ChatList image='/images//forerigner.webp' name='AJ Hewitt' explain='🤝 Ryounosuke, please meet' date='Mar 1' />
                </div>
            </div>
        </main>
        <footer>
            <div className='mt-32'>
            <Footer />
            </div>
        </footer>
        </Provider>
    );
}

export default Page;