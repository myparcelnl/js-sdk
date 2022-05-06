# @myparcel/sdk

[![npm](https://img.shields.io/npm/v/@myparcel/sdk)](https://www.npmjs.com/package/@myparcel/sdk/)
[![coverage](https://img.shields.io/codecov/c/github/myparcelnl/js-sdk?logo=codecov)](https://codecov.io/gh/myparcelnl/js-sdk)

Official JavaScript SDK to connect to the MyParcel API via Node.js or browser.

## Installation

```shell
# Using Yarn
yarn add @myparcel/sdk

# Or NPM
npm i @myparcel/sdk
```

## Endpoints

### Public

Public endpoints do not require authorization and are safe to use in a browser.

- Delivery options
  - [GetDeliveryOptions](./src/endpoints/public/delivery-options/GetDeliveryOptions.ts)
- Pickup locations
  - [GetPickupLocations](./src/endpoints/public/pickup-locations/GetPickupLocations.ts)
- Carriers
  - [GetCarriers](./src/endpoints/public/carriers/GetCarriers.ts)
  - [GetCarrier](./src/endpoints/public/carriers/GetCarrier.ts)

### Private

Private endpoints require an Authorization header. This should be a base64
encoded MyParcel API key. You can create one in the shop settings in
our [backoffice]. See [Authorization] in the API documentation for more
information.

- Shipments
  - [GetShipment](./src/endpoints/private/shipments/GetShipment.ts)
  - [GetShipments](./src/endpoints/private/shipments/GetShipments.ts)
  - [PostShipments](./src/endpoints/private/shipments/PostShipments.ts)

## Usage examples

### Basic usage

The client is Promise-based, so you can use `async/await`, or `Promise.then`.

First, instantiate an SDK and pass the endpoints you want to use.

```js
import { createPrivateSdk, PostShipments } from '@myparcel/sdk';

const clientConfig = {
  headers: {
    Authorization: 'bearer ' + MY_BASE_64_ENCODED_API_KEY
  }
};

const sdk = createPrivateSdk(new FetchClient(clientConfig), [
  new PostShipments(),
]);

```

Then call the endpoint. There are constants available in our SDK for data like
carriers, package types, delivery types and more.
See [constants](#using-constants)

```js
const result = await sdk.postShipments({
  body: [
    {
      carrier: 1,
      options: {
        package_type: 'package',
      },
      recipient: {
        cc: 'NL',
        city: 'Hoofddorp',
        person: 'Ms. Parcel',
        street: 'Antareslaan 31',
      },
    },
  ]
});

console.log(result); // [ 123456 ] (The ID of the shipment that was just created)
```

### Using constants

Our SDK exposes some constants to make working with our API easier.

- Carriers
  ```js
  import { CARRIERS } from '@myparcelnl/sdk';
  
  CARRIERS.POSTNL_NAME // "postnl"
  ```
- **Package types:** Contains all package types' names and IDs.
  ```js
  import { PACKAGE_TYPES } from '@myparcelnl/sdk';
  
  PACKAGE_TYPES.DIGITAL_STAMP_NAME // "digital_stamp"
  PACKAGE_TYPES.PACKAGE_ID // 1
  PACKAGE_TYPES.LETTER // { ID: 3, NAME: "letter" }
  // etc
  ```
- **Delivery types**
  ```js
  import { DELIVERY_TYPES } from '@myparcelnl/sdk';

  DELIVERY_TYPES.STANDARD_NAME // "standard"
  DELIVERY_TYPES.PICKUP_ID // 4
  DELIVERY_TYPES.MORNING // { ID: 1, NAME: "morning" }
  // etc
  ```
- **Countries:** Contains constants for all countries, by name.
  ```js
  import { COUNTRIES } from '@myparcelnl/sdk';
  
  COUNTRIES.NETHERLANDS // "NL"
  COUNTRIES.GERMANY // "DE"
  // etc
  ```

### Creating a new endpoint

To create a new endpoint, you can extend either `AbstractPrivateEndpoint`
or `AbstractPublicEndpoint` and fill in the derived class as needed.

Feel free to add open a pull request to add it to our repository!
See [CONTRIBUTING.md].

### Creating a new client

In this example we're creating an Axios client.

```js
class AxiosClient extends AbstractClient {
  async request(endpoint, options) {
    try {
      const response = await axios.request({
        method: endpoint.method,
        url: this.createUrl(endpoint, options),
        headers: {
          ...this.getHeaders(),
          ...endpoint.getHeaders()
        }
      });

      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
}
```

Now use the new client with an SDK instance:

```js
const sdk = createPublicSdk(new AxiosClient(), [new GetCarriers()]);

const carriers = await sdk.getCarriers();

console.log(carriers); // [ { "id": 1, "name": "postnl", (etc...)
```

## Contributing

See [CONTRIBUTING.md].

[backoffice]: https://backoffice.myparcel.nl/settings

[Authorization]: https://myparcelnl.github.io/api/#5

[CONTRIBUTING.md]: ./CONTRIBUTING.md
