## Selections
* Can select by tag name, id, class name
* can be scoped
` d3.select('#foo').selectAll('p')`

### Element CRUD
#### selection.attr
* can be used as getter or setter
* setter version: .attr('name', value)
* value can be a function whose form looks like:

```
function(d, i, nodes){

}
```
* d is datum, i is index, nodes is array of nodes in selection
* `this` is bound to actual DOM element (not true if you use arrow function)

#### selection.style
#### selection.property
#### selection.classed
* .classed(names[, value]) - can specify space-separated list of class names

#### selection.text
* similar to selection.html (used to set innerHtml)

#### selection.append('type')
* Will create a new element and append it to last child of each node in selection

#### selection.insert
* Can be used to specify placement of where element is appended

#### selection.remove

### Handling Events
`selection.on('type', listener)`
