const data = [
  { name: 'Alice', math: 93, science: 84 },
  { name: 'Bobby', math: 81, science: 97 },
  { name: 'Carol', math: 74, science: 88 },
  { name: 'David', math: 64, science: 76 },
  { name: 'Emily', math: 80, science: 94 }
]
const width = 600
const height = 400

const xScale = d3.scaleLinear()
	.domain([0, 100])
	.range([0, width])

const yScale = d3.scaleBand()
	.domain(data.map(d => d.name))
	.range([0, height])

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
