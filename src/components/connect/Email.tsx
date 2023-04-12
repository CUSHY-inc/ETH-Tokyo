import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Email = () => {
    return (
      <div className='flex flex-col items-center w-fit'>
        <button className="rounded-full border border-2 border-gray-300 w-20 h-20 flex justify-center items-center">
          <EnvelopeIcon className="h-10 w-10" />
        </button>
        <p className='mt-3'>Connect with</p>
        <p>email</p>
      </div>
    );
}

export default Email;