import { RootState } from "@/src/store";
import { useSelector } from "react-redux";

const NextButton = ({ w = 'w-64', onclick = () => { } }) => {
  const account = useSelector((state: RootState) => state.account);
  const name = account.lensToken !== ''
    && account.worldcoinToken !== ''
    && typeof account.lensToken !== 'undefined'
    && typeof account.worldcoinToken !== 'undefined'
    ? 'Next' : 'Skip'
  const color = account.lensToken !== ''
    && account.worldcoinToken !== ''
    && typeof account.lensToken !== 'undefined'
    && typeof account.worldcoinToken !== 'undefined'
    ? 'btn-primary' : 'btn-outline'
  console.log(account.lensToken)
  console.log(account.worldcoinToken)
  return (
    <button className={`btn ${w} ${color}`} onClick={onclick}>
      <p>{name}</p>
    </button>
  );
};

export default NextButton;