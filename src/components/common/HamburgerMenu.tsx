import { Bars3Icon } from '@heroicons/react/24/outline';

const HamburgerMenu = ({ w='w-10', ml='ml-4', mt='mt-4' }) => {
    return (
        <div className="drawer z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className={`drawer-content w-fit h-fit ${ml} ${mt}`}>
                <label htmlFor="my-drawer">
                    <Bars3Icon className={`${w}`} />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
}

export default HamburgerMenu;