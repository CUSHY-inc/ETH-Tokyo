'use client'
import { AppDispatch, RootState } from '@/src/store';
import { setAccount } from '@/src/store/modules/account';
import { ethers } from 'ethers';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate, challenge, client } from '../../features/link/lensApi';

const Lens = () => {

  const [address, setAddress] = useState('')
  const [token, setToken] = useState('')

  const dispatch = useDispatch<AppDispatch>();
  const account = useSelector((state: RootState) => state.account);

  useEffect(() => {
    checkConnection()
  }, [])

  async function checkConnection() {
    setAddress(account.addr)
    setToken(account.lensToken)
    const provider = new ethers.providers.Web3Provider(window.ethereum as ethers.providers.ExternalProvider)
    const accounts = await provider.listAccounts()
    if (accounts.length) {
      setAddress(accounts[0])
    }
    console.log(account.addr)
    console.log(account.lensToken)
  }

  async function connect() {
    const account = await window.ethereum!.request({ method: 'eth_requestAccounts' })
    if (account.length) {
      setAddress(account[0])
    }
  }

  async function login() {
    try {
      const challengeInfo = await client.query({
        query: challenge,
        variables: { address }
      })
      const provider = new ethers.providers.Web3Provider(window.ethereum as ethers.providers.ExternalProvider);
      const signer = provider.getSigner()
      const signature = await signer.signMessage(challengeInfo.data.challenge.text)
      const authData = await client.mutate({
        mutation: authenticate,
        variables: {
          address, signature
        }
      })
      const { data: { authenticate: { accessToken } } } = authData
      // 登録
      setToken(accessToken)
      const action = setAccount({ ...account, lensToken: accessToken });
      dispatch(action);
    } catch (err) {
      console.log('Error signing in: ', err)
    }
  }

  return (
    <div>
      {
        !address && <div className='flex flex-col items-center w-fit'>
          <button onClick={connect} className="bg-orange-200 rounded-full w-20 h-20 flex justify-center items-center" >
            <Image src="/images/lens.jpeg" alt="UMAFUN Icon" width={100} height={184.78} className='rounded-full' />
          </button>
          <p className='mt-3 text-center'>Lens<br />- Connect</p>
        </div>
      }
      {
        address && !token && <div className='flex flex-col items-center w-fit'>
          <button onClick={login} className="bg-orange-200 rounded-full w-20 h-20 flex justify-center items-center" >
            <Image src="/images/lens.jpeg" alt="UMAFUN Icon" width={100} height={184.78} className='rounded-full' />
          </button>
          <p className='mt-3 text-center'>Lens<br />- Authenticate</p>
        </div>
      }
      {
        address && token && <div className='flex flex-col items-center w-fit'>
          <button onClick={connect} className="bg-orange-200 rounded-full w-20 h-20 flex justify-center items-center" >
            <Image src="/images/lens.jpeg" alt="UMAFUN Icon" width={100} height={184.78} className='rounded-full' />
          </button>
          <p className='mt-3 text-center'>Lens<br />Authenticated!</p>
        </div>
      }
    </div>
  );
}

export default Lens;