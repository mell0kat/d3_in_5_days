const data = [
  { name: 'Alice', math: 93, science: 84 },
  { name: 'Bobby', math: 81, science: 97 },
  { name: 'Carol', math: 74, science: 88 },
  { name: 'David', math: 64, science: 76 },
  { name: 'Emily', math: 80, science: 94 }
]
const margin =  { top: 10, right: 10, bottom: 20, left: 50}
const width = 600 - margin.left - margin.right
const height = 400 - margin.top - margin.bottom

const xScale = d3.scaleLinear()
	.domain([0, 100])
	.range([0, width])

const yScale = d3.scaleBand()
	.domain(data.map(d => d.name))
	.range([0, height])

const svg = d3.select('#chart')
	.append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('position', 'absolute')
	.style('top', 0)

const axisContainer = svg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)

axisContainer.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(xScale))

axisContainer.append('g')
  .call(d3.axisLeft(yScale)) // we don't have to move this at all now

const render = (subject) => {

	const bars = d3.select('#chart')
	.selectAll('div')
	.data(data, d => d.name)

	const newBars = bars
	.enter() // returns enter select for data that need DOM elements
	.append('div')
	.attr('class', 'bar')
	.style('width', 0)

	// combine the selections so you can act on them together
	newBars.merge(bars)
	.transition()
	.style('width', d => `${xScale(d[subject])}px`)
	.style('height', d => `${yScale.bandwidth()}px`)
}

render('math')
