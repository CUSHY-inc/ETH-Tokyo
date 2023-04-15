import { ChatBubbleOvalLeftEllipsisIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Avatar from "./Avatar";

const Footer = () => {

    const image = "/images/Avatar woman1.png"
    const router = useRouter();
    const home = () => {
        router.push('/choosing');
    }
    const chat = () => {
        router.push('/chatList');
    }
    const group = () => {
        router.push('/groupMatching');
    }
    const profile = () => {
        router.push('/myprofile');
    }

    return (
        <div className="w-full h-20 bg-white flex items-center justify-center space-x-14 fixed bottom-0 border-t">
            <div className="w-10 text-black text-center">
                <button onClick={home}>
                    <HomeIcon width={32} className="mx-auto" />
                    <div className="text-xs">Home</div>
                </button>
            </div>
            <div className="w-10 text-black">
                <button onClick={chat}>
                    <ChatBubbleOvalLeftEllipsisIcon width={32} className="mx-auto" />
                    <div className="text-center text-xs">Chat</div>
                </button>
            </div>
            <div className="w-10 text-black">
                <button onClick={group}>
                    <UserGroupIcon width={32} className="mx-auto" />
                    <div className="text-center text-xs">Group match</div>
                </button>
            </div>
            <button onClick={profile}>
            <Avatar image={image} ringOffset='ring-offset-1' />
            </button>
        </div>
    );
}

export default Footer;