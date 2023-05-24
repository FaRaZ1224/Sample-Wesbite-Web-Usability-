import React from 'react';
import ReactDOM from 'react-dom';
import GreenBin from './GreenBin';
import AppFeatures from './AppFeatures';
import HowItWorks from './HowItWorks';
import ContactUs from './ContactUs';

ReactDOM.render(
  <React.StrictMode>
    <GreenBin />
    <AppFeatures />
    <HowItWorks />
    <ContactUs />
  </React.StrictMode>,
  document.getElementById('root')
);

