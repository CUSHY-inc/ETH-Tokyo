import dynamic from "next/dynamic"
import { useState } from 'react';
import Person from "./Person";

const TinderUI = () => {
    
    const TinderCard = dynamic(() => import('react-tinder-card'), {
        ssr: false
    });

    let count = 0;
    const [lastDirection, setLastDirection] = useState()
    const swiped = (direction: any, nameToDelete: string) => {
      console.log('removing: ' + nameToDelete)
      setLastDirection(direction)
      count++;
      console.log(count);
    }
    const outOfFrame = (nam: string) => {
      console.log(name + ' left the screen!')
      count++;
      console.log(count);
    }

    return (
        <div>
            <div className="relative">
                {count <= 0 &&
                    <div className="absolute z-0 ml-8 mt-8">
                    <TinderCard className="swipe" key="test1" onSwipe={(dir) => swiped(dir, "test1")} onCardLeftScreen={() => outOfFrame("test1")}>
                        <div className="card">
                        <Person />
                        </div>
                    </TinderCard>
                    </div>
                }
                {count <= 1 &&
                    <div className="absolute z-10 ml-8 mt-8">
                    <TinderCard className="swipe" key="test2" onSwipe={(dir) => swiped(dir, "test2")} onCardLeftScreen={() => outOfFrame("test2")}>
                        <div className="card">
                        <Person />
                        </div>
                    </TinderCard>
                    </div>
                }
                {count <= 2 &&
                <div className="absolute z-20 ml-8 mt-8">
                    <TinderCard className="swipe" key="test2" onSwipe={(dir) => swiped(dir, "test2")} onCardLeftScreen={() => outOfFrame("test2")}>
                    <div className="card">
                        <Person />
                    </div>
                    </TinderCard>
                </div>
                }
            </div>
        </div>
    );

}

export default TinderUI;