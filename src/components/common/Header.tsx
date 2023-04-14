import { Bars3Icon } from '@heroicons/react/24/outline';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <div className='w-full h-20 bg-base-300 flex justify-between'>
        <HamburgerMenu />
    </div>
  );
};

export default Header;
