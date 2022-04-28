import React from 'react';

import Head from 'next/head';
import 'antd/dist/antd.css';
import  '../CSS/antdMobile.css';
import wrapper from '../store/configureStore';


const init = ({ Component, pageProps }) => (
    <div>
         <Component {...pageProps} />
    </div>
  );


  export function reportWebVitals(metric) {
    //console.log('metric===>' , metric);
  }

  
export default wrapper.withRedux(init);