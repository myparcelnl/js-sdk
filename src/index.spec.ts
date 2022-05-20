describe('module exports', () => {
  it('exposes the correct data from index.ts', async () => {
    expect.assertions(1);
    const index = await import('@/index');

    expect(Object.keys(index)).toMatchInlineSnapshot(`
      Array [
        "createMyParcelSdk",
        "createPrivateSdk",
        "createPublicSdk",
        "CARRIERS",
        "COUNTRIES",
        "DELIVERY_TYPES",
        "PACKAGE_TYPES",
        "PLATFORMS",
        "SHIPMENT_OPTIONS",
        "GetShipment",
        "GetShipments",
        "PostShipments",
        "GetCarrier",
        "GetCarriers",
        "GetDeliveryOptions",
        "GetPickupLocations",
        "BASE_URL",
        "AbstractClient",
        "FetchClient",
        "AbstractEndpoint",
        "AbstractPublicEndpoint",
        "AbstractPrivateEndpoint",
        "ApiException",
        "UserException",
      ]
    `);
  });
});
