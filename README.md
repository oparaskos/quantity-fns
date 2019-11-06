[![quantity-fns | npm](https://img.shields.io/npm/l/quantity-fns.svg)
![](https://img.shields.io/npm/v/quantity-fns.svg)
](https://npmjs.com/quantity-fns)
[![Package Size | BundlePhobia](https://img.shields.io/bundlephobia/min/quantity-fns.svg)](https://bundlephobia.com/result?p=quantity-fns)
[![Vulnerability Analysis | Snyk](https://img.shields.io/snyk/vulnerabilities/npm/quantity-fns.svg)](https://snyk.io/test/npm/quantity-fns)
[![CI Pipeline | CircleCI](https://img.shields.io/circleci/build/gh/oparaskos/quantity-fns.svg)](https://circleci.com/gh/oparaskos/quantity-fns)

# ⚖️ Quantity Functions <!-- omit in toc -->
This library aims to provide a set of functions and utilities for conversion between units of mass, volume, and energy.

At this early stage it is still missing many features and units (See [Notice](#notice)).

Please feel free to fork and raise a pull request to add functionailty you deem widely useful within this domain (See [Contributions](#contributions)).


## Table of Contents <!-- omit in toc -->
- [🏁 Getting Started](#%f0%9f%8f%81-getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Parsing a quantity](#parsing-a-quantity)
    - [Converting mass (eg. kilos into grams)](#converting-mass-eg-kilos-into-grams)
    - [Converting volume (eg. Millilitres to Litres)](#converting-volume-eg-millilitres-to-litres)
    - [Converting distance (eg. Miles to Kilometers)](#converting-distance-eg-miles-to-kilometers)
    - [Calculating mass of volume and density (eg. 1L of water)](#calculating-mass-of-volume-and-density-eg-1l-of-water)
    - [Convert energy (eg. Joules to Kilocalories)](#convert-energy-eg-joules-to-kilocalories)
    - [Convert density (eg. lb/ft3 -> kg/m3)](#convert-density-eg-lbft3---kgm3)
    - [Convert quantities with unknown types](#convert-quantities-with-unknown-types)
  - [🛠️ Building](#%f0%9f%9b%a0%ef%b8%8f-building)
- [⚠️ Notice](#%e2%9a%a0%ef%b8%8f-notice)
- [📜 License](#%f0%9f%93%9c-license)
- [💁 Contributions](#%f0%9f%92%81-contributions)
  - [Developer's Certificate of Origin 1.1](#developers-certificate-of-origin-11)

## 🏁 Getting Started

The below examples are given in TypeScript, but should be easily adapted to JavaScript. TypeScript definitions are bundled with the package.

### Installation
The library is available as an npm package. To install a package run:

```bash
npm install quantity-fns --save
# or with yarn
yarn add quantity-fns
```

### Usage

#### Parsing a quantity
```typescript
import { parse, format } from "quantity-fns"
// Parsing
parse("10 meters") // === { unit: 'meters', quantity: 10, type: 'distance' }
parse("10 ml") // === { unit: 'ml', quantity: 10, type: 'volume' }
parse("10 kg") // === { unit: 'kg', quantity: 10, type: 'mass' }
parse("10 mi", {type: 'mass'}) // throws "mi is not a unit of mass"
parse("1,3 km", {locales: 'de-DE'}) //  === { unit: 'km', quantity: 1.3, type: 'distance' }

// Formatting
format(parse("1 km")) // === "1 km"

// Formatting with locale
format(parse("1.300,02 km", {locales: 'de-DE'})) // === "1,300.02 km"
format(parse("1,300.02 km"), {locales: 'de-DE'}) // === "1.300,02 km"
```

#### Converting mass (eg. kilos into grams)
```typescript
import { convert as convertMass } from "quantity-fns/mass"
convertMass({
    unit: 'kg',
    quantity: 10,
    type: 'mass'
}, 'g') // === {unit: 'g', quantity: 10000}
```

#### Converting volume (eg. Millilitres to Litres)
```typescript
import { convert as convertVolume } from "quantity-fns/volume"
convertVolume({
    unit: 'ml',
    quantity: 10,
    type: 'volume'
}, 'L') // === {unit: 'L', quantity: 10000}
```

#### Converting distance (eg. Miles to Kilometers)
```typescript
import { convert as convertDistance } from "quantity-fns/distance"
convertDistance({
    unit: 'mi',
    quantity: 1,
    type: 'distance'
}, 'km') // === { unit: 'km', quantity: 1.609 }
```

#### Calculating mass of volume and density (eg. 1L of water)
```typescript
import { volumeToMass } from "quantity-fns/volume"
import { DensityOf } from "quantity-fns/density";
volumeToMass({
    unit: 'ml',
    quantity: 100,
    type: 'volume'
}, DensityOf.Water /*, "g"*/) // === {quantity: 100, unit: "g", type: "mass"}
```

#### Convert energy (eg. Joules to Kilocalories)
```typescript
import { convert as convertEnergy } from "quantity-fns/energy"
convertEnergy({
    unit: 'J',
    quantity: 100,
    type: 'energy'
}, 'kcal') // === { quantity: 0.0239, unit: 'kcal', type: 'energy' }
```

#### Convert density (eg. lb/ft3 -> kg/m3)
```typescript
import { convert as convertDensity } from "quantity-fns/density"
convertDensity({
    unit: 'lb/ft3',
    quantity: 1,
    type: 'density'
}, 'kg/m3') // === { quantity: 16.0184, unit: 'kg/m3', type: 'density' }
```

#### Convert quantities with unknown types
For applications where the type of the unit is not known but conversion
is needed you can call the `convert` function exported from the package root.

```typescript
import { convert } from "quantity-fns"
convert({
    unit: 'lb/ft3',
    quantity: 1,
    type: 'density'
}, 'kg/m3') // Recognises the `type` 'density' and converts density as normal.
```

### 🛠️ Building
The library is written with TypeScript, and uses the Mocha and chai frameworks. It has no dependencies save for the scant development dependencies.

The unit tests are using the Chai assertion framework.

```bash
# Clone the project using git
git clone git@github.com:oparaskos/quantity-fns.git
cd quantity-fns
npm i # Install the dev dependencies
# Run the tests using mocha, with ts-node
npm run test
# Produce the `dist/` folder containing javascript
npm run build
```

## ⚠️ Notice

At this early stage this library cannot be garunteed to be as accurate as needed for many use cases, there may exist flaws and issues inherent to any software project which are not tested against. For this reason libraries such as this one may not be suitable for mission critical applications such as medical devices.

If you do decide to use this library in such applications please be thorough in your testing.

However in the interest of developing this further you may wish to open a pull request against this library to test, prove and improve the accuracy of the results. This kind of contribution is greatly appreciated (See [Contributions](#contributions)).

## 📜 License

This Library and its source code is licensed under the ISC license.

Copyright © 2019, Oliver Paraskos

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

Source: http://opensource.org/licenses/ISC

## 💁 Contributions

Contributions can be made by submitting a pull request against the [github project](https://github.com/oparaskos/quantity-fns)

### Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

a. The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

b. The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

c. The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

d. I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
