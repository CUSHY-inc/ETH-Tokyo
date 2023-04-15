import { Nfts } from "@/src/store/modules/nfts";

const getNfts = async (addr: string, chain: string): Promise<Nfts[] | undefined> => {

    let nfts: Nfts[] = [];
    let res: any;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "id": 1,
      "jsonrpc": "2.0",
      "method": "qn_fetchNFTs",
      "params": [{
        "wallet": "0xb399C7BB2349D545C8d4CFCF927876eACaC8B979",
        "page": 1,
        "perPage": 10,
      }]
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    await fetch("https://burned-light-gas.discover.quiknode.pro/c187749a56d0dcc62b48d6fdc73a7dca48081cc2/", requestOptions)
      .then(response => response.text())
      .then(result => res = JSON.parse(result))
      .catch(error => console.log('error', error));

    if (res) {
        const assets = res.result.assets;
        if (assets.length > 0) {
            for (let i = 0; i < assets.length; i++) {
                const nft: Nfts = {
                    contractAddr: assets[i].collectionAddress,
                    title: assets[i].name,
                    image: assets[i].imageUrl,
                }
                nfts.push(nft);
            }
        }
    }

    return nfts;
}

const getImage = (uri: string): string => {
    let img;
    var pattern = 'ipfs';
    if (!uri.indexOf(pattern)) {
        img = uri.replace('ipfs://', 'https://ipfs.io/ipfs/');
    } else {
        img = uri;
    }
    return img;
}

export default getNfts;