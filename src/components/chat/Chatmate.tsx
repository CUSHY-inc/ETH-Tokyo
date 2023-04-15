import { ChevronLeftIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Avatar from "../common/Avatar";

const Chatmate = ({ image = '', name = '', date = '' }) => {

  const router = useRouter();
  const back = () => {
    router.push('/chatList');
  }

  return (
    <div className="flex">
      <div className="w-6 mr-4 my-auto">
        <button onClick={back}>
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
      </div>
      <Avatar image={image} ringOffset='ring-offset-0' w='w-11' h='h-11' />
      <div className="ml-4 text-lg">
        <p className="text-base">{name}</p>
        <div className="text-gray-400 text-sm flex">
          <div className="ml-4">{date}</div>
        </div>
      </div>
      <div className="float-right my-auto">
        <EllipsisHorizontalIcon className="w-6 h-6 ml-32 my-auto" />
      </div>
    </div>
  );
}

export default Chatmate;