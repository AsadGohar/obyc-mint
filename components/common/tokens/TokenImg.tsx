import { NextPage } from 'next'
import styles from "../../../styles/Theme.module.css";

interface IProps {
  tokenId: number,
  imageUrl?:string,
  selectedToken:any,
  type:string,
  setToken:(tokenid:any)=>void
}
const TokenImg: NextPage<IProps> = ({ tokenId,imageUrl, setToken,selectedToken,type }) => {

  const dimention= type=='obyc' ? '100px' : "150px"

  const handleClick = () => {
    console.log('here',tokenId)
    setToken(tokenId)
  } 
  
  return (
    <div>
      <img className={selectedToken == tokenId ? styles.selectedBorder : ''} onClick={handleClick} src={imageUrl} alt='obyc' style={{ height: dimention, width: dimention}} />
    </div>
  );
};

export default TokenImg;
