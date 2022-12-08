export type PlatformId = 1 | 2 | 3;

export type PlatformName = 'myparcel' | 'belgie' | 'flespakket';

export type PlatformNameOrId = PlatformName | PlatformId;

export type CarrierName =
  | 'postnl'
  | 'bpost'
  | 'cheapcargo'
  | 'dpd'
  | 'instabox'
  | 'dhl'
  | 'bol.com'
  | 'ups'
  | 'dhlforyou'
  | 'dhlparcelconnect'
  | 'dhleuroplus';

export type CarrierId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type CarrierNameOrId = CarrierName | CarrierId;

/** @see https://myparcelnl.github.io/api/#6_A_1 */
export type PackageTypeId = 1 | 2 | 3 | 4;

/** @see https://myparcelnl.github.io/api/#6_A_1 */
export type PackageTypeName = 'package' | 'mailbox' | 'letter' | 'digital_stamp';

/** @see https://myparcelnl.github.io/api/#6_A_2 */
export type DeliveryTypeId = 1 | 2 | 3 | 4;

/** @see https://myparcelnl.github.io/api/#6_A_2 */
export type DeliveryTypeName = 'morning' | 'standard' | 'evening' | 'pickup';

/**
 * @see https://myparcelnl.github.io/api/#6_A_3
 */
export type ShipmentOptionName =
  | 'age_check'
  | 'cooled_delivery'
  | 'insurance'
  | 'large_format'
  | 'only_recipient'
  | 'printerless_return'
  | 'return'
  | 'same_day_delivery'
  | 'signature';

/**
 * 1: commercial goods, 2: commercial samples, 3: documents, 4: gifts, 5: return shipment.
 *
 * @see https://myparcelnl.github.io/api/#package_contents
 */
export type CustomsDeclarationContents = 1 | 2 | 3 | 4 | 5;

/**
 * @see https://myparcelnl.github.io/api/#shipment_status
 */
export type ShipmentStatus = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
