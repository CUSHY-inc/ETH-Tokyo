import { RootState } from '@/src/store';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import Avatar from "../common/Avatar";
import Property from "./Property";

const Describe = () => {

    const desc = "As a seasoned entrepreneur with a strong background in finance, I have a proven track record of building successful companies from the ground up. My passion for innovation and commitment to excellence have driven me to achieve remarkable results in the competitive world of business."
    const image = "/images/Avatar woman2.png"

    const attribute1 = 'Career';
    const items1 = ['Finance Professional'];
    const attribute2 = 'Interest';
    const items2 = ['Negotiation', 'Execution'];

    const nfts = useSelector((state: RootState) => state.nfts);

    useEffect(() => {
    }, [nfts]);

    return (
        <div>
            <div className="border-b border-gray-300 pb-4">
                <div className="flex flex-col justify-center items-center">
                    <div className="-z-10">
                        <Avatar image={image} ringOffset='ring-offset-0' w='w-16' h='h-16' />
                    </div>
                    <div className="mt-4">
                        <div className='flex flex-col items-center w-fit'>
                            <p className="text-1xl font-semibold">Sophia Williams</p>
                        </div>
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
            <div className='border-b border-gray-300 pb-6 mt-3'>
                <Property attribute={attribute1} items={items1} />
            </div>
            <div className='mt-3'>
                <Property attribute={attribute2} items={items2} />
            </div>
        </div>
    );
}

export default Describe;