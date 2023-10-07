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
  // console.log(address,'adadadad')
  const { contract: obycContract } = useContract(goreliObycContractAddress, OBYC.output.abi)
  const { contract: obycLabContract } = useContract(goreliObycLabContractAddress)
  const { contract: mvmContract } = useContract(goreliMvMContratAddress)

  const {
    data: ownedNFTs,
    isLoading
  } = useOwnedNFTs(obycContract, address)

  // console.log(address,'nfts')

  const {
    data: ownedNFTsObycLab,
    isLoading: isLoadingObycLab
  } = useOwnedNFTs(obycLabContract, address)

  //usestates
  const [status, setStatus] = useState(1)
  const [obycToken, setObycToken] = useState("")
  const [obycLabToken, setObycLabToken] = useState("")
  const [btnText, setBtnText] = useState("Select Your OBYC Token")
  const [err, setErr] = useState(false)
  const [errMsg, setErrMsg] = useState("")

  const handleOnClickBtn = async () => {
    // console.log(obycToken, 'yokrtnreq')
    // console.log(ownedNFTsObycLab, 'yokrtnreq')
    console.log(Number(obycLabToken), Number(obycToken))
    if (status == 1 && obycToken.length == 0) {
      setErr(true);
      setErrMsg("Please Select An Obyc Token First")
    }
    else if (status == 2 && obycLabToken.length == 0) {
      setErr(true);
      setErrMsg("Please Select An Obyc Lab Token First")
    }
    else if (status == 1 && Number(obycToken) > 0) {
      setStatus(2)
      setBtnText('Select Your Obyc Lab Token and Transform')
    }
    else if (status == 2 && Number(obycLabToken) >= 0 && Number(obycToken) > 0) {
      //transform logic
      console.log(obycLabToken, obycToken, 'tokens')
      mintNft()
    }
  }

  const handleCloseSnackBar = () => {
    setErr(false)
  };

  const mintNft = async () => {
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
      await mvmContract?.call("mint", Number(obycToken), Number(obycLabToken), 0, 1);
    } catch (error) {
      setErr(true);
      setErrMsg("Minting was Unsuccessful")
    }


  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%"
    }}>
      {
        status === Number(1) && !isLoading ?
          <Tokens
            type="obyc"
            setToken={setObycToken}
            selectedToken={obycToken}
            tokenIds={ownedNFTs || []}
          /> :
          status === Number(2) && !isLoadingObycLab ?
            <Tokens
              type="obyclabs"
              setToken={setObycLabToken}
              selectedToken={obycLabToken}
              tokenIds={
                ownedNFTsObycLab?.filter(item => item.metadata.id == "0" || item.metadata.id == "1") || []}
            /> :
            <CircularProgress color="secondary" />
      }
      {
        status == 1 && !isLoading ?
          <Button onClick={handleOnClickBtn} sx={{ mt: 4 }} color="secondary" variant="contained">{btnText}</Button> :
          status == 2 && !isLoadingObycLab ?
            <Button onClick={handleOnClickBtn} sx={{ mt: 4 }} color="secondary" variant="contained">{btnText}</Button> :
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
