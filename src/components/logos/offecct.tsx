import * as React from 'react'

interface SvgComponentProps {
  fillcolor: string
}

function SvgComponent(props: SvgComponentProps) {
  const fillColor = props.fillcolor || 'rgb(61, 61, 61)'

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 65" {...props}>
      <defs>
        {/* <style>{`.cls-1{fill:${fillColor}}`}</style> */}
      </defs>
      <g id="_offecct" data-name="#offecct">
        <g id="Offecct">
          <path
            className="cls-1"
            d="M36.27 42c-5.68 0-10.48-4.21-10.48-9.41 0-5.44 4.7-9.66 10.48-9.66s10.5 4.18 10.5 9.57-4.71 9.5-10.5 9.5m0-21.78C29.84 20.21 23 24.94 23 32.58c0 6.57 6 12.11 13.27 12.11s13.3-5.49 13.3-12.24-5.92-12.24-13.3-12.24"
          />
          <path
            className="cls-1"
            d="M70.33 44.3L73.21 44.3 73.21 33.77 83.28 33.77 83.28 30.96 73.21 30.96 73.21 23.41 83.67 23.41 83.67 20.61 70.33 20.61 70.33 44.3z"
          />
          <path
            className="cls-1"
            d="M52.73 44.3L55.61 44.3 55.61 33.77 65.68 33.77 65.68 30.96 55.61 30.96 55.61 23.41 66.06 23.41 66.06 20.61 52.73 20.61 52.73 44.3z"
          />
          <path
            className="cls-1"
            d="M87.71 44.3L102.13 44.3 102.13 41.5 90.6 41.5 90.6 33.69 101.75 33.69 101.75 30.89 90.6 30.89 90.6 23.41 102.13 23.41 102.13 20.61 87.71 20.61 87.71 44.3z"
          />
          <path
            className="cls-1"
            d="M146.29 22.92a10.24 10.24 0 018.29 4.08h3.58c-.95-2.12-5.22-6.78-11.84-6.78-7.46 0-13.22 5.4-13.22 12.29s5.76 12.3 13.22 12.29c6.93 0 11-4.64 11.92-6.75h-3.57a10.35 10.35 0 01-8.38 4c-5.62 0-10.27-4.28-10.27-9.58s4.65-9.58 10.27-9.58M118.32 22.92a10.24 10.24 0 018.29 4.08h3.59c-1-2.12-5.23-6.78-11.84-6.78-7.47 0-13.23 5.4-13.23 12.29s5.76 12.3 13.23 12.29c6.92 0 11-4.64 11.92-6.75h-3.58a10.35 10.35 0 01-8.38 4c-5.62 0-10.27-4.28-10.27-9.58s4.65-9.58 10.27-9.58"
          />
          <path
            className="cls-1"
            d="M159.88 20.53L159.88 23.24 166.97 23.24 166.97 44.23 169.95 44.23 169.95 23.24 177 23.24 177 20.53 159.88 20.53z"
          />
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent
