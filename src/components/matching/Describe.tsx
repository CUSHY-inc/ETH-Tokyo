import Avatar from "../common/Avatar";
import { RootState } from '@/src/store';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import Name from "./Name";
import Property from "./Property";

const Describe = () => {

    const desc = "Sarah is a biblical name, and it means\nPrincess/Mother.\nI'm a single mother of a beautiful\ndaughter named Bellavita.\nI named her after the famous Italian\nmovie, La Vita e Bella;\nit maens Life is Beautiful. And that is\nhow I see life."
    const image = "/images/forerigner.webp"

    const attribute = 'Career'
    const items = ['Community moderator'];
    
    const nfts = useSelector((state: RootState) => state.nfts);

    useEffect(() => {
    }, [nfts]);

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="-z-10">
                    <Avatar image={image} ringOffset='ring-offset-0' w='w-16' />
                </div>
                <div className="mt-4">
                    <Name />
                </div>
                <div className="rounded-lg w-90 bg-gray-200 mt-4">
                    <div className="py-6 px-6">
                    <p className="whitespace-pre-wrap text-center flex flex-col justify-center items-center">{`${desc}`}</p>
                    </div>
                </div>
            </div>
            <div className='mt-3 ml-8'>
                <Property attribute={attribute} items={items} />
            </div>
        </div>
    );
}

export default Describe;