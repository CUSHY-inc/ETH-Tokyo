import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = ({ enable = true }) => {
  const router = useRouter();
  const home = () => {
    if (enable) {
      router.push('/choosing');
    }
  }
  return (
    <div className='w-full h-16 bg-white flex justify-between  fixed top-0 border-b py-4 pl-2'>
      <button onClick={home}>
        <Image src="/images/Logo rectangle.png" alt="UMAFUN Icon" width={112} height={5} className='my-1' />
      </button>
    </div>
  );
};

export default Header;
