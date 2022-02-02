/**
 * These endpoints don't use an Authorization header and can be safely used in
 * browsers.
 */
export enum PublicGetEndpoints {
  GET_CARRIER = 'getCarrier',
  GET_CARRIERS = 'getCarriers',
  GET_DELIVERY_OPTIONS = 'getDeliveryOptions',
  GET_PICKUP_LOCATIONS = 'getPickupLocations',
}
