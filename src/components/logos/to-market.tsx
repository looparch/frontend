import * as React from 'react'

interface SvgComponentProps {
  fillcolor: string
}

function SvgComponent(props: SvgComponentProps) {
  const fillColor = props.fillcolor || 'rgb(61, 61, 61)'

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 65" {...props}>
      <defs>
        <style>{`.cls-1{fill:${fillColor};fill-rule:evenodd}`}</style>
      </defs>
      <g id="_to_market" data-name="#to_market">
        <path
          className="cls-1"
          d="M53.67 29.7a6.75 6.75 0 11-6.75-6.7 6.75 6.75 0 016.75 6.75M46.92 25a4.71 4.71 0 104.72 4.71A4.71 4.71 0 0046.92 25M39.09 22.82s-3.11.08-4.61.08h-7.6c-.87 0-3.42-.11-3.42-.11L23 25.45s2.38-.12 2.83-.12h3.65v14.73c0 1.5-.05 2.95-.05 2.95h3s-.09-1.33-.09-2.95V25.33h2.27c1 0 4.16.17 4.16.17M84.77 43s-.59-1.79-.93-2.89L78.37 22l-5.12 13.84L67.87 22l-5.5 18.16c-.31 1.05-1 2.89-1 2.89h2.93L68 30.26 73.25 43l4.9-12.69L81.89 43M120.9 42s-.93-1-1.42-1.42c0 0-3.91-4.64-4.44-5.13a6.25 6.25 0 004.52-5.92c0-4.05-2.4-6.65-7.53-6.65h-5.69a28.37 28.37 0 01.23 4.45v12.36c0 1.48-.12 3.32-.12 3.32h3s-.12-1.87-.12-3.34V25.19c2.07 0 7.45-.54 7.45 4.36 0 3.43-3.91 4.34-6.37 4.59l6.91 8.19c.56.68 1.27 1.67 1.27 1.67M138 41.48s-1.7-1.47-2.3-2l-7.39-7.14 6.49-6c.59-.57 2.24-2.1 2.24-2.1l-1.85-1.7s-1.64 1.79-2 2.16-7.28 6.91-7.28 6.91v-5.74c0-1.24.05-3 .05-3H123s.09 1.73.09 2.89v17.25h2.83s-.05-1.45-.05-2.52V33.8l7.87 7.56c1.11 1.08 2.21 2.19 2.21 2.19M170.53 22.82s-3.11.08-4.61.08h-7.59c-.88 0-3.43-.11-3.43-.11l-.48 2.66s2.37-.12 2.83-.12h3.65v14.73c0 1.5-.05 2.95-.05 2.95h3s-.09-1.33-.09-2.95V25.33H166c1 0 4.16.17 4.16.17"
        />
        <path className="cls-1" d="M44.95 43.04L49.5 43.04 47.23 38.48" />
        <path
          className="cls-1"
          d="M104.21 41.19L95.32 21l-5.59 12.68h-3v2h2.14l-2.44 5.53a11.8 11.8 0 01-.89 1.79h3.17a11.3 11.3 0 01.6-1.59l2.18-5.24h7.65l2.18 5.24a9.83 9.83 0 01.59 1.59h3.18a11.8 11.8 0 01-.88-1.82m-11.67-7.5l2.78-6.46 2.77 6.46zM148.41 40.54h-5.47v-4.7h3.37c.94 0 4.88-.14 5.67-.14l.42-2.43s-3.85.14-4.44.14h-5v-8.08h9.32l.57-2.63s-2.69.17-4.73.17h-8s.06 2 .06 3.31v7.47h-2.85v2h2.85v5.05c0 .4-.09 2.3-.09 2.3h7.39l4.93.05.54-2.57h-4.56"
        />
        <path
          d="M174.6 22.43a2.48 2.48 0 11-2.46 2.47 2.43 2.43 0 012.46-2.47m0 .39a2.09 2.09 0 102 2.09 2 2 0 00-2-2.09zm-.47 3.52h-.44v-2.76a5.63 5.63 0 01.78-.06 1.45 1.45 0 01.86.21.66.66 0 01.25.57.69.69 0 01-.58.7c.24 0 .4.26.46.67a2.28 2.28 0 00.17.68h-.46a2 2 0 01-.19-.7.51.51 0 00-.59-.48h-.31zm0-1.52h.32c.37 0 .67-.14.67-.48s-.17-.48-.67-.48h-.32z"
          fill="#1f1f1f"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
