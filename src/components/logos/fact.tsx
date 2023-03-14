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
      <g id="_fact" data-name="#fact">
        <path
          className="cls-1"
          d="M84.52 43.88l-16.14 9.39V44.7l7.55-4.39v-3.78l-7.55 4.39v-6.48l9.73-5.65V25L65 32.55l-.07 22.53H65L45.43 43.77l.06-18.9L59 32.68V29l-13.5-7.77L65 9.91l19.59 11.32zM65 6.08L42.19 19.32l-.08 26.36 22.94 13.24 22.78-13.24.08-26.36z"
        />
        <path
          className="cls-1"
          d="M108.14 30.23L108.14 32.46 111.69 32.46 111.69 34.34 108.14 34.34 108.14 38.26 105.73 38.26 105.73 28.26 112.77 28.26 112.77 30.23 108.14 30.23z"
        />
        <path
          className="cls-1"
          d="M124.17 34.85l-1.4-3.4-1.45 3.4zm3.94 3.23l-.11.18h-2.43l-.72-1.75h-4.24l-.73 1.75h-2.34l-.11-.18 4.62-9.82h1.46zM133.68 33.26a5.2 5.2 0 015.43-5.19 5.37 5.37 0 014.19 2v.17l-1.48 1.23h-.17a3.3 3.3 0 00-2.54-1.19 3 3 0 000 6 3.3 3.3 0 002.54-1.19h.17l1.48 1.23v.17a5.33 5.33 0 01-4.22 2 5.2 5.2 0 01-5.4-5.19"
        />
        <path
          className="cls-1"
          d="M154.75 38.26L152.33 38.26 152.33 30.23 149.19 30.23 149.19 28.26 157.89 28.26 157.89 30.23 154.75 30.23 154.75 38.26z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
