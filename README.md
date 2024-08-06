# Supply Chain Tracking Dapp

## About

This is a decentralized application (dapp) powered by Cartesi rollups technology. It tracks products through various stages, verifies and records each stage, and provides transparency to consumers.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en)
- [npm](https://docs.npmjs.com/cli/v10/configuring-npm/install)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
- [Docker](https://docs.docker.com/get-docker/)
- [Cartesi CLI](https://docs.cartesi.io/cartesi-rollups/1.3/development/migration/#install-cartesi-cli)

  ```sh
  npm install -g @cartesi/cli
  ```

### Installation

1. Clone this repo
   ```sh
   git clone https://github.com/alexchinonso/orimo-supply-dapp.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Build and run the dapp via `cartesi-cli`
   ```sh
   cartesi build
   ```
   and
   ```sh
   cartesi run
   ```

## Usage

### Advanced Handlers

#### createProduct

```js
description — create a product.
param data — {name: string, description: string}
```

data sample

```json
{
    "action":"createProduct",
    "data":{
        "name":"Product Name",
        "description":"Product Description"
    }
}
```

#### addStage

```js
description — add a stage to a given product.
param required — {product: UUID, name: string}
param not required — {description: string}
```

data sample

```json
{
    "action":"addStage",
    "data":{
        "product":"d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5",
        "name":"Manufacturing",
        "description":"Product manufactured"
    }
}
```

### Inspect Handlers

#### getAllProducts

```js
description — get all products.
```

#### getProductById

```js
description — get a product by given id.
param data — product id (UUID)
```