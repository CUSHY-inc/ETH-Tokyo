import GroupList from '@/src/components/groupList/GroupList';
import Title from '@/src/components/groupList/Title';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import store from '../../store';

const Page = () => {

    const image1 = ['/images/Avatar man2.png', '/images/Avatar woman1.png', '/images/Avatar man3.png', '/images/Avatar woman2.png'];
    const image2 = ['/images/Avatar man1.png', '/images/Avatar man4.png', '/images/Avatar woman2.png', '/images/Avatar man2.png'];
    const image3 = ['/images/Avatar man3.png', '/images/Avatar woman2.png', '/images/Avatar man1.png', '/images/Avatar woman1.png'];
    const image4 = ['/images/Avatar man4.png', '/images/Avatar man3.png', '/images/Avatar woman1.png', '/images/Avatar man1.png'];

    const router = useRouter();
    const groupHuddle = () => {
        router.push('/groupHuddle');
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
                <div className='flex-col items-center justify-center mt-16 ml-8'>
                    <button onClick={groupHuddle} className='text-left'>
                        <GroupList image={image1} name='hbk310.eth + 3' explain="Hello everyone! I'm thrilled ..." date='Mar 1' />
                    </button>
                    <div className='mt-8'>
                        <button onClick={groupHuddle} className='text-left'>
                            <GroupList image={image2} name='ruemura3.eth + 3' explain='This group is intended for ...' date='Mar 1' />
                        </button>
                    </div>
                    <div className='mt-8'>
                        <button onClick={groupHuddle} className='text-left'>
                            <GroupList image={image3} name='Ryo.take + 3' explain='🤝 To ensure a positive and ...' date='Mar 1' />
                        </button>
                    </div>
                    <div className='mt-8'>
                        <button onClick={groupHuddle} className='text-left'>
                            <GroupList image={image4} name='winny-jack07 + 3' explain='As a group, we will be meeting ...' date='Mar 1' />
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