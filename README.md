# Quantity Functions

Functions for conversion between units of mass.

# Usage

Below are usage examples.

Converting from kilos into grams
```
import { convert as convertMass } from "quantity-fns/mass"
convertMass({
    unit: 'kg',
    quantity: 10,
    type: 'mass'
}, 'g') // === 10000
```

Converting from Millilitres to Litres
```
import { convert as convertMass } from "quantity-fns/mass"
convertMass({
    unit: 'ml',
    quantity: 10,
    type: 'volume'
}, 'L') // === 10000
```

Calculating the mass of 1L of water
```
import { convert as convertMass } from "quantity-fns/mass"
import { DensityOf } from "quantity-fns/density";
volumeToMass({
    unit: 'ml',
    quantity: 100,
    type: 'volume'
}, DensityOf.Water /*, "g"*/) // === {quantity: 100, unit: "g", type: "mass"}
```
