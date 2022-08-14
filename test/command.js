// truffle console

const instance = await NftMarket.deployed();

instance.mintToken("https://gateway.pinata.cloud/ipfs/Qmb4aom5xNRE5CBRHZsxCsYSdcmX8zfHXgM7ovZxLp3CqL","500000000000000000", {value: "25000000000000000",from: accounts[0]})
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmcqmheqoNhzNgTpgfVevKKVz3uQHvnbW85g1x7265gETd","300000000000000000", {value: "25000000000000000",from: accounts[0]})

// example functions
// #################
// instance.getAllNftsOnSale()
// instance.tokenURI(1)
// instance.tokenURI(2)
// instance.ownerOf(1)
// instance.ownerOf(2)
