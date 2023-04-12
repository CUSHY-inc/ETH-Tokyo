import { Bars3Icon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <div className="w-full h-20 bg-base-300 flex items-center justify-between">
      <div className="ml-4">
        <Bars3Icon className="h-10 w-10" />
      </div>
    </div>
  );
};

export default Header;
