// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCounter;

    event Transfer(
        address from,
        address receiver,
        uint amount,
        string message,
        uint256 timesamp,
        string keyword
    );

    // object
    struct TransferStruct {
        address from;
        address receiver;
        uint amount;
        string message;
        uint256 timesamp;
        string keyword;
    }

    TransferStruct[] transactions;

    // void
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCounter = transactionCounter + 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        // return list of transaction
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        // return number of transactions
        return transactionCounter;
    }
}
