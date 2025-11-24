# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.0.0](https://github.com/myparcelnl/js-sdk/compare/v4.4.2...v5.0.0) (2025-11-24)


### ⚠ BREAKING CHANGES

* migrate to @myparcel-dev scope (#193)

### :sparkles: New Features

* migrate to [@myparcel-dev](https://github.com/myparcel-dev) scope ([#193](https://github.com/myparcelnl/js-sdk/issues/193)) ([8e4efbd](https://github.com/myparcelnl/js-sdk/commit/8e4efbd59ddebb4ddf8271b6521cc27cc814846b))


### :bug: Bug Fixes

* update release.config.cjs to use [@myparcel-dev](https://github.com/myparcel-dev) scope ([41d42ee](https://github.com/myparcelnl/js-sdk/commit/41d42ee5c7fcdf0420d7909516ab7b905e68cd17))

## [4.4.2](https://github.com/myparcelnl/js-sdk/compare/v4.4.1...v4.4.2) (2025-06-15)


### :bug: Bug Fixes

* **FetchClient:** Move from the AbortSignal back to the AbortController because bigger browser/node support ([#184](https://github.com/myparcelnl/js-sdk/issues/184)) ([0cb48c2](https://github.com/myparcelnl/js-sdk/commit/0cb48c2d8d6d047230b7bcf237cd7cb44d32e1b1))

## [4.4.1](https://github.com/myparcelnl/js-sdk/compare/v4.4.0...v4.4.1) (2025-06-11)


### :bug: Bug Fixes

* **fetchclient:** fix fetch abort client not working with interceptors ([#183](https://github.com/myparcelnl/js-sdk/issues/183)) ([e4543d2](https://github.com/myparcelnl/js-sdk/commit/e4543d2e40f83cc152e7bd2b852a03b9a74c44a3))

## [4.4.0](https://github.com/myparcelnl/js-sdk/compare/v4.3.0...v4.4.0) (2025-06-10)


### :sparkles: New Features

* **interceptors:** add interceptors for requests and responses ([#180](https://github.com/myparcelnl/js-sdk/issues/180)) ([d4941c3](https://github.com/myparcelnl/js-sdk/commit/d4941c309eb802bf96ac3a79e5f88cda5cf3b5d2))

## [4.3.0](https://github.com/myparcelnl/js-sdk/compare/v4.2.0...v4.3.0) (2025-05-06)


### :sparkles: New Features

* export the PossibleShipmentOption interface ([#179](https://github.com/myparcelnl/js-sdk/issues/179)) ([b5bb116](https://github.com/myparcelnl/js-sdk/commit/b5bb1162dccf9883d6a6e37a0daf954b49299b57))

## [4.2.0](https://github.com/myparcelnl/js-sdk/compare/v4.1.1...v4.2.0) (2025-04-25)


### :sparkles: New Features

* return pdf responses as blobs for content-type `application/pdf` ([#178](https://github.com/myparcelnl/js-sdk/issues/178)) ([f733b61](https://github.com/myparcelnl/js-sdk/commit/f733b61685a4dba07094c317386ab449f54f085b))

## [4.1.1](https://github.com/myparcelnl/js-sdk/compare/v4.1.0...v4.1.1) (2024-10-03)


### :bug: Bug Fixes

* allow passing recipient email when posting shipments ([#169](https://github.com/myparcelnl/js-sdk/issues/169)) ([d999aeb](https://github.com/myparcelnl/js-sdk/commit/d999aeb8fcc0e7559085f379e081a739b3688233)), closes [/developer.myparcel.nl/api-reference/06.shipments.html#_6-b-4](https://github.com/myparcelnl//developer.myparcel.nl/api-reference/06.shipments.html/issues/_6-b-4)

## [4.1.0](https://github.com/myparcelnl/js-sdk/compare/v4.0.0...v4.1.0) (2024-06-07)


### :sparkles: New Features

* expose helper methods ([#171](https://github.com/myparcelnl/js-sdk/issues/171)) ([ae186f0](https://github.com/myparcelnl/js-sdk/commit/ae186f042eca51fb93781e871e31315079409285))

## [4.0.0](https://github.com/myparcelnl/js-sdk/compare/v3.9.0...v4.0.0) (2024-05-31)


### ⚠ BREAKING CHANGES

* FE-2118 - update the DeleteCarrierOptions path (#170)

### :bug: Bug Fixes

* FE-2118 - update the DeleteCarrierOptions path ([#170](https://github.com/myparcelnl/js-sdk/issues/170)) ([b56fe5a](https://github.com/myparcelnl/js-sdk/commit/b56fe5ac145f36eb67f512b9b0d4f82b7199e646))

## [3.9.0](https://github.com/myparcelnl/js-sdk/compare/v3.8.1...v3.9.0) (2024-04-16)


### :sparkles: New Features

* add delete subscription endpoint ([#167](https://github.com/myparcelnl/js-sdk/issues/167)) ([4d435b3](https://github.com/myparcelnl/js-sdk/commit/4d435b336345c97176898fe5f4d547c1d3a0744e))
* add duplicate shop endpoint ([#161](https://github.com/myparcelnl/js-sdk/issues/161)) ([5c80d3f](https://github.com/myparcelnl/js-sdk/commit/5c80d3f45560bd0931555c87187e3c76c7685ab8))
* add types for carrier options parameters ([#165](https://github.com/myparcelnl/js-sdk/issues/165)) ([33e5624](https://github.com/myparcelnl/js-sdk/commit/33e562467cd873e9c8e3bd131369cb35b224a634))
* update account type ([#166](https://github.com/myparcelnl/js-sdk/issues/166)) ([0ca1da3](https://github.com/myparcelnl/js-sdk/commit/0ca1da3a04516e4b9785c11dbd04462ee1997784))

## [3.8.1](https://github.com/myparcelnl/js-sdk/compare/v3.8.0...v3.8.1) (2024-02-14)


### :bug: Bug Fixes

* **delivery-options:** add same_day_delivery parameter ([#160](https://github.com/myparcelnl/js-sdk/issues/160)) ([5207892](https://github.com/myparcelnl/js-sdk/commit/5207892fd2c9e0d827d4905b65fe41de806e76c7))

## [3.8.0](https://github.com/myparcelnl/js-sdk/compare/v3.7.0...v3.8.0) (2024-02-09)


### :sparkles: New Features

* add filters for system country codes ([#157](https://github.com/myparcelnl/js-sdk/issues/157)) ([e985004](https://github.com/myparcelnl/js-sdk/commit/e985004e3170516e3794c187cabbbed9ece3b8ce))

## [3.7.0](https://github.com/myparcelnl/js-sdk/compare/v3.6.0...v3.7.0) (2024-02-07)


### :sparkles: New Features

* add put carrier endpoint ([#158](https://github.com/myparcelnl/js-sdk/issues/158)) ([02bfaaf](https://github.com/myparcelnl/js-sdk/commit/02bfaaf4d05339c364506cc0e6008f1096d8d187))

## [3.6.0](https://github.com/myparcelnl/js-sdk/compare/v3.5.0...v3.6.0) (2024-01-04)


### :sparkles: New Features

* add option to overwrite timeout for individual endpoints ([#150](https://github.com/myparcelnl/js-sdk/issues/150)) ([5e81e18](https://github.com/myparcelnl/js-sdk/commit/5e81e18a5d8b06fce4a3b70d5f333bec3f5d63b8))

## [3.5.0](https://github.com/myparcelnl/js-sdk/compare/v3.4.0...v3.5.0) (2023-12-21)


### :sparkles: New Features

* add getAccounts endpoint ([#149](https://github.com/myparcelnl/js-sdk/issues/149)) ([4f98d5b](https://github.com/myparcelnl/js-sdk/commit/4f98d5b22256c822a63674ce23f299ca517adb8e))

## [3.4.0](https://github.com/myparcelnl/js-sdk/compare/v3.3.1...v3.4.0) (2023-12-19)


### :sparkles: New Features

* add private endpoints ([#144](https://github.com/myparcelnl/js-sdk/issues/144)) ([aed019f](https://github.com/myparcelnl/js-sdk/commit/aed019f07343e3dadba08ba78081ea069e111f90))
* return all content in data when no response property is defined ([#145](https://github.com/myparcelnl/js-sdk/issues/145)) ([5b6e274](https://github.com/myparcelnl/js-sdk/commit/5b6e274e8709201177fa8e975a56dab6f217d62d))


### :bug: Bug Fixes

* add missing exports for endpoints ([#146](https://github.com/myparcelnl/js-sdk/issues/146)) ([b3a349f](https://github.com/myparcelnl/js-sdk/commit/b3a349f4709039630bdcc25d5dfba71cc63a8dc4))

## [3.3.1](https://github.com/myparcelnl/js-sdk/compare/v3.3.0...v3.3.1) (2023-10-31)


### :bug: Bug Fixes

* **endpoint:** remove abstract modifier from property ([71526e1](https://github.com/myparcelnl/js-sdk/commit/71526e18c37c62a63d4044cabed8080c8e539c83))

## [3.3.0](https://github.com/myparcelnl/js-sdk/compare/v3.2.0...v3.3.0) (2023-10-31)


### :sparkles: New Features

* add support for formData ([#142](https://github.com/myparcelnl/js-sdk/issues/142)) ([8752c43](https://github.com/myparcelnl/js-sdk/commit/8752c43bcf848fb94ba29f49396c8aeea667d01e))

## [3.2.0](https://github.com/myparcelnl/js-sdk/compare/v3.1.0...v3.2.0) (2023-10-16)


### :sparkles: New Features

* **client:** support attachment responses ([#137](https://github.com/myparcelnl/js-sdk/issues/137)) ([0676fb5](https://github.com/myparcelnl/js-sdk/commit/0676fb53121b665f27c5267e7c37f7cdbfafebee))

## [3.1.0](https://github.com/myparcelnl/js-sdk/compare/v3.0.1...v3.1.0) (2023-09-27)


### :sparkles: New Features

* **client:** support requests without single root property ([#136](https://github.com/myparcelnl/js-sdk/issues/136)) ([0971e36](https://github.com/myparcelnl/js-sdk/commit/0971e36e8ac0bbb4eeff7e44f7729bae9f35dd81))

## [3.0.1](https://github.com/myparcelnl/js-sdk/compare/v3.0.0...v3.0.1) (2023-09-20)


### :bug: Bug Fixes

* check if response is json before parsing ([#133](https://github.com/myparcelnl/js-sdk/issues/133)) ([f341fb3](https://github.com/myparcelnl/js-sdk/commit/f341fb32ae04759fc83276f987025afaf40d0d96))
* **types:** update shipment response types ([#135](https://github.com/myparcelnl/js-sdk/issues/135)) ([a14fb03](https://github.com/myparcelnl/js-sdk/commit/a14fb03e6b4e58f740199beef28b2d8434a00afc)), closes [#121](https://github.com/myparcelnl/js-sdk/issues/121)

## [3.0.0](https://github.com/myparcelnl/js-sdk/compare/v2.11.0...v3.0.0) (2023-03-06)


### ⚠ BREAKING CHANGES

* remove constants and types and externalize dependencies (#103)

* remove constants and types and externalize dependencies ([#103](https://github.com/myparcelnl/js-sdk/issues/103)) ([fc06b9d](https://github.com/myparcelnl/js-sdk/commit/fc06b9d5c2c0030cb46dfed8057a177a1bebb6f2))

## [2.11.0](https://github.com/myparcelnl/js-sdk/compare/v2.10.1...v2.11.0) (2023-02-16)


### :sparkles: New Features

* add american and canadian states to the data ([#94](https://github.com/myparcelnl/js-sdk/issues/94)) ([e5d5a0e](https://github.com/myparcelnl/js-sdk/commit/e5d5a0e909a49beaddbaaa80ea410d588f924357))

## [2.10.1](https://github.com/myparcelnl/js-sdk/compare/v2.10.0...v2.10.1) (2023-01-10)


### :bug: Bug Fixes

* swap flespakket and sendmyparcel id ([a660a95](https://github.com/myparcelnl/js-sdk/commit/a660a95718a43deaad4bf2c5b009d442557799f8))

## [2.10.0](https://github.com/myparcelnl/js-sdk/compare/v2.9.2...v2.10.0) (2022-12-08)


### :sparkles: New Features

* add new dhl carrier definitions ([#37](https://github.com/myparcelnl/js-sdk/issues/37)) ([4794035](https://github.com/myparcelnl/js-sdk/commit/4794035943b35b68394c0e11f45d9cd4e1be49d9))

## [2.9.2](https://github.com/myparcelnl/js-sdk/compare/v2.9.1...v2.9.2) (2022-12-07)


### :bug: Bug Fixes

* **shipment:** add missing header to post /shipments ([#31](https://github.com/myparcelnl/js-sdk/issues/31)) ([a2aa8ef](https://github.com/myparcelnl/js-sdk/commit/a2aa8efba47c3a758eb30c35f155dfe95e72034d))

## [2.9.1](https://github.com/myparcelnl/js-sdk/compare/v2.9.0...v2.9.1) (2022-12-01)


### :bug: Bug Fixes

* fix relative paths in type declarations ([8d6cb75](https://github.com/myparcelnl/js-sdk/commit/8d6cb75dd613a8cefa5df5bca264271b4caab349))

## [2.9.0](https://github.com/myparcelnl/js-sdk/compare/v2.8.1...v2.9.0) (2022-12-01)


### :sparkles: New Features

* switch to vite ([#33](https://github.com/myparcelnl/js-sdk/issues/33)) ([80bb123](https://github.com/myparcelnl/js-sdk/commit/80bb12313c99549b31ad70da453c88fe1b8f0c5a))

### [2.8.1](https://github.com/myparcelnl/js-sdk/compare/v2.8.0...v2.8.1) (2022-11-09)


### :bug: Bug Fixes

* **shipment:** change package type name to id in post data ([6f06ac9](https://github.com/myparcelnl/js-sdk/commit/6f06ac90a45a81a357b8515ecc7ece0d308b3f88))

## [2.8.0](https://github.com/myparcelnl/js-sdk/compare/v2.7.0...v2.8.0) (2022-10-10)


### :sparkles: New Features

* extra check for pagination with results = 0 ([#22](https://github.com/myparcelnl/js-sdk/issues/22)) ([820d166](https://github.com/myparcelnl/js-sdk/commit/820d166c8ae8d57340b6a36099f626c5ef6d674f))

## [2.7.0](https://github.com/myparcelnl/js-sdk/compare/v2.6.0...v2.7.0) (2022-10-07)


### :sparkles: New Features

* add pagination response handling ([#21](https://github.com/myparcelnl/js-sdk/issues/21)) ([1934bb4](https://github.com/myparcelnl/js-sdk/commit/1934bb412ff308035bb3990cadffb482aff0d8d1))

## [2.6.0](https://github.com/myparcelnl/js-sdk/compare/v2.5.1...v2.6.0) (2022-08-24)


### :sparkles: New Features

* **client:** add timeout option ([#20](https://github.com/myparcelnl/js-sdk/issues/20)) ([4a7319b](https://github.com/myparcelnl/js-sdk/commit/4a7319b118b6d7a9d59c1858438cc8c3d1500e17))

### [2.5.1](https://github.com/myparcelnl/js-sdk/compare/v2.5.0...v2.5.1) (2022-08-18)


### :bug: Bug Fixes

* don't prefix path with slash if path is empty ([a2de9e9](https://github.com/myparcelnl/js-sdk/commit/a2de9e9ca782dabe237f3372e1f512869f191b2a))

## [2.5.0](https://github.com/myparcelnl/js-sdk/compare/v2.4.0...v2.5.0) (2022-08-11)


### :sparkles: New Features

* allow passing headers and parameters to endpoints ([#18](https://github.com/myparcelnl/js-sdk/issues/18)) ([fa4dbdb](https://github.com/myparcelnl/js-sdk/commit/fa4dbdb294719176c99f12bf89a997a6a66ca43b))

## [2.4.0](https://github.com/myparcelnl/js-sdk/compare/v2.3.1...v2.4.0) (2022-08-03)


### :sparkles: New Features

* **fetch:** support text responses ([#17](https://github.com/myparcelnl/js-sdk/issues/17)) ([cc17a03](https://github.com/myparcelnl/js-sdk/commit/cc17a03274b7f070b380aedbf769e3e73056176b))

### [2.3.1](https://github.com/myparcelnl/js-sdk/compare/v2.3.0...v2.3.1) (2022-05-24)


### :bug: Bug Fixes

* don't send content-type with non-POST/PUT requests ([#12](https://github.com/myparcelnl/js-sdk/issues/12)) ([cce556f](https://github.com/myparcelnl/js-sdk/commit/cce556f19d9d442cbc831c33df4106b906e5609c))
* handle having no response body ([#13](https://github.com/myparcelnl/js-sdk/issues/13)) ([a621b61](https://github.com/myparcelnl/js-sdk/commit/a621b6128911ef8e6b9063bf3f18ef9f1322f4e7))

## [2.3.0](https://github.com/myparcelnl/js-sdk/compare/v2.2.1...v2.3.0) (2022-05-23)


### :bug: Bug Fixes

* avoid getting two slashes after base url ([#10](https://github.com/myparcelnl/js-sdk/issues/10)) ([71b28fd](https://github.com/myparcelnl/js-sdk/commit/71b28fdd864312bd192b8e55b7777a3fae2b6e74))


### :sparkles: New Features

* allow optional path variables ([#11](https://github.com/myparcelnl/js-sdk/issues/11)) ([4f83c77](https://github.com/myparcelnl/js-sdk/commit/4f83c77e657ffbd96b223332221d2919de23860f)), closes [#7](https://github.com/myparcelnl/js-sdk/issues/7)
* allow post requests to be executed properly ([#9](https://github.com/myparcelnl/js-sdk/issues/9)) ([c6a7aa1](https://github.com/myparcelnl/js-sdk/commit/c6a7aa1342db2d83cd2f2170d92a1f5ddb497a33))

### [2.2.1](https://github.com/myparcelnl/js-sdk/compare/v2.2.0...v2.2.1) (2022-05-20)


### :bug: Bug Fixes

* inherit types from extended endpoints ([#8](https://github.com/myparcelnl/js-sdk/issues/8)) ([f12bdeb](https://github.com/myparcelnl/js-sdk/commit/f12bdeb769fd4e54749e5b4676a13ff86de7d9ca))

## [2.2.0](https://github.com/myparcelnl/js-sdk/compare/v2.1.0...v2.2.0) (2022-05-20)


### :sparkles: New Features

* add minified and babeled cjs bundle ([#5](https://github.com/myparcelnl/js-sdk/issues/5)) ([d388ed2](https://github.com/myparcelnl/js-sdk/commit/d388ed225702df17c2c77bf029e27b4d12f503a9))

## [2.1.0](https://github.com/myparcelnl/js-sdk/compare/v2.0.3...v2.1.0) (2022-05-20)


### :sparkles: New Features

* add eu countries const ([#6](https://github.com/myparcelnl/js-sdk/issues/6)) ([8f1b821](https://github.com/myparcelnl/js-sdk/commit/8f1b821cab9c9c2d291776786799b6b4acf5f689))
* add shipment options constants ([#4](https://github.com/myparcelnl/js-sdk/issues/4)) ([94c02a5](https://github.com/myparcelnl/js-sdk/commit/94c02a57ce85f2c75221632ae502f7399516f93e))

### [2.0.3](https://github.com/myparcelnl/js-sdk/compare/v2.0.2...v2.0.3) (2022-05-19)


### :bug: Bug Fixes

* simplify header logic ([7cdfa35](https://github.com/myparcelnl/js-sdk/commit/7cdfa355f4a0b38c0b2cec0cdbee7b78330a505b))

### [2.0.2](https://github.com/myparcelnl/js-sdk/compare/v2.0.1...v2.0.2) (2022-05-19)


### :bug: Bug Fixes

* pass headers from endpoint config properly ([f85ad12](https://github.com/myparcelnl/js-sdk/commit/f85ad12906055a024825c870f3580b29c91f193b))

### [2.0.1](https://github.com/myparcelnl/js-sdk/compare/v2.0.0...v2.0.1) (2022-05-16)


### :bug: Bug Fixes

* allow extended endpoints to have any name ([72240cb](https://github.com/myparcelnl/js-sdk/commit/72240cb1b8047ca26871f9a1a7470dbfdb5e8b4b))

## [2.0.0](https://github.com/myparcelnl/js-sdk/compare/v1.1.1...v2.0.0) (2022-05-11)


### ⚠ BREAKING CHANGES

* make platforms export consistent with others

### :bug: Bug Fixes

* make platforms export consistent with others ([88148f8](https://github.com/myparcelnl/js-sdk/commit/88148f8e627fe2470e5efd7898c69dcbaa7163cd))

### [1.1.1](https://github.com/myparcelnl/js-sdk/compare/v1.1.0...v1.1.1) (2022-05-11)


### :bug: Bug Fixes

* fix error saying path variable is missing when using ":" in a parameter ([c5800fb](https://github.com/myparcelnl/js-sdk/commit/c5800fb47649547e0bea2269c39dc71fa8794d42))

## [1.1.0](https://github.com/myparcelnl/js-sdk/compare/v1.0.0...v1.1.0) (2022-04-20)


### :sparkles: New Features

* expand constants ([fd6a06e](https://github.com/myparcelnl/js-sdk/commit/fd6a06e17c8bb94bc82a52b9259de503fe82200e))

## 1.0.0 (2022-04-13)


### :sparkles: New Features

* initial commit ([6589441](https://github.com/myparcelnl/js-sdk/commit/65894417fc2cf8646263ab136fb9a24d8d126a4e))
