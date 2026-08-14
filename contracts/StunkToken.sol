// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract PairFactory {

    enum PairType {
        Stock,
        Meme,
        Currency,
        Crypto,
        Commodity,
        Leverage,
        Custom
    }

    struct Pair {

        address creator;

        address token;

        string referenceAsset;

        PairType pairType;

        bool active;
    }

    uint256 public pairCount;

    mapping(uint256 => Pair) public pairs;

    event PairCreated(
        uint256 indexed id,
        address indexed creator,
        address token,
        string referenceAsset,
        PairType pairType
    );

    function createPair(
        address token,
        string memory referenceAsset,
        PairType pairType
    ) external {

        require(
            token != address(0),
            "Invalid token"
        );

        pairs[pairCount] = Pair({
            creator: msg.sender,
            token: token,
            referenceAsset: referenceAsset,
            pairType: pairType,
            active: true
        });

        emit PairCreated(
            pairCount,
            msg.sender,
            token,
            referenceAsset,
            pairType
        );

        pairCount++;
    }

}
