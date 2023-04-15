import Avatar from "../common/Avatar";

const GroupList = ({ image=['', '', '', ''], name='', explain='', date='' }) => {
    return (
        <div className="flex">
            <div className="mt-2 flex">
                <div><Avatar image={image[0]} ringOffset='ring-offset-0' w='w-8' /></div>
                <div className="-ml-4"><Avatar image={image[1]} ringOffset='ring-offset-0' w='w-8' /></div>
                <div className="-ml-4"><Avatar image={image[2]} ringOffset='ring-offset-0' w='w-8' /></div>
                <div className="-ml-4"><Avatar image={image[3]} ringOffset='ring-offset-0' w='w-8' /></div>
            </div>
            <div className="ml-4 text-lg ">
                <p className="text-base">{name}</p>
                <div className="text-gray-400 text-base flex">
                    <div>{explain}</div>
                </div>
            </div>
        </div>
    );
}

export default GroupList;