import Avatar from "../common/Avatar";
import { RootState } from '@/src/store';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import Name from "./Name";
import Property from "./Property";

const Describe = () => {

    const desc = "Co-founder of Apple Inc., NeXT, and Pixar Animation Studios. Passionate about technology, design, and innovation. Changing the world, one device at a time."
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
                <div className="mt-4">
                    <p>{`${desc}`}</p>
                </div>
                {/* <div className="rounded-lg w-90 bg-gray-200 mt-4">
                    <div className="py-6 px-6">
                    <p className="whitespace-pre-wrap text-center flex flex-col justify-center items-center">{`${desc}`}</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Describe;