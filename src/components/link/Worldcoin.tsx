import { AppDispatch, RootState } from '@/src/store';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAccount, useNetwork } from 'wagmi';

const Worldcoin = () => {

  const router = useRouter();
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();
  const dispatch = useDispatch<AppDispatch>();
  const account = useSelector((state: RootState) => state.account);

  const authenticate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push('https://id.worldcoin.org/authorize?client_id=app_607869b6679574d3fefdec8ae37fe05c&response_type=id_token&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flink');
  };

  return (
    <div className=''>
      <button onClick={authenticate} className="bg-orange-200 rounded-full w-20 h-20 flex justify-center items-center" >
        <Image src="/images/worldcoin.jpg" alt="UMAFUN Icon" width={100} height={184.78} className='rounded-full' />
      </button>
      <p className='mt-3 text-center'>Worldcoin<br/>- Authenticate</p>
    </div>
  );
}

export default Worldcoin;