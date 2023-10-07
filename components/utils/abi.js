
export const OBYC = {
	"compiler": {
		"version": "0.8.11+commit.d7f03943"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_maxSupply",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_cost",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_maxFreeMintSupply",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_maxMintAmountPerTx",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "_hiddenMetadataUri",
						"type": "string"
					}
				],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [],
				"name": "ApprovalCallerNotOwnerNorApproved",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "ApprovalQueryForNonexistentToken",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "ApprovalToCurrentOwner",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "ApproveToCaller",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "BalanceQueryForZeroAddress",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "MintToZeroAddress",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "MintZeroQuantity",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "OwnerQueryForNonexistentToken",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "TransferCallerNotOwnerNorApproved",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "TransferFromIncorrectOwner",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "TransferToNonERC721ReceiverImplementer",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "TransferToZeroAddress",
				"type": "error"
			},
			{
				"inputs": [],
				"name": "URIQueryForNonexistentToken",
				"type": "error"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "approved",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "Approval",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "operator",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "bool",
						"name": "approved",
						"type": "bool"
					}
				],
				"name": "ApprovalForAll",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "previousOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnershipTransferred",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "cost",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_maxSupply",
						"type": "uint256"
					}
				],
				"name": "cutMaxSupply",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_mintAmount",
						"type": "uint256"
					}
				],
				"name": "freeMint",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "getApproved",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "hiddenMetadataUri",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "operator",
						"type": "address"
					}
				],
				"name": "isApprovedForAll",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "isFreeMintOpen",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "maxFreeMintAmountPerAddr",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "maxFreeMintSupply",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "maxMintAmountPerTx",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "maxSupply",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_mintAmount",
						"type": "uint256"
					}
				],
				"name": "mint",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_mintAmount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "_receiver",
						"type": "address"
					}
				],
				"name": "mintForAddress",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "name",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "ownerOf",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "paused",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "renounceOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "revealed",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "safeTransferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "bytes",
						"name": "_data",
						"type": "bytes"
					}
				],
				"name": "safeTransferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "operator",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "approved",
						"type": "bool"
					}
				],
				"name": "setApprovalForAll",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_cost",
						"type": "uint256"
					}
				],
				"name": "setCost",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "_hiddenMetadataUri",
						"type": "string"
					}
				],
				"name": "setHiddenMetadataUri",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_maxFreeMintAmountPerAddr",
						"type": "uint256"
					}
				],
				"name": "setMaxFreeMintAmountPerAddr",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_maxFreeMintSupply",
						"type": "uint256"
					}
				],
				"name": "setMaxFreeMintSupply",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_maxMintAmountPerTx",
						"type": "uint256"
					}
				],
				"name": "setMaxMintAmountPerTx",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bool",
						"name": "_state",
						"type": "bool"
					}
				],
				"name": "setPaused",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bool",
						"name": "_state",
						"type": "bool"
					}
				],
				"name": "setRevealed",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "_uriPrefix",
						"type": "string"
					}
				],
				"name": "setUriPrefix",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "_uriSuffix",
						"type": "string"
					}
				],
				"name": "setUriSuffix",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes4",
						"name": "interfaceId",
						"type": "bytes4"
					}
				],
				"name": "supportsInterface",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "symbol",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "toggleIsFreeMintOpen",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "tokenURI",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "totalSupply",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "transferOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "uriPrefix",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "uriSuffix",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_owner",
						"type": "address"
					}
				],
				"name": "walletOfOwner",
				"outputs": [
					{
						"internalType": "uint256[]",
						"name": "",
						"type": "uint256[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "withdraw",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}
		],
		"devdoc": {
			"kind": "dev",
			"methods": {
				"approve(address,uint256)": {
					"details": "See {IERC721-approve}."
				},
				"balanceOf(address)": {
					"details": "See {IERC721-balanceOf}."
				},
				"getApproved(uint256)": {
					"details": "See {IERC721-getApproved}."
				},
				"isApprovedForAll(address,address)": {
					"details": "See {IERC721-isApprovedForAll}."
				},
				"name()": {
					"details": "See {IERC721Metadata-name}."
				},
				"owner()": {
					"details": "Returns the address of the current owner."
				},
				"ownerOf(uint256)": {
					"details": "See {IERC721-ownerOf}."
				},
				"renounceOwnership()": {
					"details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
				},
				"safeTransferFrom(address,address,uint256)": {
					"details": "See {IERC721-safeTransferFrom}."
				},
				"safeTransferFrom(address,address,uint256,bytes)": {
					"details": "See {IERC721-safeTransferFrom}."
				},
				"setApprovalForAll(address,bool)": {
					"details": "See {IERC721-setApprovalForAll}."
				},
				"supportsInterface(bytes4)": {
					"details": "See {IERC165-supportsInterface}."
				},
				"symbol()": {
					"details": "See {IERC721Metadata-symbol}."
				},
				"totalSupply()": {
					"details": "Burned tokens are calculated here, use _totalMinted() if you want to count just minted tokens."
				},
				"transferFrom(address,address,uint256)": {
					"details": "See {IERC721-transferFrom}."
				},
				"transferOwnership(address)": {
					"details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
				}
			},
			"version": 1
		},
		"userdoc": {
			"errors": {
				"ApprovalCallerNotOwnerNorApproved()": [
					{
						"notice": "The caller must own the token or be an approved operator."
					}
				],
				"ApprovalQueryForNonexistentToken()": [
					{
						"notice": "The token does not exist."
					}
				],
				"ApprovalToCurrentOwner()": [
					{
						"notice": "The caller cannot approve to the current owner."
					}
				],
				"ApproveToCaller()": [
					{
						"notice": "The caller cannot approve to their own address."
					}
				],
				"BalanceQueryForZeroAddress()": [
					{
						"notice": "Cannot query the balance for the zero address."
					}
				],
				"MintToZeroAddress()": [
					{
						"notice": "Cannot mint to the zero address."
					}
				],
				"MintZeroQuantity()": [
					{
						"notice": "The quantity of tokens minted must be more than zero."
					}
				],
				"OwnerQueryForNonexistentToken()": [
					{
						"notice": "The token does not exist."
					}
				],
				"TransferCallerNotOwnerNorApproved()": [
					{
						"notice": "The caller must own the token or be an approved operator."
					}
				],
				"TransferFromIncorrectOwner()": [
					{
						"notice": "The token must be owned by `from`."
					}
				],
				"TransferToNonERC721ReceiverImplementer()": [
					{
						"notice": "Cannot safely transfer to a contract that does not implement the ERC721Receiver interface."
					}
				],
				"TransferToZeroAddress()": [
					{
						"notice": "Cannot transfer to the zero address."
					}
				],
				"URIQueryForNonexistentToken()": [
					{
						"notice": "The token does not exist."
					}
				]
			},
			"kind": "user",
			"methods": {},
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"contracts/OBYC.sol": "OkayBearsYachtClub"
		},
		"evmVersion": "london",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": false,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"@openzeppelin/contracts/access/Ownable.sol": {
			"keccak256": "0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673",
			"license": "MIT",
			"urls": [
				"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2",
				"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y"
			]
		},
		"@openzeppelin/contracts/security/ReentrancyGuard.sol": {
			"keccak256": "0x190dd6f8d592b7e4e930feb7f4313aeb8e1c4ad3154c27ce1cf6a512fc30d8cc",
			"license": "MIT",
			"urls": [
				"bzz-raw://4ce8dfb62d0c4fa260d6eec8f1cd47f5f2a044e11bde5b31d18072fa6e7d9010",
				"dweb:/ipfs/QmTyFztU3tLEcEDnqqiaW4UJetqsU77LXc6pjc9oTXCK5u"
			]
		},
		"@openzeppelin/contracts/token/ERC721/IERC721.sol": {
			"keccak256": "0xab28a56179c1db258c9bf5235b382698cb650debecb51b23d12be9e241374b68",
			"license": "MIT",
			"urls": [
				"bzz-raw://daae589a9d6fa7e55f99f86c0a16796ca490f243fb3693632c3711c0646c1d56",
				"dweb:/ipfs/QmR3zpd7wNw3rcUdekwiv6FYHJqksuTCXLVioTxu6Fbxk3"
			]
		},
		"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol": {
			"keccak256": "0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da",
			"license": "MIT",
			"urls": [
				"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708",
				"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV"
			]
		},
		"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol": {
			"keccak256": "0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9",
			"license": "MIT",
			"urls": [
				"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146",
				"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf"
			]
		},
		"@openzeppelin/contracts/utils/Address.sol": {
			"keccak256": "0xf96f969e24029d43d0df89e59d365f277021dac62b48e1c1e3ebe0acdd7f1ca1",
			"license": "MIT",
			"urls": [
				"bzz-raw://ec772b45a624be516f1c81970caa8a2e144301e9d0921cbc1a2789fef39a1269",
				"dweb:/ipfs/QmNyjwxCrGhQMyzLD93oUobJXVe9ceJvRvfXwbEtuxPiEj"
			]
		},
		"@openzeppelin/contracts/utils/Context.sol": {
			"keccak256": "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
			"license": "MIT",
			"urls": [
				"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
				"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"
			]
		},
		"@openzeppelin/contracts/utils/Strings.sol": {
			"keccak256": "0xa4d1d62251f8574deb032a35fc948386a9b4de74b812d4f545a1ac120486b48a",
			"license": "MIT",
			"urls": [
				"bzz-raw://8c969013129ba9e651a20735ef659fef6d8a1139ea3607bd4b26ddea2d645634",
				"dweb:/ipfs/QmVhVa6LGuzAcB8qgDtVHRkucn4ihj5UZr8xBLcJkP6ucb"
			]
		},
		"@openzeppelin/contracts/utils/cryptography/MerkleProof.sol": {
			"keccak256": "0xd466e8b07f4c6220eac16da5127f3ff142e65f0c15c03c7d38f257b02c8585e1",
			"license": "MIT",
			"urls": [
				"bzz-raw://e6b3cab69f655e40117bbdd8e68d7423f26d1b24248fb189c295f08de8940616",
				"dweb:/ipfs/QmWoyRthsBDMa7gJpH5UCjpa8uNUQfyaGbSgY3uvhBH9F3"
			]
		},
		"@openzeppelin/contracts/utils/introspection/ERC165.sol": {
			"keccak256": "0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b",
			"license": "MIT",
			"urls": [
				"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d",
				"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"
			]
		},
		"@openzeppelin/contracts/utils/introspection/IERC165.sol": {
			"keccak256": "0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1",
			"license": "MIT",
			"urls": [
				"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f",
				"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"
			]
		},
		"@openzeppelin/contracts/utils/math/Math.sol": {
			"keccak256": "0xa1e8e83cd0087785df04ac79fb395d9f3684caeaf973d9e2c71caef723a3a5d6",
			"license": "MIT",
			"urls": [
				"bzz-raw://33bbf48cc069be677705037ba7520c22b1b622c23b33e1a71495f2d36549d40b",
				"dweb:/ipfs/Qmct36zWXv3j7LZB83uwbg7TXwnZSN1fqHNDZ93GG98bGz"
			]
		},
		"contracts/ERC721A.sol": {
			"keccak256": "0xc877ce3d3bdc01e710cbc2745149511cd0575c04c06ade8fc4d2fffcfd28094c",
			"license": "MIT",
			"urls": [
				"bzz-raw://df1cfc9fc2a373c8389979100e00375333b86206ca8ebfe82dc8904b3a527271",
				"dweb:/ipfs/QmPT1F6crrhyBC9Bvwi4TPrfHjAXTAdGC9HL8idv1w9Thv"
			]
		},
		"contracts/IERC721A.sol": {
			"keccak256": "0xca8c9d61fe7834faa521c8e7b0ec0a4a8e60dd6c7ce4aa08736d218faac54627",
			"license": "MIT",
			"urls": [
				"bzz-raw://e6889de7b7f8e67e6465c4a7e5feb2bfbeb4a8059b931ae593d7d243e1cf77c8",
				"dweb:/ipfs/QmSZjGpy2D7dtSmePGtx7KgDYmcE6BDLK9PresvS5467Dm"
			]
		},
		"contracts/OBYC.sol": {
			"keccak256": "0x32b4062a711ca9338a6a1fa26b9df1a6472b256d09048be8443612fb9a9ed60e",
			"license": "MIT",
			"urls": [
				"bzz-raw://ca6ee10d0127a782336579e19d31bd133aedc671804b1afae14b107fccb0f65e",
				"dweb:/ipfs/QmbpxV29o2qqRQbankNuGGXpzCRHU1VAWL8cAgDje3w3UX"
			]
		}
	},
	"version": 1
}

export const OBYCLabsAbi = [
  {
    "type": "constructor",
    "name": "",
    "inputs": [
      {
        "type": "string",
        "name": "_name",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_symbol",
        "internalType": "string"
      },
      {
        "type": "address",
        "name": "_royaltyRecipient",
        "internalType": "address"
      },
      {
        "type": "uint128",
        "name": "_royaltyBps",
        "internalType": "uint128"
      },
      {
        "type": "address",
        "name": "_primarySaleRecipient",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "ApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "_owner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_operator",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "_approved",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ClaimConditionUpdated",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "tuple",
        "name": "condition",
        "components": [
          {
            "type": "uint256",
            "name": "startTimestamp",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "maxClaimableSupply",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "supplyClaimed",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "quantityLimitPerTransaction",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "waitTimeInSecondsBetweenClaims",
            "internalType": "uint256"
          },
          {
            "type": "bytes32",
            "name": "merkleRoot",
            "internalType": "bytes32"
          },
          {
            "type": "uint256",
            "name": "pricePerToken",
            "internalType": "uint256"
          },
          {
            "type": "address",
            "name": "currency",
            "internalType": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct IClaimCondition.ClaimCondition"
      },
      {
        "type": "bool",
        "name": "resetEligibility",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ContractURIUpdated",
    "inputs": [
      {
        "type": "string",
        "name": "prevURI",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "newURI",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DefaultRoyalty",
    "inputs": [
      {
        "type": "address",
        "name": "newRoyaltyRecipient",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "newRoyaltyBps",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnerUpdated",
    "inputs": [
      {
        "type": "address",
        "name": "prevOwner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PrimarySaleRecipientUpdated",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RoyaltyForToken",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "royaltyRecipient",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "royaltyBps",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokenURIRevealed",
    "inputs": [
      {
        "type": "uint256",
        "name": "index",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "revealedURI",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensClaimed",
    "inputs": [
      {
        "type": "address",
        "name": "claimer",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "receiver",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "quantityClaimed",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensLazyMinted",
    "inputs": [
      {
        "type": "uint256",
        "name": "startTokenId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "endTokenId",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "baseURI",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "bytes",
        "name": "encryptedBaseURI",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TransferBatch",
    "inputs": [
      {
        "type": "address",
        "name": "_operator",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_from",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_to",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256[]",
        "name": "_ids",
        "indexed": false,
        "internalType": "uint256[]"
      },
      {
        "type": "uint256[]",
        "name": "_values",
        "indexed": false,
        "internalType": "uint256[]"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TransferSingle",
    "inputs": [
      {
        "type": "address",
        "name": "_operator",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_from",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_to",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_id",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_value",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "URI",
    "inputs": [
      {
        "type": "string",
        "name": "_value",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "_id",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "balanceOfBatch",
    "inputs": [
      {
        "type": "address[]",
        "name": "accounts",
        "internalType": "address[]"
      },
      {
        "type": "uint256[]",
        "name": "ids",
        "internalType": "uint256[]"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "claim",
    "inputs": [
      {
        "type": "address",
        "name": "_receiver",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_quantity",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_currency",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_pricePerToken",
        "internalType": "uint256"
      },
      {
        "type": "tuple",
        "name": "_allowlistProof",
        "components": [
          {
            "type": "bytes32[]",
            "name": "proof",
            "internalType": "bytes32[]"
          },
          {
            "type": "uint256",
            "name": "maxQuantityInAllowlist",
            "internalType": "uint256"
          }
        ],
        "internalType": "struct IDropSinglePhase1155.AllowlistProof"
      },
      {
        "type": "bytes",
        "name": "_data",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "claimCondition",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "startTimestamp",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "maxClaimableSupply",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "supplyClaimed",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "quantityLimitPerTransaction",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "waitTimeInSecondsBetweenClaims",
        "internalType": "uint256"
      },
      {
        "type": "bytes32",
        "name": "merkleRoot",
        "internalType": "bytes32"
      },
      {
        "type": "uint256",
        "name": "pricePerToken",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "currency",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "contractURI",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "encryptDecrypt",
    "inputs": [
      {
        "type": "bytes",
        "name": "data",
        "internalType": "bytes"
      },
      {
        "type": "bytes",
        "name": "key",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "result",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "encryptedData",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getBaseURICount",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getBatchIdAtIndex",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getClaimTimestamp",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_claimer",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "lastClaimedAt",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "nextValidClaimTimestamp",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getDefaultRoyaltyInfo",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "uint16",
        "name": "",
        "internalType": "uint16"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRevealURI",
    "inputs": [
      {
        "type": "uint256",
        "name": "_batchId",
        "internalType": "uint256"
      },
      {
        "type": "bytes",
        "name": "_key",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "revealedURI",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRoyaltyInfoForToken",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "uint16",
        "name": "",
        "internalType": "uint16"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isApprovedForAll",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isEncryptedBatch",
    "inputs": [
      {
        "type": "uint256",
        "name": "_batchId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "lazyMint",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "_baseURIForTokens",
        "internalType": "string"
      },
      {
        "type": "bytes",
        "name": "_data",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "batchId",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "multicall",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "data",
        "internalType": "bytes[]"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "results",
        "internalType": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "nextTokenIdToMint",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "primarySaleRecipient",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "reveal",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index",
        "internalType": "uint256"
      },
      {
        "type": "bytes",
        "name": "_key",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "revealedURI",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "royaltyInfo",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "salePrice",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "receiver",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "royaltyAmount",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "safeBatchTransferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256[]",
        "name": "ids",
        "internalType": "uint256[]"
      },
      {
        "type": "uint256[]",
        "name": "amounts",
        "internalType": "uint256[]"
      },
      {
        "type": "bytes",
        "name": "data",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "safeTransferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "id",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
      },
      {
        "type": "bytes",
        "name": "data",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "approved",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setClaimConditions",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "tuple",
        "name": "_condition",
        "components": [
          {
            "type": "uint256",
            "name": "startTimestamp",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "maxClaimableSupply",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "supplyClaimed",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "quantityLimitPerTransaction",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "waitTimeInSecondsBetweenClaims",
            "internalType": "uint256"
          },
          {
            "type": "bytes32",
            "name": "merkleRoot",
            "internalType": "bytes32"
          },
          {
            "type": "uint256",
            "name": "pricePerToken",
            "internalType": "uint256"
          },
          {
            "type": "address",
            "name": "currency",
            "internalType": "address"
          }
        ],
        "internalType": "struct IClaimCondition.ClaimCondition"
      },
      {
        "type": "bool",
        "name": "_resetClaimEligibility",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setContractURI",
    "inputs": [
      {
        "type": "string",
        "name": "_uri",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setDefaultRoyaltyInfo",
    "inputs": [
      {
        "type": "address",
        "name": "_royaltyRecipient",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_royaltyBps",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setOwner",
    "inputs": [
      {
        "type": "address",
        "name": "_newOwner",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPrimarySaleRecipient",
    "inputs": [
      {
        "type": "address",
        "name": "_saleRecipient",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setRoyaltyInfoForToken",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_bps",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "supportsInterface",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalSupply",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "uri",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "verifyClaim",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_claimer",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_quantity",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_currency",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_pricePerToken",
        "internalType": "uint256"
      },
      {
        "type": "bool",
        "name": "verifyMaxQuantityPerTransaction",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "verifyClaimMerkleProof",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_claimer",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_quantity",
        "internalType": "uint256"
      },
      {
        "type": "tuple",
        "name": "_allowlistProof",
        "components": [
          {
            "type": "bytes32[]",
            "name": "proof",
            "internalType": "bytes32[]"
          },
          {
            "type": "uint256",
            "name": "maxQuantityInAllowlist",
            "internalType": "uint256"
          }
        ],
        "internalType": "struct IDropSinglePhase1155.AllowlistProof"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "validMerkleProof",
        "internalType": "bool"
      },
      {
        "type": "uint256",
        "name": "merkleProofIndex",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  }
]

export const originalObycAbi = [{ "inputs": [{ "internalType": "uint256", "name": "_maxSupply", "type": "uint256" }, { "internalType": "uint256", "name": "_cost", "type": "uint256" }, { "internalType": "uint256", "name": "_maxFreeMintSupply", "type": "uint256" }, { "internalType": "uint256", "name": "_maxMintAmountPerTx", "type": "uint256" }, { "internalType": "string", "name": "_hiddenMetadataUri", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "ApprovalCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [], "name": "ApprovalQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "ApprovalToCurrentOwner", "type": "error" }, { "inputs": [], "name": "ApproveToCaller", "type": "error" }, { "inputs": [], "name": "BalanceQueryForZeroAddress", "type": "error" }, { "inputs": [], "name": "MintToZeroAddress", "type": "error" }, { "inputs": [], "name": "MintZeroQuantity", "type": "error" }, { "inputs": [], "name": "OwnerQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "TransferCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [], "name": "TransferFromIncorrectOwner", "type": "error" }, { "inputs": [], "name": "TransferToNonERC721ReceiverImplementer", "type": "error" }, { "inputs": [], "name": "TransferToZeroAddress", "type": "error" }, { "inputs": [], "name": "URIQueryForNonexistentToken", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "cost", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_maxSupply", "type": "uint256" }], "name": "cutMaxSupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_mintAmount", "type": "uint256" }], "name": "freeMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "hiddenMetadataUri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isFreeMintOpen", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxFreeMintAmountPerAddr", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxFreeMintSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintAmountPerTx", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_mintAmount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_mintAmount", "type": "uint256" }, { "internalType": "address", "name": "_receiver", "type": "address" }], "name": "mintForAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "revealed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_cost", "type": "uint256" }], "name": "setCost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_hiddenMetadataUri", "type": "string" }], "name": "setHiddenMetadataUri", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_maxFreeMintAmountPerAddr", "type": "uint256" }], "name": "setMaxFreeMintAmountPerAddr", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_maxFreeMintSupply", "type": "uint256" }], "name": "setMaxFreeMintSupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_maxMintAmountPerTx", "type": "uint256" }], "name": "setMaxMintAmountPerTx", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "setPaused", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "setRevealed", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_uriPrefix", "type": "string" }], "name": "setUriPrefix", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_uriSuffix", "type": "string" }], "name": "setUriSuffix", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "toggleIsFreeMintOpen", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uriPrefix", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "uriSuffix", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "walletOfOwner", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]


export const mvmContractABI = [
  {
    "type": "constructor",
    "name": "",
    "inputs": [
      {
        "type": "string",
        "name": "_name",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_symbol",
        "internalType": "string"
      },
      {
        "type": "address",
        "name": "_obycAddress",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_obyclabsAddress",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "error",
    "name": "ApprovalCallerNotOwnerNorApproved",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ApprovalQueryForNonexistentToken",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ApprovalToCurrentOwner",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ApproveToCaller",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "BalanceQueryForZeroAddress",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "MintToZeroAddress",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "MintZeroQuantity",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "OwnerQueryForNonexistentToken",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "TransferCallerNotOwnerNorApproved",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "TransferFromIncorrectOwner",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "TransferToNonERC721ReceiverImplementer",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "TransferToZeroAddress",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "URIQueryForNonexistentToken",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "event",
    "name": "Approval",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "approved",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "operator",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "approved",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnerUpdated",
    "inputs": [
      {
        "type": "address",
        "name": "prevOwner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Transfer",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "approve",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "baseURI",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getApproved",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getStatusOfObycToken",
    "inputs": [
      {
        "type": "uint256",
        "name": "_obycTokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256[2]",
        "name": "",
        "internalType": "uint256[2]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isApprovedForAll",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "operator",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isPausedMintL1",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isPausedMintL2",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "mint",
    "inputs": [
      {
        "type": "address",
        "name": "_claimer",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_quantity",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_obycTokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_obycLabTokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_mvmTokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_level",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "obyc",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ERC721A"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "obyclabs",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ERC1155Drop"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ownerOf",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "safeTransferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "safeTransferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      },
      {
        "type": "bytes",
        "name": "_data",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "approved",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setBaseURI",
    "inputs": [
      {
        "type": "string",
        "name": "_newBaseURI",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setCanMintL1",
    "inputs": [
      {
        "type": "bool",
        "name": "_isPausedMintL1",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setCanMintL2",
    "inputs": [
      {
        "type": "bool",
        "name": "_isPausedMintL2",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setOwner",
    "inputs": [
      {
        "type": "address",
        "name": "_newOwner",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "supportsInterface",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tokenIdStatus",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tokenURI",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalSupply",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transformInfoLevelOneByTokenId",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "user",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "obycTokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "obycLabsTokenId",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transformInfoLevelTwoByTokenId",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "user",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "mvmLevelOneTokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "obycTokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "obycLabsTokenId",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "verifyClaim",
    "inputs": [
      {
        "type": "address",
        "name": "_claimer",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_quantity",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_obycTokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_obycLabTokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_mvmTokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_level",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  }
]