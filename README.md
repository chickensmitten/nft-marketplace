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

The rest can read it in tailwind documentation. It is updated from time to time.

---

# Steps to replicate
- install npm dependencies
- scaffold of the file directories