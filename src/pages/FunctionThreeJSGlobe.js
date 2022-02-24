import { useRef, useEffect } from 'react'
import Globe from 'react-globe.gl'

const Component = () => {
    const globeEl = useRef()

    const N = 300
    const gData = [...Array(N).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        size: Math.random() / 3,
        color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
    }))
   
    useEffect(() => {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.3;

      globeEl.current.pointOfView({ altitude: 4 }, 5000);
    }, [])

    return (
        <div>
            <h2>ThreeJS Globe Map</h2>
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                pointsData={gData}
                pointAltitude="size"
                pointColor="color"
                animateIn={true}
            />
        </div>
    )
}

export default Component

