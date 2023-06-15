import './src/styles/global.css'

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const pagePath = location ? location.pathname + location.search + location.hash : undefined;
  setTimeout(() => {
    // @ts-ignore
    if (typeof gtag === 'function') {
      // @ts-ignore
      gtag('event', 'page_view', { page_path: pagePath });
    }
  }, 100);
};
