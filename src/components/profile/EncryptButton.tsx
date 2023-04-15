import { AppDispatch, RootState } from "@/src/store";
import { setAccount } from "@/src/store/modules/account";
import { useDispatch, useSelector } from "react-redux";
import Lit from '../../features/profile/litApi';
import { useRouter } from "next/router";

const SubmitButton = ({ name = 'Button', w = 'w-64', color = 'btn-secondary', border = 'black' }) => {

  const dispatch = useDispatch<AppDispatch>();
  const account = useSelector((state: RootState) => state.account);
  const lit = Lit;

  const router = useRouter();
  const link = () => {
      router.push('/link');
  }

  const encryptFile = async () => {

    if (account.file === null) {
      alert("Please select a file before encrypting!");
      return;
    }
    const { encryptedFile, encryptedSymmetricKey } = await lit.encryptFile(account.file);
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
    <button className={`btn ${w} ${color} border-${border}`} onClick={encryptFile}>
      <p>{name}</p>
    </button>
  );
};

export default SubmitButton;