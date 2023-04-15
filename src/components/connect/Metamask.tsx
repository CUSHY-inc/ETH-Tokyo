import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAccount, useNetwork } from 'wagmi';
import { useRouter } from 'next/router';
import { fetchNfts } from '@/src/store/modules/nfts';
import { AppDispatch } from '@/src/store';
import { setAccount, Account } from '@/src/store/modules/account';
import { RootState } from '@/src/store';
import MetaMaskSDK from '@metamask/sdk';

const Metamask = () => {

  const router = useRouter();
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();
  const dispatch = useDispatch<AppDispatch>();
  const account = useSelector((state: RootState) => state.account);
  const nfts = useSelector((state: RootState) => state.nfts);
  const options = {
    injectProvider: false,
    communicationLayerPreference: 'webrtc',
  };
  const MMSDK = new MetaMaskSDK(options);
  const ethereum = MMSDK.getProvider();

  const connect = async () => {
    const accounts = ethereum.request({ method: 'eth_requestAccounts', params: [] });
    if (accounts.length > 0) {
      const accountAction = setAccount({addr: accounts[0], isConnect: true});
      dispatch(accountAction);
    }
    dispatch(fetchNfts({addr: accounts[0], chain: 'Ethereum'}));
    router.push('/link');
  }

  useEffect(() => {
    // console.log(account);
    // if (account.isConnect) {
    //   // localStorage.setItem("account", JSON.stringify(account));
    //   router.push('/link');
    // }
  }, [account]);

  return (
      <div className='flex flex-col items-center w-fit'>
        <button onClick={connect} className="bg-orange-200 rounded-full w-20 h-20 flex justify-center items-center" >
          <Image src="/images/metamask.png" alt="UMAFUN Icon" width={50} height={184.78} />
        </button>
        <p className='mt-3'>MetaMask</p>
      </div>
  );
}

export default Metamask;