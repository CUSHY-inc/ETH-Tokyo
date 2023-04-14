import Avatar from "../common/Avatar";
import { RootState } from '@/src/store';
import { useEffect } from "react";
import { useSelector } from 'react-redux';

const Describe = () => {

    const desc = "Sarah is a biblical name, and it means\nPrincess/Mother.\nI'm a single mother of a beautiful\ndaughter named Bellavita.\nI named her after the famous Italian\nmovie, La Vita e Bella;\nit maens Life is Beautiful. And that is\nhow I see life."
    const image = "/images/metamask.png"
    
    const nfts = useSelector((state: RootState) => state.nfts);

    useEffect(() => {
    }, [nfts]);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="-z-10">
                <Avatar image={image} />
            </div>
            <div className="relative -top-4 rounded-lg w-90 -z-20 bg-gray-200">
                <div className="py-6 px-6">
                <p className="whitespace-pre-wrap text-center flex flex-col justify-center items-center">{`${desc}`}</p>
                </div>
            </div>
        </div>
    );
}

export default Describe;