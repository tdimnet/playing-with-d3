import React from 'react'
import * as d3 from 'd3'

class Home extends React.PureComponent {
    state = {
        temperatures: [ 8, 5, 13, 9, 12 ]
    }

    componentDidMount() {
        d3.select(this.refs.temperatures)
            .selectAll('h2')
            .data(this.state.temperatures)
            .enter()
                .append('h2')
                .text(datapoint => `${datapoint} degrees`)
                .attr('class', datapoint => datapoint > 10 ? 'high-temperatures' : 'low-temperatures')
    }

    render() {
        console.log("======")
        console.log(this.state.temperatures)
        console.log("======")

        return (
            <div ref='temperatures' />
        )
    }
}

export default Home

