import { AppDispatch, RootState } from "@/src/store";
import { setAccount } from "@/src/store/modules/account";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lit from '../../features/profile/litApi';

const UploadInput = ({ h = 'h-10', placeholder = "What's your name?" }) => {

    const dispatch = useDispatch<AppDispatch>();
    const account = useSelector((state: RootState) => state.account);

    const lit = Lit;
    const [file, setFile] = useState<File | null>(null);
    const [encryptedFile, setEncryptedFile] = useState(null);
    const [encryptedSymmetricKey, setEncryptedSymmetricKey] = useState(null);
    const [fileSize, setFileSize] = useState(0);

    const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0] || null);
        setEncryptedFile(null)
        setEncryptedSymmetricKey(null)
        setFileSize(0)
    }

    const router = useRouter();
    const link = () => {
        router.push('/link');
    }

    const encryptFile = async () => {
        if (file === null) {
            alert("Please select a file before encrypting!");
            return;
        }
        const { encryptedFile, encryptedSymmetricKey } = await lit.encryptFile(file);
        setEncryptedFile(encryptedFile)
        setEncryptedSymmetricKey(encryptedSymmetricKey)
        setFileSize(0)
        const action = setAccount({
            ...account,
            encryptedFile: encryptedFile,
            encryptedSymmetricKey: encryptedSymmetricKey,
            fileSize: 0,
        });
        dispatch(action);
        link();
    }

    return (
        <div>
            <div className='mt-8 flex justify-center'>
                <div className="relative w-80">
                    <div className="form-control w-full max-w-xs flex-col items-start">
                        <input type="text" placeholder={file?.name ?? 'Select your resume'} className={`input input-bordered w-full max-w-xs bg-gray-100 border-none`} readOnly />
                    </div>
                    <div className="absolute top-0 right-0 mt-2 mr-2">
                        <label htmlFor="file"><ArrowUpTrayIcon className="w-6 mt-1" /></label>
                        <input type="file" name="file" id="file" onChange={selectFile} className="sr-only" />
                    </div>
                </div>
            </div>
            <div className='mt-8 flex justify-evenly  fixed bottom-10 w-full'>
                <button className={`btn w-64 btn-primary border-black`} onClick={encryptFile}>
                    <p>Save profile</p>
                </button>
            </div>
        </div>
    );
}

export default UploadInput;