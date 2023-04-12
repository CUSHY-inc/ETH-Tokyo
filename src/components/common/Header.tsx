import HamburgerButton from "./HumbergurButton";

const Header = () => {
  return (
    <div className="w-full h-20 bg-base-300 flex items-center">
      <div className="ml-4">
        <HamburgerButton h={'h-1'} w={'w-8'} mb={'mb-1'} />
      </div>
    </div>
  );
};

export default Header;
