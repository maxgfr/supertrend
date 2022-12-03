# supertrend

The Super Trend indicator, is a trending indicator that can be used to identify if the price is in an upward or downward trend. If the price is above the line then it acts as a point of support, and if below the line it acts as a point of resistance. The indicator is based on the ATR indicator, and is used to identify the trend direction and strength.

## Installation

```bash
yarn add supertrend
```

## Usage

```typescript
import { supertrend } from 'supertrend';

supertrend({
  initialArray: [
    {"high":4035,"low":3893.77,"close":4020.99},
    ...
    {"high":5000,"low":4900.77,"close":4950.99},
  ],
  multiplier: 3,
  period: 10,
})
// => [ 0, 4670.9619, 2000 ]
```
