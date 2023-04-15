import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Describe from "../matching/Describe";
import Image from 'next/image';

const MyProfile = () => {

    const attribute1 = 'Career';
    const items1 = ['Community moderator'];
    const attribute2 = 'Interest';
    const items2 = ['Find Co-founder', 'Sales'];

    const account = useSelector((state: RootState) => state.account);
    const nfts = useSelector((state: RootState) => state.nfts);

    useEffect(() => {
        console.log(account);
        console.log(typeof nfts);
    }, [])

    return (
        <div>
        <div className="border border-gray-300 rounded-xl p-8 w-80 bg-white">
            <Describe />
            <div className="mt-8 flex flex-wrap justify-center">
                {nfts[0] && nfts[0].image && <img src={nfts[0].image} alt="" width="50" height="50" className="rounded-full mr-4 mb-0" />}
                {nfts[1] && nfts[1].image && <img src={nfts[1].image} alt="" width="50" height="50" className="rounded-full mr-4 mb-0" />}
            </div>
        </div>
        </div>
    );
}

export default MyProfile;