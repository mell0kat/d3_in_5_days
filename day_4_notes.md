## D3 Scales

### Fundamentals
* Have a domain and a range
* d3.scaleX returns a scale function
* REVERSIBLE
  * Can swap domain and range OR
  *  Use the `invert` method

```
const decimalToPercent = d3.scaleLinear()
    .domain([0, 1])
    .range([0, 100])

decimalToPercent.invert(50) // 0.5
```

### Outliers
* There is nothing stopping someone from inputted a value greater than the defined domain
* If you need to limit it, you can call the `clamp` method

```
const percentToDecimal = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 1])
    .clamp(true)

percentToDecimal(-10) // 0
percentToDecimal(150) // 1
percentToDecimal(200) // 1
```

### Scales in practice
* Making your charts fill available space
* `bandScale` is a good way to calculate width (or height in this case) of bars
  * domain is set of values that can be coerced to string
  * range would be the space you want the chart to take up
