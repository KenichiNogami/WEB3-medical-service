// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MedicalDataNFT is ERC721URIStorage {
    uint256 public tokenCounter;

    constructor () ERC721("MedicalDataNFT", "MDNFT") {
        tokenCounter = 0;
    }

    function createMedicalDataNFT(string memory tokenURI) public returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenCounter++;
        return newTokenId;
    }
}
