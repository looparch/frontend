import React from 'react';

const SizeIndicator: React.FC = () => {
  return (
    <div className="absolute top-0 z-[100] print:hidden">
      <div className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">Mobile ()</div>
      <div className="hidden sm:block md:hidden">Small (sm)</div>
      <div className="hidden md:block lg:hidden">Medium (md)</div>
      <div className="hidden lg:block xl:hidden">Large (lg)</div>
      <div className="hidden xl:block 2xl:hidden">X Large (xl)</div>
      <div className="hidden 2xl:block">2X Large (2xl)</div>
    </div>
  )
}

export default SizeIndicator
