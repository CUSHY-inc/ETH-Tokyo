import { AppDispatch, RootState } from '@/src/store';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAccount, useNetwork } from 'wagmi';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const Chatmate = () => {

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
    <div>
      <ChevronLeftIcon />
    </div>
  );
}

export default Chatmate;