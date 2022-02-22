import { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'


function useInterval(callback, delay) {
    const savedCallback = useRef()

    // Remember the latest callback
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval
    useEffect(() => {
        function tick() {
            savedCallback.current()
        }

        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}


const Circle = () => {
    const ref = useRef()

    useEffect(() => {
        const svgElement = d3.select(ref.current)
        svgElement.append("circle")
            .attr("cx", 150)
            .attr("cy", 70)
            .attr("r", 50)
    }, [])

    return (
        <svg
            ref={ref}
        />
    )
}

function generateDataset() {
    return Array(10).fill(0).map(() => ([
        Math.random() * 80 + 10,
        Math.random() * 35 + 10,
    ]))
}

const Circles = () => {
    const [dataset, setDataset] = useState(generateDataset())

    const ref = useRef(() => {
        const svgElement = d3.select(ref.current)
        svgElement.selectAll('circle')
            .data(dataset)
            .join('circle')
            .attr('cx', d => d[0])
            .attr('cy', d => d[1])
            .attr('cx', 3)
    }, [dataset])
   
    return (
        <>
            <h2>Circles</h2>
            <svg
                viewBox='0 0 100 50'
                ref={ref}
            />
        </>
    )
}


const Component = () => (
    <div>
        <Circle />
        <hr />
        <Circles />
    </div>
)

export default Component

