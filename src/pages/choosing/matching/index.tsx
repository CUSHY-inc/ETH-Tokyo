import SubmitButton from '@/src/components/common/SubmitButton';
import LitReveal from '@/src/components/matching/LintReveal';
import PersonMatch from '@/src/components/matching/PersonMatch';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/common/Header';
import store from '../../../store';
import { useRouter } from 'next/router';


export default function Home() {

    const router = useRouter();
    const chatList = () => {
        router.push('/chatList');
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
                <div className='flex justify-center mt-24'>
                    <PersonMatch />
                </div>
                <div className='mt-8 flex justify-evenly'>
                    <SubmitButton name='Start Chat' w='w-64' color='btn-primary' border='none' onclick={chatList} />
                </div>
                <div className='mt-2 flex justify-evenly'>
                    <LitReveal name='Reveal info' w='w-64' />
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
