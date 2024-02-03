//SPDX-License-Identifier:MIT
pragma solidity ^0.8.4;

//Imports
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract ecoBlock is ERC721URIStorage{
    using Counters for Counters.Counter;
     //State variables
    Counters.Counter private _tokenIds;//For creating tokenIds and incrementing
    Counters.Counter private _itemsSold;
    uint256 listPrice=0.001 ether;
    address payable owner;
    mapping(uint256 => MarketItem) private idMarketItem;
    struct MarketItem{
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    //Events
    event idMarketItemCreated(
        uint256 indexed tokenId;
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    //Maintains Owner Authority
    modifier onlyOwner {
        require(
            msg.sender==owner,
            "Insufficient Authority"
        );
        _;//makes sure function continues after checking modifier
    }

    //Setting Token name and Symbol
    constructor() ERC721("Sustainable Ecology Token","SUSECO"){
        owner==payable(msg.sender);
    }
    //Used by owner to update the listing price for listing NFTs on the marketplace
    function updateListingPrice(uint256 _ListPrice) public payable onlyOwner{
        listPrice=_ListPrice;
    }
    //view is used to read state variable
    function getListingPrice() public view returns(uint256){
        return listPrice;
    }

    //Used by a Client to list an NFT
    function createToken(string memory tokenURI,uint256 price) public payable return(uint256){
        _tokenIds.increment();
        uint256 newTokenId=_tokenIds.current();

        _mint(msg.sender,newTokenId);
        _setTokenURI(newTokenId,tokenURI);

        createMarketItem(newTokenId,price);

        return newTokenId;
    }

    //Used to create a space in MarketPlace for the NFT
    function createMarketItem(uint256 tokenURI,uint256 price) private{
        require(price>=0,"Minimum Price is 0.5");
        require(msg.value>=listPrice,"Price must be greater than Listing Price");

        idMarketItem[tokenId]=MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),//implies the contract itself
            price,
            false
        );
        //Transfering NFT from listing person to contract
        _transfer(msg.sender,address(this),tokenId);

    //Emits info that a Market Item Created
        emit idMarketItemCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );
        
    }

    //ReSale function(for a user who want to resale a bought NFT)
    function reSellToken(uint256 tokenId,uint256 price) public payable{
        require(idMarketItem[tokenId].owner==msg.sender,"Ownership Invalid");
        require(msg.value>=listPrice,"Price must be greater than Listing Price");

        idMarketItem[tokenId].sold=false;
        idMarketItem[tokenId].price=price;
        idMarketItem[tokenId].seller=payable(msg.sender);
        idMarketItem[tokenId].owner=payable(address(this));

        _itemsSold.decrement();//Resale Not Sale so decrement

         _transfer(msg.sender,address(this),tokenId);

    }

    //Selling NFT
    function createMarketSale(uint256 tokenId) public payable{
        uint256 price=idMarketItem[tokenId].price;
        require(msg.value==price,"Insufficient Amount");

        idMarketItem[tokenId].owner=payable(msg.sender);
        idMarketItem[tokenId].sold=true;
        idMarketItem[tokenId].owner=payable(address(0));//Delinking NFT ownership from contract
       
       _itemsSold.increment();

       _transfer(address(this),msg.sender,tokenId);

       payable(owner).transfer(listPrice);//transfering Commission to MarketPlace Owner
       payable(idMarketItem[tokenId].seller).transfer(msg.value);//Tranfer token to Seller
    }

    //Fetching NFTs available in MarketPlace
    function fetchMarketItem() public view returns(MarketItem[] memeory){
        uint256 itemCount=_tokenIds.current();
        uint256 unsoldItemCount=_tokenIds.current() - _itemsSold.current();
        uint256 currentIndex=0;

        MarketItem[] memory items=new MarketItem[](unsoldItemCount);
        for(uint256 i=0;i<itemCount;i++){
            if(idMarketItem[i+1].owner==address(this)){
                uint256 currentId=i+1;

                MarketItem storage currentItem =idMarketItem[currentId];//Struct to Struct info transfer
                items[currentIndex]=currentItem;
                currentIndex+=1;
            }
        }
        return items;
    }

    //Displaying Bought NFTs of User
    function fetchMyNFT() public view returns(MarketItem[] memory){
        uint256 totalCount=_tokenIds.current();
        uint256 itemCount=0;
        uint256 currentIndex=0;

        for(uint256 i=0;i<itemCount;i++){
            if(idMarketItem[i+1].owner==msg.sender){
                itemCount+=1;
            }
        }
        MarketItem[] memory items=new MarketItem[](itemCount);
        for(uint256 i=0;i<itemCount;i++){
            if(idMarketItem[i+1].owner==msg.sender){
                uint256 currentId=i+1;
                MarketItem storage currentItem =idMarketItem[currentId];//Struct to Struct info transfer
                items[currentIndex]=currentItem;
                currentIndex+=1;
               
            }
         }
        return items;
    }

    //Displaying  NFTs listed by an individual
    function fetchItemsListed() public view return(MarketItem[] memory){
        uint256 totalCount=_tokenIds.current();
        uint256 itemCount=0;
        uint256 currentIndex=0;

        for(uint256 i=0;i<itemCount;i++){
            if(idMarketItem[i+1].seller==msg.sender){
                itemCount+=1;
            }
        }
        MarketItem[] memory items=new MarketItem[](itemCount);
        for(uint256 i=0;i<itemCount;i++){
            if(idMarketItem[i+1].seller==msg.sender){
                uint256 currentId=i+1;
                MarketItem storage currentItem =idMarketItem[currentId];//Struct to Struct info transfer
                items[currentIndex]=currentItem;
                currentIndex+=1;
               
            }
         }
        return items;
    }

}


