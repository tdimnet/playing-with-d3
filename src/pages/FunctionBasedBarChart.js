import { useRef, useEffect } from 'react'
import * as d3 from 'd3'

const Component = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const data = [ 2, 4, 2, 6, 8]
        drawBarChart(data)
    }, [])

    function drawBarChart(data) {
        const canvasHeight = 400
        const canvasWidth = 600
        const scale = 20

        const svgCanvas = d3.select(canvasRef.current)
            .append('svg')
            .attr('width', canvasWidth)
            .attr('height', canvasHeight)
            .style('border', '1px solid black')

        svgCanvas.selectAll('rect')
            .data(data).enter()
    }

    return (
        <div className='barchart-main-wrapper'>
            <h2>Function Based Bar Chart</h2>
            <div ref={canvasRef} />
        </div>
    )
}

export default Component

