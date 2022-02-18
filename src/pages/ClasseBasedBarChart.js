import React from 'react'
import * as d3 from 'd3'

class BarChart extends React.PureComponent {
    constructor(props) {
        super(props)
        this.canvasRef = React.createRef()
    }

    componentDidMount() {
        const data = [ 2, 4, 2, 6, 8 ]

        this.drawBarChart(data)
    }

    drawBarChart(data) {
        const canvasHeight = 400
        const canvasWidth = 600
        const scale = 20

        const svgCanvas = d3.select(this.canvasRef.current)
            .append('svg')
            .attr('width', canvasWidth)
            .attr('height', canvasHeight)
            .style('border', '1px solid black')

        svgCanvas.selectAll('rect')
            .data(data).enter()
                .append('rect')
                .attr('width', 40)
                .attr('height', datapoint => datapoint * scale)
                .attr('fill', 'orange')
                .attr('x', (datapoint, iteration) => iteration * 45)
                .attr('y', datapoint => canvasHeight - datapoint * scale)
        
        svgCanvas.selectAll('text')
            .data(data).enter()
                .append('text')
                .attr('x', (datapoint, i) => i * 45 + 10)
                .attr('y', (datapoint, i) => canvasHeight - datapoint * scale - 10)
                .text(datapoint => datapoint)
    }

    render() {
        return (
            <div className='barchart-main-wrapper'>
                <h2>Classe Based Bar Chart</h2>
                <div ref={this.canvasRef} />
            </div>
        )
    }
}

export default BarChart

