import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const reportWebVitals = () => {
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS();
    getFID();
    getFCP();
    getLCP();
    getTTFB();
  });
};

export default reportWebVitals;
