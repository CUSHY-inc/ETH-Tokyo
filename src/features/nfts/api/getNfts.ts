import { Nfts } from "@/src/store/modules/nfts";

const getNfts = async (addr: string, chain: string): Promise<Nfts[] | undefined> => {

    let nfts: Nfts[] = [];
    let res;
    const reqOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow',
    };

    switch (chain) {
        case 'Ethereum':
            chain = 'mainnet';
            break;
        case 'Goerli':
            chain = 'goerli';
            break;
        default:
            return;
    }

    const apiKey = process.env.ALCHEMY_ID;
    const baseURL = `https://eth-${chain}.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
    const fetchURL = `${baseURL}?owner=${addr}`;

    await fetch(fetchURL, reqOptions)
    .then(response => response.json())
    .then(response => res = response)
    .catch(err => console.error(err));

    if (res) {
        for (let i = 0; i < res!.totalCount; i++) {
            const nft: Nfts = {
                contractAddr: res!.ownedNfts[i].contract.address,
                title: res!.ownedNfts[i].title,
                image: getImage(res!.ownedNfts[i].metadata.image),
            }
            nfts.push(nft);
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