import { AppDispatch, RootState } from '@/src/store';
import { setAccount } from '@/src/store/modules/account';
import { ethers } from 'ethers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Worldcoin = () => {

  const [token, setToken] = useState('')
  const [address, setAddress] = useState('')

  const dispatch = useDispatch<AppDispatch>();
  const account = useSelector((state: RootState) => state.account);
  const router = useRouter();

  useEffect(() => {
    const action = setAccount({ worldcoinToken: ''});
    dispatch(action);
    checkConnection();
  }, []);

  useEffect(() => {
    if (router.isReady) {
      const id_token = router.query.id_token
      console.log(id_token)
      // 登録
      setToken(id_token as string)
      const action = setAccount({ ...account, worldcoinToken: id_token });
      dispatch(action);
    }
  }, [router])

  async function checkConnection() {
    setAddress(account.addr)
    setToken(account.lensToken)
    const provider = new ethers.providers.Web3Provider(window.ethereum as ethers.providers.ExternalProvider)
    const accounts = await provider.listAccounts()
    if (accounts.length) {
      setAddress(accounts[0])
    }
  }

  async function connect() {
    const account = await window.ethereum!.request({ method: 'eth_requestAccounts' })
    if (account.length) {
      setAddress(account[0])
    }
  }
  // const url = 'https://0xbagel.com/link'
  const url = 'http://localhost:3000/link'
  const authenticate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const uri = `https://id.worldcoin.org/authorize?client_id=app_607869b6679574d3fefdec8ae37fe05c&response_type=id_token&redirect_uri=${encodeURIComponent(url)}`
    window.open(uri);
  };

  return (
    <div>
      {
        !address && <div className='flex flex-col items-center w-fit'>
          <button onClick={connect} className="bg-orange-200 rounded-full w-20 h-20 flex justify-center items-center" >
            <Image src="/images/worldcoin.jpg" alt="UMAFUN Icon" width={100} height={184.78} className='rounded-full' />
          </button>
          <p className='mt-3 text-center'>Worldcoin<br />- Connect</p>
        </div>
      }
      {
        address && !token && <div className='flex flex-col items-center w-fit'>
          <button onClick={authenticate} className="bg-orange-200 rounded-full w-20 h-20 flex justify-center items-center" >
            <Image src="/images/worldcoin.jpg" alt="UMAFUN Icon" width={100} height={184.78} className='rounded-full' />
          </button>
          <p className='mt-3 text-center'>Worldcoin<br />- Authenticate</p>
        </div>
      }
      {
        address && token && <div className='flex flex-col items-center w-fit'>
          <button onClick={authenticate} className="bg-orange-200 rounded-full w-20 h-20 flex justify-center items-center" >
            <Image src="/images/worldcoin.jpg" alt="UMAFUN Icon" width={100} height={184.78} className='rounded-full' />
          </button>
          <p className='mt-3 text-center'>Worldcoin<br />Authenticated!</p>
        </div>
      }
    </div>
  );
}

export default Worldcoin;