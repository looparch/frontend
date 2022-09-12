exports.onRenderBody = ({ setBodyAttributes }) => {
  const className='text-base antialiased font-light text-black bg-white font-inter md:subpixel-antialiased font-feature-default'
  setBodyAttributes({
    className
  });
};
