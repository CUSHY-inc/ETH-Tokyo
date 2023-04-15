import { useState } from 'react';
import { useSelector } from 'react-redux';
import Lit from '../../features/profile/litApi';
import { RootState } from '../../store';

const noAuthError = "The access control condition check failed! You should have at least 0 ETH to decrypt this file.";

const LitReveal = ({ name = 'Button', w = 'w-64', color = 'btn-outline', border = 'black' }) => {

  const lit = Lit;
  const account = useSelector((state: RootState) => state.account);
  const [fileSize, setFileSize] = useState<number>(0);

  const decryptFile = async () => {
    if (account.encryptedFile === null) {
      alert("Please encrypt your file first!");
      return;
    }

    try {
      const decrypted = await lit.decryptFile(account.encryptedFile, account.encryptedSymmetricKey);
      setFileSize(decrypted.byteLength);
    } catch (error) {
      alert(noAuthError);
    }
  }

  return (
    <button className={`btn ${w} ${color} border-${border} flex`} onClick={decryptFile}>
      <img src="/images/Lit_icon.png" className="w-7 mr-2" />
      <div className="mr-1">{name}</div>
    </button>
  );
};

export default LitReveal;