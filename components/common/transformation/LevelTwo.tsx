import { useState } from "react";
import {
  useContract,
  useOwnedNFTs,
  useAddress,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import {  
  originalAddressObyc, 
  originalAddressObycLab, 
  polygonAddressMvm, 
  polygonAddressObycLab,
  goreliMvMContratAddress,
  goreliObycContractAddress,
  goreliObycLabContractAddress
} from "../../utils/consts";
import { OBYC } from "../../utils/abi";
import AllTokens from "../tokens/AllTokens";
import { CircularProgress } from "@mui/material";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

const LevelOne: NextPage = () => {

  const Tokens = AllTokens as any;
  //thirdweb hooks
  const address = useAddress()

  const { contract: mvmContract } = useContract(goreliMvMContratAddress, OBYC.output.abi)
  const {
    data: ownedNFTs,
    isLoading
  } = useOwnedNFTs(mvmContract, address)


  const { contract : obycLabContract } = useContract(goreliObycLabContractAddress)
  const {
    data: ownedNFTsObycLab,
    isLoading: isLoadingObycLab
  } = useOwnedNFTs(obycLabContract, address)

  //usestates
  const [status, setStatus] = useState(1)
  const [mvmToken, setMvmToken] = useState("")
  const [obycLabToken, setObycLabToken] = useState("")
  const [btnText, setBtnText] = useState("Select Your MvM Token")
  const [err, setErr] = useState(false)
  const [errMsg, setErrMsg] = useState("")

  const handleOnClickBtn = () => {
    console.log(mvmToken, 'yokrtnreq')
    if (status == 1 && mvmToken.length == 0) {
      setErr(true);
      setErrMsg("Please Select An MvM Token First")
    }
    else if (status == 2 && obycLabToken.length == 0) {
      setErr(true);
      setErrMsg("Please Select An Obyc Lab Token First")
    }
    else if (status == 1 && Number(mvmToken) > 0) {
      setStatus(2)
      setBtnText('Select Your Obyc Lab Token and Transform')
    }
    else if (status == 2 && Number(obycLabToken) > 0 && Number(mvmToken) > 0) {
      //transform logic
      mintNft()
    }
  }

  const handleCloseSnackBar = () => {
    setErr(false)
  };

  const mintNft = async () => {
    //params _claim,quantity,obycToken,mvmToken,obycLabToken,level
    // await mvmContract?.call("claim", address!, 1,0,Number(mvmToken),Number(obycLabToken),2);
    setErr(true);
    setErrMsg("Minting......")

    try {
      const hasApproval = await obycLabContract?.call(
        "isApprovedForAll",
        address,
        mvmContract?.getAddress()
      );
      const balance = await obycLabContract?.call("balanceOf", address, Number(obycLabToken));

      if (!hasApproval) {
        // Set approval
        await obycLabContract?.call(
          "setApprovalForAll",
          mvmContract?.getAddress(),
          true
        );
      }

      if (balance < 1) {
        setErr(true);
        setErrMsg(`You Dont Have Enought Lab Item ${Number(obycLabToken)} tokens`)
        return
      }
      // params _claim,quantity,obycToken,mvmToken,obycLabToken,level
      await mvmContract?.call("mint", 0, Number(obycLabToken), Number(mvmToken), 2);
    } catch (error) {
      setErr(true);
      setErrMsg("Minting was Unsuccessful")
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      {
        status == 1 && !isLoading ?
          <Tokens 
            type="obyc" 
            setToken={setMvmToken} 
            selectedToken={mvmToken} 
            tokenIds={ownedNFTs||[]} 
          /> :
          status == 2 && !isLoadingObycLab ?
          <Tokens 
            type="obyclabs" 
            setToken={setObycLabToken} 
            selectedToken={obycLabToken} 
            tokenIds={ownedNFTsObycLab?.filter(item=>item.metadata.id=="2" || item.metadata.id=="3") || []
          } />:
          <CircularProgress color="secondary"/>
      }
      {
        status == 1 && !isLoading ?
          <Button onClick={handleOnClickBtn} sx={{ mt: 4 }} color="secondary" variant="contained">{btnText}</Button> :
          status == 2 && !isLoadingObycLab ?
            <Button 
              onClick={handleOnClickBtn} 
              sx={{ mt: 4 }} 
              color="secondary" 
              variant="contained">{btnText}
            </Button> :
            <></>
      }
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={err}
        onClose={handleCloseSnackBar}
        message={errMsg}
        key={"top" + "center"}
      />
    </div>
  );
};

export default LevelOne;
