import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Describe from "./Describe";
import Describe4 from "./Describe4";

// const Person = () => {
//     const [currentProfile, setCurrentProfile] = useState(0);
//     const [showProfile, setShowProfile] = useState(false);

//     const profiles = [
//       {
//         attribute: "Career",
//         items: ["Community moderator"],
//         interest: "Find Co-founder",
//       },
//       {
//         attribute: "Interest",
//         items: ["Sales"],
//         interest: "Develop new products",
//       },
//       // 他のプロファイルを追加
//     ];

//     const desc1 = "Co-founder of Apple Inc., NeXT, and Pixar Animation Studios. Passionate about technology, design, and innovation. Changing the world, one device at a time."

//     useEffect(() => {
//       setShowProfile(true);
//     }, [currentProfile]);

//     const handleLike = () => {
//       setShowProfile(false);
//       setCurrentProfile((prev) => prev + 1);
//     };

//     const profile = profiles[currentProfile % profiles.length];

//     return (
//       <div>
//         <Transition
//           show={showProfile}
//           enter="transition-opacity duration-500"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="transition-opacity duration-500"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="border border-gray-300 rounded-xl p-8 w-80">
//             <div className="border-b border-gray-300 pb-4">
//               <Describe desc={desc1} />
//             </div>
//             <div className="border-b border-gray-300 pb-6 mt-3">
//               <Property attribute={profile.attribute} items={profile.items} />
//             </div>
//             <div className="mt-3">
//               <Property attribute={profile.attribute} items={[profile.interest]} />
//             </div>
//           </div>
//         </Transition>
//         <div className="mt-8 px-4 flex justify-between">
//           <HandThumbDownIcon className="w-8" />
//           <HandThumbUpIcon className="w-8" onClick={handleLike} />
//         </div>
//       </div>
//     );
//   };

//   export default Person;

const Person = ({ evaluate = true }) => {

    const attribute1 = 'Career';
    const items1 = ['Community moderator'];
    const attribute2 = 'Interest';
    const items2 = ['Find Co-founder', 'Sales'];

    const account = useSelector((state: RootState) => state.account);

    useEffect(() => {
        console.log(account);
    }, [])

    return (
        <div>
            <div className="border border-gray-300 rounded-xl p-8 w-80">
                <Describe4 />
            </div>

            {evaluate &&
                <div className="mt-8 px-4 flex justify-between mb-16">
                    <HandThumbDownIcon className="w-8" />
                    <HandThumbUpIcon className="w-8" />
                </div>
            }
        </div>
    );
}

export default Person;