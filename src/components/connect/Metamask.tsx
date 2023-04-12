import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';

const Metamask = () => {
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
                          <button onClick={openAccountModal} type="button">
                            {account.displayName}
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