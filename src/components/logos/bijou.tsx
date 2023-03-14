import * as React from 'react'

interface SvgComponentProps {
  fillcolor: string
}

function SvgComponent(props: SvgComponentProps) {
  const fillColor = props.fillcolor || 'rgb(61, 61, 61)'

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 65" {...props}>
      <defs>
        {/* <style>{`.cls-1{fill:${fillColor};fill-rule:evenodd}`}</style> */}
      </defs>
      <g id="_bijou" data-name="#bijou">
        <path
          d="M67 19.48c.29-.64.09-3.66.08-4.62l-.08-.09c-.75-.3-2 .07-2.89-.08-.39.34-.22 4.1-.2 4.74a8.42 8.42 0 003.09.05zm22.19-4.62a6.17 6.17 0 00-2.51-.17l-.66.08v4.71h3.08c.29-.64.09-3.66.08-4.62zm52.11.49l-1.41.37a4.76 4.76 0 00-2.47 2.85 4.53 4.53 0 103.88-3.22zm1.36 7.92a3.55 3.55 0 01-4.17-4.7c.53-1.32 1.43-1.64 2.76-2.19 4.89-.08 5.24 5.98 1.4 6.89zM54 28.92c-.8-4.36-4.34-8.6-10-7.22a8.19 8.19 0 00-2.47 1.12l-1.16.9v-8.16c-.62-.36-3.32-.14-4.29-.13l-.7.29a1.35 1.35 0 00.34 2.28c.52.18 1.4-.1 1.86.12.26.23.12 3.57.12 4.25v12.7l-.12.08c-1.25.49-2.48-.41-2.77 1.2s2.12 1.44 3.59 1.44a4.91 4.91 0 001.74-.08c.23-.2.14-1.11.12-1.53l.12-.08A8.4 8.4 0 0043 37.83c5.14 2.09 9.24-1.7 10.52-5.24a7.48 7.48 0 00.48-3.67zm-7 6.77c-4.27 1-7.73-3.36-6.55-7.51a6.05 6.05 0 013.58-3.84l1.16-.24c3.2 0 5 1.44 5.9 3.71A6 6 0 0147 35.69zm96.37-14.56l-.62-.95c.11-.4.48-.52.58-.95.44-1.88-1.8-1.59-3.22-1.73-.31.13-.43.12-.58.41s.14.52.46.58a8.48 8.48 0 01.08 2.64 1 1 0 00-.54.45l.09.41a2.88 2.88 0 001.93.08l.13-.2a.66.66 0 000-.5.78.78 0 00-.5-.16 1 1 0 01-.12-.62l.16-.21c.85.11 1.4 1 1.65 1.69a1.26 1.26 0 001 0 .66.66 0 00.13-.53c-.18-.28-.42-.21-.61-.41zm-2.31-2.6h.08a2.83 2.83 0 011 .12.58.58 0 01.17.49c-.54.43-1.44.57-1.23-.61zm-33.91 3c-.71.27-1.87.15-2.6.41a8.74 8.74 0 00-5.16 4.87 8.46 8.46 0 004.87 11 7.09 7.09 0 003.43.58c3.71-.53 6-1.93 7.3-4.83a8.41 8.41 0 00-7.82-12.06zM113 32.06a6.06 6.06 0 01-5 3.71c-4.22.69-7.82-3.89-6.23-8a6.15 6.15 0 013.75-3.51l1.69-.25c3.92.1 7.49 3.77 5.79 8.05zm-39.86 3.38c-.71-.48-4.71-.26-5.9-.25-.34-.63-.13-2.82-.13-3.75v-9.32c-.61-.36-5.2-.14-6.35-.13a3.76 3.76 0 00-.82.29 1.32 1.32 0 00.45 2.23l4.13.12v10.48c-1.34.69-7.67-1.09-6.4 1.94.4 1 2.08.74 3.43.74h8.29c1.14 0 2.71.18 3.38-.33a1.41 1.41 0 00-.08-2.02zm17.57-3.92v-9.4c-.71-.35-2.25-.12-3.13-.12h-7.51c-.42.18-.81.18-1.07.5a1.39 1.39 0 00.61 2l2.52.08H88c.36.62.12 3.16.12 4.13V36a13.51 13.51 0 01-.12 3.36 3.66 3.66 0 01-1.2 1.73c-1.2.9-3.58.62-5.65.62a4.3 4.3 0 00-1.85.17c-.63.35-.93 1.72-.17 2.18s3.64.21 4.87.21c7.56.01 6.71-5.36 6.71-12.75zM135 35.19l-.08-.12V22.12l-.12-.09a30.66 30.66 0 00-5.16 0 1.34 1.34 0 00-.82 1.08c-.32 1.91 2.13 1.16 3.5 1.48v8.29c-.22.75-2.23 1.89-3 2.23s-2.82 1-4 .37a2.66 2.66 0 01-1.15-1.36 10.15 10.15 0 01-.17-3V25v-2.92c-.21-.25-3.36-.14-4-.13l-.83.25a1.41 1.41 0 00-.16 2c.49.47 1.6.31 2.39.37.34.76.08 3.19.08 4.21 0 4.74-.23 7.73 3.1 9.24a7.82 7.82 0 001.94.25A6.7 6.7 0 00129 38a15.19 15.19 0 003.18-1.57c.19.19.14.87.16 1.2 1 .49 4.18.11 4.54-.5.79-1.28-.65-1.98-1.88-1.94zM41.17 46.33h-.37l-.17.16v.62a.57.57 0 00.46 0 .5.5 0 00.12-.57c.07-.13.07-.12-.04-.21zm7.17.74v-.74h-.45a1.86 1.86 0 00-.08.78.49.49 0 00.41 0zm68.11 0a.45.45 0 00.13-.53c0-.16 0-.15-.09-.25h-.37l-.08.12v.71zm45.21-.82l-.08.16-.08.42.16.12a1.25 1.25 0 00.21-.45h.21a2.74 2.74 0 01.08 1l-.29.2v.09h.83v-.17l-.25-.08v-1c.08-.13 0-.09.21-.12l.16.45h.18a1 1 0 00.05-.62 4 4 0 00-1.39.04zm3.55 0h-.41a2.28 2.28 0 00-.33.62h-.12c-.33-.27-.1-.58-.75-.58-.09.31.24.9-.08 1.48a1.11 1.11 0 00.66.09v-.09c-.15-.19-.33-.36-.16-.66V47l.16.41h.21a.68.68 0 01.25-.37c.21.27 0 .51-.17.66v.09h.62a2.19 2.19 0 010-1.45zM45.66 49v-2.47l-.12-.09h-.13l-.9.13c-.1.09-.09.21-.09.41h.71a.64.64 0 010 .45c-.43.33-1.72-.53-1.9 1-.43 1.26 1.8 1.23 2.72 1.2.19-.43-.09-.44-.29-.63zm-.57-.16a1 1 0 01-1 .2.53.53 0 01-.28-.74c.1-.21.22-.25.41-.37h.53c.17.14.32.19.42.41a.77.77 0 01-.08.47zm28.62.24l-.08-.08v-2.43l-.16-.09h-.21l-.83.09-.08.12v.21h.75v2.14l-.75.09-.08.37a4.47 4.47 0 002.06 0l.13-.08-.09-.33zm22.28 0a7.92 7.92 0 01-.08-2.55l-.29-.13-.87.13c-.13.09-.13.13-.12.37a1.82 1.82 0 00.74.08.55.55 0 010 .45l-.08.13c-.89-.38-2.32.21-1.77 1.36.37.79 1.64.7 2.64.66a.36.36 0 00.08-.37.6.6 0 00-.24-.12zm-.62-.28a1.27 1.27 0 01-1.07.24l-.3-.4v-.33a1.52 1.52 0 01.66-.45 1.45 1.45 0 01.74.33l.08.24zm6.85-2.27l-.16-.09h-.21l-.87.13v.2c.13.18.46.11.7.13a5 5 0 010 2.18l-.66.09-.17.12v.21a3.79 3.79 0 002 .08c.14-.09.12-.1.13-.33-.18-.1-.51-.08-.75-.17a8.92 8.92 0 01-.01-2.54zm10.64 1.77a1.78 1.78 0 011-.49v-.33a2.45 2.45 0 00-1.19-.09c-.15.32.06.64-.33.83h-.08c0-.55 0-1.1-.05-1.65l-.28-.13-.5.09-.12.08v.2l.33.13a5.66 5.66 0 01.12 2.06c-.14.1-.28.13-.37.29v.25a1.16 1.16 0 00.74 0c.17-.13.15-.65.17-.91h.2l.13.08c.24.32.19.41.28.87h1.12l.08-.37c-.51-.27-1.04-.34-1.25-.9zm25.37.74a8.92 8.92 0 01-.12-2.51l-.33-.13-.87.09v.33h.7a4.84 4.84 0 010 2.18l-.78.13v.37h2.06l.09-.08v-.33c-.2.02-.56.03-.75-.04zm3.55 0a8.6 8.6 0 01-.12-2.59l-.29-.09-.87.09-.08.12v.21h.62l.08.08v2.1l-.7.09-.12.33.12.08h2.06v-.41zM59.24 49c0-.81 0-1.62-.05-2.43a2.51 2.51 0 00-1-.09h-.2v.28a2.28 2.28 0 00.7.09 5.29 5.29 0 01.08 2.06v.12l-.66.09-.17.16.05.25h2.06l.08-.37c-.18-.1-.51-.08-.74-.17zm-21.83-1.35a1.13 1.13 0 00-1-.29.64.64 0 00-.16.37.84.84 0 00.53.17c0 .37 0 .74.05 1.11a.91.91 0 01-.5.08l-.12.21v.21a6.11 6.11 0 001.94.08l.08-.37v-.08c-.26 0-.73 0-.87-.17a.78.78 0 010-.62 1 1 0 011.2-.33c.17-.08.18-.05.25-.25-.32-.61-.88-.24-1.4-.12zm4 1.44c-.21-.38 0-1.09-.12-1.6v-.09h-1.12v.42l.62.08a3 3 0 01.01 1.1l-.83.17v.29a3.93 3.93 0 002.06.08l.13-.08v-.21c-.16-.19-.46-.18-.79-.16zm7.8 0l-.66-.09c-.29-.22 0-1.14-.17-1.52s-.67-.17-.94-.17a.53.53 0 00-.21.29v.17l.62.08a3 3 0 01.08 1.15 1.66 1.66 0 01-.74.08l-.12.21v.25h2.06a.32.32 0 000-.33zm2-.17l-.21-.29c0-.72.44-.83 1.16-.78l.41.45h.25a2.25 2.25 0 00.08-.86l-.29-.13c-.61.42-1.74-.39-2.1.91-.24.87.74 1.49 1.57 1.32l.78-.37.08-.21-.12-.2c-.57.07-.98.39-1.67.24zm5.2 0V47.4a1.14 1.14 0 00-.83-.05v.33l.41.17c.11.57-.13 1.62-.9 1.11-.32-.21-.09-1.12-.21-1.52-.1-.17-.22-.18-.5-.17l-.28.08-.05.33.33.13.17 1.24c.19.42 1.66.66 2.23.41l.12-.08v-.21c-.27-.06-.39-.09-.55-.17zm6.1-1.65c-.51.24-.92.22-1.15.74-.69 1.37 1.49 1.81 2.27 1.16.93-.74-.31-1.74-1.18-1.81zm.87 1.36c-.24.51-1 .39-1.44.21a.82.82 0 01-.09-.78l.46-.25c.64 0 1 .08 1.15.49zm3.79.37c-.17-.37 0-1.14-.12-1.56-.14-.23-.49-.18-.78-.13v.42l.37.12v.82l-.25.21a.59.59 0 01-.66 0c-.28-.21-.17-1.21-.21-1.52a1 1 0 00-.61-.13c-.15.11-.29.16-.21.37s.26.15.37.25c.1.62-.12 1.23.41 1.49.34.26 1.36.13 1.9.12l.08-.12v-.21c-.14-.01-.16 0-.35-.04zm3.39-.61c.09-.29.3-.58.16-.95-.08-.14-.06-.13-.25-.17-.47.29-1.48-.19-1.77.46-.41.92 1.06.74 1.57.94h.08v.25a1.17 1.17 0 01-1.32-.33h-.25a2.32 2.32 0 00-.08.87 2.5 2.5 0 002.19-.41.54.54 0 00-.39-.57zm-1.24-.17l-.12-.12.16-.16.33-.08.54.16.08.29a2.06 2.06 0 01-1.05 0zm8.13-.91c-.14.29 0 .38.08.62l-.46.74h-.16a1.85 1.85 0 01-.5-.78c.11-.14.23-.26.13-.49s-.56-.15-.87-.13l-.16.08v.33c.54.29 1.59 1.53.82 2.07h-.62l-.08.12v.25l.12.08H77.32v-.33h-.17c-.13-.33.91-2 1.37-2v-.37a1.93 1.93 0 00-1.13-.1zm7.34 0c-.57.46-1.45-.37-1.94.74s.88 1.55 1.69 1.37v.2c-.27.37-1 0-1.36.13l-.12.08v.2a2.16 2.16 0 001.81.05 6 6 0 00.29-2.19l.33-.08a.5.5 0 000-.46zm-.17 1.36a.69.69 0 11-1.32-.41c.14-.29.34-.31.62-.45.36.11.53.17.7.45zM91 47.36c-.44.21-.92.25-1.11.7-.42 1 .71 1.86 1.77 1.49 1.45-.5.91-2.12-.66-2.19zm1 1.32c-.22.5-.91.45-1.44.29-.17-.24-.35-.52-.09-.78s.36-.23.58-.33a2.13 2.13 0 01.87.24.77.77 0 01.08.58zm13.45-1.32c-.48.2-1 .28-1.16.74-.44 1 .83 1.75 1.78 1.45 1.51-.48.81-1.99-.63-2.19zm.86 1.49a1.08 1.08 0 01-1.52-.13v-.45a1.76 1.76 0 01.74-.41c.52 0 1.19.41.77.99zm10.44.2c-.2-.14-.21-1.14-.12-1.44-.13-.24-.39-.26-.75-.25l-.41.08v.33l.62.13a3.71 3.71 0 01.12 1.07 2.43 2.43 0 01-.78.17l-.08.16v.25h2a.36.36 0 000-.45zm4.37 0a8.17 8.17 0 01-.24-1.44c-.61-.37-1.44-.14-2.11-.29l-.2.08v.33l.38.13A3 3 0 01119 49l-.41.25v.33h1.19a.32.32 0 000-.33c-.08-.15-.08-.14-.29-.17a1.93 1.93 0 01-.08-.94 1 1 0 011-.21h.12c0 .34 0 .69.05 1-.27.12-.43.08-.46.46a2.76 2.76 0 001.2.12l.08-.12v-.21c-.12-.06-.1-.04-.29-.09zm3.1-1.73c-.53.38-1.42-.19-1.9.58-.69 1.1.64 1.83 1.57 1.53v.16c-.44.27-.84.13-1.44.08l-.09.38a2.31 2.31 0 001.86-.05 7.14 7.14 0 00.21-2.14l.37-.12v-.42zm-.22 1.4a.71.71 0 01-.41.37c-.6 0-.91-.17-.91-.74a1.66 1.66 0 01.66-.49c.38.07.65.17.7.57a.3.3 0 01-.04.29zm7.18-1.19v.16a.49.49 0 00.33.21l-.13.7-.16.08a1.28 1.28 0 01-.29-.7.55.55 0 00-.29-.12l-.37.78-.12.08a1.28 1.28 0 01-.25-.78l.33-.12v-.33a1.49 1.49 0 00-.74-.13h-.25l-.13.29c.21.32.7 1.72.87 1.86h.33c.1-.26.19-.52.29-.79l.12-.08a2.42 2.42 0 01.37.83.35.35 0 00.33 0c.32-.2.53-1.4.87-1.78v-.28c-.29-.07-.94-.13-1.15.12zm13.73-.13l-.41.17a1.87 1.87 0 00-.78-.21l-.17.21v.2l.37.13v1.81c-.08.14-.17.15-.33.21v.29a3.67 3.67 0 001.49.12l.08-.12v-.25l-.62-.12-.12-.17v-.2c.56-.2 1.26.46 1.82-.46a1.42 1.42 0 000-.82 1.17 1.17 0 00-1.37-.79zm-.16 1.6l-.29-.2a1.79 1.79 0 010-.58 3.44 3.44 0 01.66-.37 1.4 1.4 0 01.7.29c.18.71-.33 1.16-1.07.86zm4.62-1.32a2.22 2.22 0 00-.91-.33c-.35.16-.69.14-1 .37.3.24.82.11 1.24.17-.8.29-1.17 0-1.48.78.08 1.34 1.06.59 1.65.7a2.87 2.87 0 00.91.17l.08-.37-.37-.17zM148 49.05l-.21-.2.13-.25.2-.08h.79l.08.29a1.13 1.13 0 01-.99.24zm11.34-1.36l-.16-.29h-.87l-.08.42.41.08c.23.15.19.68.17 1.07a4.15 4.15 0 01-.5.17l-.08.08v.29a4.05 4.05 0 001.9 0c.13-.09.12-.1.12-.33a1.7 1.7 0 00-.87-.13 1.8 1.8 0 01-.08-.74c.62-.46.67-.31 1.4-.37h.09a.57.57 0 00-.17-.45 1.78 1.78 0 00-1.31.2zm-72.75 1.57a1.37 1.37 0 002.31-1.2 1.77 1.77 0 00-1.57-.66c-.59.28-1.64 1.08-.74 1.86zm1.89-.87l-.08.33c-.24.54-1.26.44-1.57 0-.15-.68.24-.71.7-.9a1.08 1.08 0 01.95.57zm20.3-1c-.37.23-.8.31-1 .75-.43 1.23 1.27 1.79 2.15 1.23 1.24-.75.23-2.04-1.15-1.97zm1.11 1.41a1.34 1.34 0 01-1.52 0c-.08-.24-.13-.48 0-.66s.35-.22.62-.33a2.56 2.56 0 01.82.24l.13.29zm25.29.28c-.17-.38 0-1.09-.25-1.4s-.62-.31-1.11-.29l-.66.29v.17l.66.08a1.72 1.72 0 00-.91.66v.45c.37 1 1.24.21 1.65.37a1.81 1.81 0 00.83.17l.12-.17-.08-.2c-.05-.11-.05-.1-.25-.12zM134.4 48a.55.55 0 01-.33-.08.45.45 0 01.33.08zm.16.78a.86.86 0 01-.95.29l-.2-.12v-.17l.33-.24h.78l.08.08zM152 47.4l-.45.17a2.36 2.36 0 00-.87-.17l-.08.29a.89.89 0 00.41.25v1.77l-.33.17-.08.37a4.45 4.45 0 001.49.08l.12-.33a1.32 1.32 0 00-.66-.12l-.08-.42c.36 0 .61.28 1.07.17a1.17 1.17 0 00.82-1.49 1.27 1.27 0 00-1.36-.74zm.7 1.61a.93.93 0 01-1.19-.37v-.33a1.52 1.52 0 01.7-.45l.58.16.2.37c.01.37-.12.42-.28.61zm2.44-.12v-.17l1.89-.12c.19-.86-.57-1.2-1.44-1.16-.4.22-.85.33-1 .79-.52 1.64 1.86 1.52 2.52 1-.22-.4-1.37-.11-1.96-.34zm.57-1a1.08 1.08 0 01.54.12h.08v.12h-1.07c.14-.19.25-.13.46-.27z"
          className="cls-1"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
