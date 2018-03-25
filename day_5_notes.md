## Axes

### Axes come from scales
* D3 has built-in methods for axes
* Axis consistents of path element with g elements for "ticks"
* `selection.call` is used to invoke a method and pass the selection to  and then return the selection

### Moving axes into view
* SVG's default position is top left
* Need to use transform attribute to position axes

### d3 Margin Convention
* Reserve margins on sides of chart for axes
* Subtract margins when defining width and height
