import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAccount, useNetwork } from 'wagmi';
import { useRouter } from 'next/router';
import { fetchNfts } from '@/src/store/modules/nfts';

const Metamask = () => {

  const router = useRouter();
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();
  const dispatch = useDispatch();
  const nfts = useSelector(state => state.nfts);

  useEffect(() => {
    if (isConnected) {
      dispatch(fetchNfts({addr: address, chain: chain!.name}));
      console.log(nfts);
      router.push('/matching');
    }
  }, [isConnected]);

  return (
      <div className='flex flex-col items-center w-fit'>
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== 'loading';
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === 'authenticated');

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  'style': {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button onClick={openConnectModal} className="bg-orange-200 rounded-full w-20 h-20 flex justify-center items-center" >
                        <Image src="/images/metamask.png" alt="UMAFUN Icon" width={50} height={184.78} />
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button onClick={openChainModal} type="button">
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div>
                      <div style={{ display: 'flex', gap: 12 }}>
                        <button onClick={openAccountModal} className="bg-orange-200 rounded-full w-20 h-20 flex justify-center items-center" >
                          <Image src="/images/metamask.png" alt="UMAFUN Icon" width={50} height={184.78} />
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
        <p className='mt-3'>MetaMask</p>
      </div>
  );
}

export default Metamask;