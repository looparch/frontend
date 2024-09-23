import * as React from 'react'

interface SvgComponentProps {
  fillcolor: string
}

function SvgComponent(props: SvgComponentProps) {
  const fillColor = props.fillcolor || 'rgb(61, 61, 61)'

  return (
    <svg id="sklo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 65" {...props}>
      <defs>
        {/* <style>{`.cls-1{fill:${fillColor}}`}</style> */}
      </defs>
      <path className="cls-1" d="m50.48,41.89c2.89,2.46,5.49,3.46,8.52,3.46,4.4,0,6.44-2.41,6.44-4.88,0-2.7-1.75-4.16-7.38-6.01-5.92-1.89-8.85-4.35-8.85-8.85s3.46-8.61,10.74-8.61c3.55,0,7.05.81,9.42,1.8l-1.28,3.98c-2.74-2.27-5.4-3.12-8.47-3.12-3.5,0-5.63,1.94-5.63,4.21,0,2.74,2.13,4.16,6.96,5.68,6.86,2.18,9.51,4.73,9.51,9.32,0,4.83-4.21,9.13-11.97,9.13-3.27,0-6.58-.85-9.32-2.18l1.32-3.93Zm83.35,6.11c-9.91,0-16.76-6.2-16.76-15.24s7.61-15.76,16.96-15.76c9.96,0,16.81,6.2,16.81,15.29s-7.66,15.71-17.01,15.71m11.14-15.14c0-8.47-5.05-13.2-11.21-13.2s-10.82,4.31-10.82,12.54,5.05,13.2,11.15,13.2,10.88-4.31,10.88-12.54m-41.49-15.15c-.47.15-1.84.24-2.86.24s-2.4-.09-2.86-.24h0v29.58h19.12v-3.88c-2.18.71-4.26,1.14-9.04,1.14h-4.35v-26.83h0Zm-9.45,7.91c-.3.1-1.19.16-1.85.16s-1.55-.06-1.85-.16h0s-11.03,9.85-11.03,9.85v-17.75c-.41.13-1.63.21-2.53.21s-2.12-.08-2.53-.21v29.58h5.06v-8.71l2.51-2.18,6.25,10.89h5.87l-8.33-14.15,8.42-7.52h0Z"/>
    </svg>
  )
}

export default SvgComponent