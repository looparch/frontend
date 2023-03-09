import * as React from 'react'

interface SvgComponentProps {
  fillColor: string
}

function SvgComponent(props: SvgComponentProps) {
  const fillColor = props.fillColor || 'rgb(61, 61, 61)'

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 65" {...props}>
      <defs>
        <style>{`.cls-1{fill:${fillColor}}`}</style>
      </defs>
      <g id="_finium" data-name="#finium">
        <g id="Layer_1" data-name="Layer 1">
          <path
            className="cls-1"
            d="M40.9 12a20.5 20.5 0 1020.5 20.5A20.53 20.53 0 0040.9 12m18 20.5a18 18 0 01-.76 5.17h-16V27.33h16a18 18 0 01.76 5.17m-18-18a18 18 0 0116.29 10.34H24.62A18 18 0 0140.9 14.5m-18 18a18 18 0 01.76-5.17h16v23.13a18 18 0 01-16.75-18m19.25 18V40.17h15a18.06 18.06 0 01-15 10.29"
          />
          <path
            className="cls-1"
            d="M77.04 31.07L83.75 31.07 83.75 34.62 77.04 34.62 77.04 40.17 72.86 40.17 72.86 24.84 84.32 24.84 84.32 28.36 77.04 28.36 77.04 31.07z"
          />
          <path className="cls-1" d="M90.98 24.83H95.16V40.16H90.98z" />
          <path
            className="cls-1"
            d="M117.36 40.17L115 40.17 106.73 32.3 106.73 40.17 102.56 40.17 102.56 24.84 104.94 24.84 113.19 32.92 113.19 24.84 117.36 24.84 117.36 40.17z"
          />
          <path className="cls-1" d="M124.75 24.83H128.93V40.16H124.75z" />
          <path
            className="cls-1"
            d="M174.23 40.17L170.16 40.17 170.16 32.46 166.52 36.48 165.21 36.48 161.56 32.46 161.56 40.17 157.49 40.17 157.49 24.84 160.09 24.84 165.86 31.31 171.65 24.84 174.23 24.84 174.23 40.17z"
          />
          <path
            className="cls-1"
            d="M150.24 33.27a7.21 7.21 0 01-1.9 5.26 6.7 6.7 0 01-5 2 7 7 0 01-5.17-2 7.11 7.11 0 01-1.95-5.27v-8.43h4.18v8.26a3.8 3.8 0 00.8 2.58 2.67 2.67 0 002.14.93 2.43 2.43 0 002-.93 4 4 0 00.75-2.58v-8.26h4.19zM179.18 25.24a1.38 1.38 0 01.42 1 1.36 1.36 0 01-.42 1 1.34 1.34 0 01-1 .41 1.4 1.4 0 01-1.43-1.43 1.4 1.4 0 011.43-1.44 1.38 1.38 0 011 .41m-.11 1.94a1.28 1.28 0 00-1.8-1.83 1.28 1.28 0 001.8 1.83m-.41-.91a.5.5 0 01-.32.14l.51.5h-.2l-.5-.49h-.32v.49h-.16v-1.32h.58a.61.61 0 01.39.12.4.4 0 01.14.32.37.37 0 01-.12.29m-.41 0a.46.46 0 00.27-.08.3.3 0 00.1-.22.27.27 0 00-.1-.22.45.45 0 00-.27-.07h-.42v.59z"
          />
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent
