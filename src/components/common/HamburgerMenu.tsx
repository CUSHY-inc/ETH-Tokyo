import { Bars3Icon } from '@heroicons/react/24/outline';
import { useAccount, useDisconnect } from 'wagmi';
import { useRouter } from 'next/router';

const HamburgerMenu = ({ w='w-10', ml='ml-4', mt='mt-4' }) => {

    const { disconnectAsync } = useDisconnect();
    const { isConnected } = useAccount();
    const router = useRouter();

    const disconnect = async () => {
        if (isConnected) {
            await disconnectAsync();
            router.push('/');
        }
    }

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className={`drawer-content w-fit h-fit ${ml} ${mt}`}>
                <label htmlFor="my-drawer">
                    <Bars3Icon className={`${w}`} />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                    {isConnected && (<li><button onClick={disconnect}>Disconnect</button></li>)}
                </ul>
            </div>
        </div>
    );
}

export default HamburgerMenu;