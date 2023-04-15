import { HomeIcon } from "@heroicons/react/24/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import Avatar from "./Avatar";

const Footer = () => {

    const image = "/images/forerigner.webp"

    return (
        <div className="w-full h-20 bg-sky-900 flex items-center justify-center space-x-10">
            <HomeIcon className="w-10 text-slate-50" />
            <ChatBubbleOvalLeftEllipsisIcon className="w-10 text-slate-50" />
            <UserGroupIcon className="w-10 text-slate-50" />
            <Avatar image={image} ringOffset='ring-offset-1' />
        </div>
    );
}

export default Footer;