# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
