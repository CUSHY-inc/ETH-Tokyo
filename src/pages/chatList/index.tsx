import ChatList from '@/src/components/chatList/ChatList';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import Title from '../../components/chatList/Title';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import store from '../../store';

const Page = () => {
    const router = useRouter();
    const chat = () => {
        router.push('/chat');
    }

    return (
        <Provider store={store}>
            <Head>
                <title>ETH-Tokyo</title>
                <meta name="description" content="ETH-Tokyo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className='flex justify-center mt-20'>
                    <Title />
                </div>
                <div className='flex-col items-center justify-center mt-12 ml-8'>
                    <button onClick={chat} className='text-left'>
                        <ChatList image='/images/Avatar man1.png' name='Hibiki Sato' explain='Hi, Ryounosuke😃' date='Apr 16' />
                    </button>
                    <div className='mt-8'>
                        <button onClick={chat} className='text-left'>
                            <ChatList image='/images/Avatar man4.png' name='AJ Hewitt' explain='🤝 Ryounosuke, please meet ...' date='Apr 14' />
                        </button>
                    </div>
                    <div className='mt-8'>
                        <button onClick={chat} className='text-left'>
                            <ChatList image='/images//Avatar woman1.png' name='Emily Johnson' explain='Hey!' date='Apr 14' />
                        </button>
                    </div>
                    <div className='mt-8'>
                        <button onClick={chat} className='text-left'>
                            <ChatList image='/images//Avatar woman2.png' name='Sophia Williams' explain='How,s it going😉 ...' date='Mar 30' />
                        </button>
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