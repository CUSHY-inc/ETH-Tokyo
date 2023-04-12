const HamburgerButton = ({h='h-1' ,w='w-6', mb='mb-1'}) => {
  return (
    <button className="p-2 inline-flex items-center justify-center">
      <div className="hamburger-menu">
        <span className={`block ${h} ${w} ${mb} bg-current `}></span>
        <span className={`block ${h} ${w} ${mb} bg-current `}></span>
        <span className={`block ${h} ${w} bg-current`}></span>
      </div>
    </button>
  );
};
  
export default HamburgerButton;
