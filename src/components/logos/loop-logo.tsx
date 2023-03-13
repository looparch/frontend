import * as React from 'react'

function LoopLogo(props: any) {
  const fillColor = props.fillcolor || '#04955f'

  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 112 112"
      {...props}
    >
      <defs>
        <style>{`.cls-2{fill:${fillColor}}`}</style>
      </defs>
      <path
        fill="#fff"
        d="M0.26 0.26H111.74000000000001V111.74000000000001H0.26z"
      />
      <g id="Logo">
        <path
          className="cls-2"
          d="M50.63 27.22C50.63 10.1 69.3-2.73 87.34 8A16.26 16.26 0 0193 13.65c10.74 18-2.1 36.72-19.21 36.72H61.71v11.26h50V.26H.26v39.05h50.39c-.01-4.2-.02-11.89-.02-12.09zM26.47 84.78a12.09 12.09 0 1024.18 0V72.69H38.56a12.11 12.11 0 00-12.09 12.09z"
        />
        <path
          className="cls-2"
          d="M61.71 84.78a23.15 23.15 0 11-23.15-23.15h12.09V50.37H.26v61.37h111.48v-39h-50zM85.86 27.22a12.09 12.09 0 10-24.17 0v12.09h12.09a12.1 12.1 0 0012.08-12.09z"
        />
      </g>
    </svg>
  )
}

export default LoopLogo
