export type Trait = "attack" | "health" | "speed";

export type NftAttribute = {
  trait_type: Trait;
  value: string;
}

export type NftMeta = {
  name: string;
  description: string;
  image: string;
  attributes: NftAttribute[];
}

export type NftCore = {
  tokenId: number;
  price: number;
  creator: string;
  isListed: boolean
}

export type Nft = {
  meta: NftMeta
} & NftCore
// this export creates a sub column inside NFTCore. With it, you can call
// <constant>.meta
//  <constant>.meta.name
//  <constant>.meta.description
//  <constant>.meta.image
//  <constant>.meta.attributes
// <constant>.tokenId
// <constant>.price
// <constant>.creator
// <constant>.isListed

export type FileReq = {
  bytes: Uint8Array;
  contentType: string;
  fileName: string;
}