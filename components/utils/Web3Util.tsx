import Web3 from "web3";
import { OBYC, OBYCLabsAbi,mvmContractABI } from './abi.js'
import { AbiItem } from 'web3-utils'
import { polygonAddressObyc,polygonAddressMvm, rpcMainnet,polygonAddressObycLab, rpcPolygon } from "./consts.js";

const web3Instance = new Web3(
  rpcPolygon
);

let OBYCContract = new web3Instance.eth.Contract(OBYC.output.abi as AbiItem[], polygonAddressObyc);
let OBYCLabsContract = new web3Instance.eth.Contract(OBYCLabsAbi as AbiItem[], polygonAddressObycLab);
let mvmContract = new web3Instance.eth.Contract(mvmContractABI as AbiItem[], polygonAddressMvm);

export const getNumberOfOBYCTokensOfAddress = async (address: any, callback: (result: any) => void) => {
  let numberOfTokens = await OBYCContract.methods.balanceOf(await address).call()
  callback(numberOfTokens)
  return { numberOfTokens, status: Boolean(numberOfTokens > 0) }
}

export const getOBYCTokensListOfAddress = async (_address: any, callback: (result: any) => void) => {
  let ownerOfPromises = []
  let tokens = []
  // console.log(OBYCContract,'obyc contract')
  for (let index = 1; index < 100;) {
    let x = index+10
    for (let y = index; y < x; y++) {
      const element = await OBYCContract.methods.ownerOf(y).call();
      ownerOfPromises.push(element)
    }
    Promise.all(ownerOfPromises).then(values => {
      tokens.push(values)
      console.log(values, 'dasdas');
      ownerOfPromises = []
    }).catch(reason => {
      console.log(reason)
    });
    index = index+10
  }
}

export const getNumberOfOBYCLabsTokensOfAddress = async (address: any, tokenId: any, callback: (result: any) => void) => {
  let numberOfTokens = await OBYCLabsContract.methods.balanceOf(await address, tokenId).call()
  callback(numberOfTokens)
  return { numberOfTokens, status: Boolean(numberOfTokens > 0) }
}

export const getOBYCLabsTokensListOfAddress = async (address: any, tokenId: any, callback: (result: any) => void) => {
  let numberOfTokens = await OBYCLabsContract.methods.balanceOf(await address, tokenId).call()
  callback(numberOfTokens)
  return { numberOfTokens, status: Boolean(numberOfTokens > 0) }
}

export const getAddress = async () => {
  let acc = await web3Instance.eth.getAccounts();
  // console.log(acc[0]);
  if (acc[0] !== undefined) {
    return acc[0];
  } else if (acc[0] === undefined) {
    return "";
  }
};

export const getTokenStatus = async (tokenId: any) => {
  let result = await mvmContract.methods.getStatusOfObycToken(tokenId).call();
  return result;
};

