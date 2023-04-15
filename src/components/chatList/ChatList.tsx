import Avatar from "../common/Avatar";

const ChatList = ({ image='', name='', explain='', date='' }) => {
    return (
        <div className="flex">
            <Avatar image={image} ringOffset='ring-offset-0' w='w-10' h='h-10' />
            <div className="ml-4 text-lg ">
                <p className="text-base">{name}</p>
                <div className="text-gray-400 text-base flex">
                    <div>{explain}</div>
                    <div className="ml-4">{date}</div>
                </div>
            </div>
        </div>
    );
}

export default ChatList;