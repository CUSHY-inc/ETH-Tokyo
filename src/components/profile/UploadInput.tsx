import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

const UploadInput = ({ h='h-10', placeholder="What's your name?" }) => {
    return (
        // <div className="flex">
        //     <div className="form-control w-full max-w-xs flex-col items-start">
        //         <input type="text" placeholder={`${placeholder}`} className={`input input-bordered w-full max-w-xs bg-gray-100 border-none ${h}`} />
        //     </div>
        //     <ArrowUpTrayIcon className="w-6" />
        // </div>
<div className="relative w-80">
    <div className="form-control w-full max-w-xs flex-col items-start">
        <input type="text" placeholder={`${placeholder}`} className={`input input-bordered w-full max-w-xs bg-gray-100 border-none ${h}`} />
    </div>
    <div className="absolute top-0 right-0 mt-2 mr-2">
        <ArrowUpTrayIcon className="w-6" />
    </div>
</div>
    );
}

export default UploadInput;