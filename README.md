# Creating the app
## Setup App
```
npx create-next-app nft-marketplace --typescript

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p 

npm install @tailwindcss/forms

npm install ethers @metamask/providers
```

## Setup Truffle
```
npm install -g truffle
<!-- maybe not required every time. run next line instead -->

truffle init

truffle migrate
<!-- after configuring contracts and config -->

npm install @openzeppelin/contracts

truffle migrate --reset

```

## Trying out Truffle in console

```

truffle console
const instance = await NftMarket.deployed()
instance

const name = await instance.name()
name

const symbol = await instance.symbol()
symbol

```

> Promise creates an instance of an object.

## Loading contracts
To load truffle contracts, ensure that metamask is connected to ganache network.
Then load contracts in code.

---

# Steps to replicate
- install npm dependencies
- scaffold of the file directories