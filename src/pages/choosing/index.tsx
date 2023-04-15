import Head from 'next/head';
import Header from '../../components/common/Header'
import Title from '../../components/matching/Title';
import { Provider, useSelector } from 'react-redux';
import store from '../../store';
import Describe from '../../components/matching/Describe';
import Footer from '../../components/common/Footer';
import Property from '../../components/matching/Property';
import Person from '@/src/components/matching/Person';
import { useEffect, useState } from 'react';
import { RootState } from '../../store';
import Person2 from '@/src/components/matching/Person2';
import dynamic from "next/dynamic"
import TinderCard from 'react-tinder-card';
import Person3 from '@/src/components/matching/Person3';
import Person4 from '@/src/components/matching/Person4';
import CardComponent from '@/src/components/matching/CardComponent';

export default function Home() {

  const TinderCard = dynamic(() => import('react-tinder-card'), {
    ssr: false
  });
  // const characters = db
  let countRight = 0;
  let countLeft = 0;
  let count = 0;
  const [cnt, setCnt] = useState(0);
  const [lastDirection, setLastDirection] = useState()
  const swiped = (direction: any, nameToDelete: string) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    // count++;
    // console.log(count);
  }
  const outOfFrame = (nam: string) => {
    console.log(name + ' left the screen!')
    // count++;
    // console.log(count);
    setCnt(cnt+1);
    console.log(cnt);
  }

  // useState(() => {
  //   console.log("countRight: " + countRight);
  // }, [count]);

  return (
    <Provider store={store}>
      <Head>
        <title>ETH-Tokyo</title>
        <meta name="description" content="ETH-Tokyo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
      <div>

      {/* <div className="relative">
  <CardComponent cnt={cnt - 3} cardKey={`test1-${cnt}`} onSwipe={(dir) => swiped(dir, "test1")} onCardLeftScreen={() => outOfFrame("test1")} TinderCardComponent={TinderCard}>
    <Person />
  </CardComponent>
  <CardComponent cnt={cnt - 2} cardKey={`test2-${cnt}`} onSwipe={(dir) => swiped(dir, "test2")} onCardLeftScreen={() => outOfFrame("test2")} TinderCardComponent={TinderCard}>
    <Person />
  </CardComponent>
  <CardComponent cnt={cnt - 1} cardKey={`test3-${cnt}`} onSwipe={(dir) => swiped(dir, "test3")} onCardLeftScreen={() => outOfFrame("test3")} TinderCardComponent={TinderCard}>
    <Person />
  </CardComponent>
  <CardComponent cnt={cnt} cardKey={`test4-${cnt}`} onSwipe={(dir) => swiped(dir, "test4")} onCardLeftScreen={() => outOfFrame("test4")} TinderCardComponent={TinderCard}>
    <Person3 />
  </CardComponent>
</div> */}

            <div className="relative">
                {cnt === 3 &&
                    <div className="absolute z-0 ml-8 mt-24">
                    <TinderCard className="swipe" key="test1" onSwipe={(dir) => swiped(dir, "test1")} onCardLeftScreen={() => outOfFrame("test1")}>
                        <div className="card">
                        <Person evaluate={true} />
                        </div>
                    </TinderCard>
                    </div>
                }
                {cnt === 2 &&
                    <div className="absolute z-10 ml-8 mt-24">
                    <TinderCard className="swipe" key="test2" onSwipe={(dir) => swiped(dir, "test2")} onCardLeftScreen={() => outOfFrame("test2")}>
                        <div className="card">
                        <Person2 evaluate={true} />
                        </div>
                    </TinderCard>
                    </div>
                }
                {cnt === 1 &&
                <div className="absolute z-20 ml-8 mt-24">
                    <TinderCard className="swipe" key="test3" onSwipe={(dir) => swiped(dir, "test3")} onCardLeftScreen={() => outOfFrame("test3")}>
                    <div className="card">
                        <Person3 evaluate={true} />
                    </div>
                    </TinderCard>
                </div>
                }
                {cnt === 0 &&
                <div className="absolute z-30 ml-8 mt-24">
                    <TinderCard className="swipe" key="test4" onSwipe={(dir) => swiped(dir, "test4")} onCardLeftScreen={() => outOfFrame("test4")}>
                    <div className="card">
                        <Person4 evaluate={true} />
                    </div>
                    </TinderCard>
                </div>
                }
            </div>
        </div>
      </main>
      <footer className="absolute bottom-0 w-full">
          <Footer />
      </footer>
    </Provider>
  );

}
