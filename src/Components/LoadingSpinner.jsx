import React from 'react';

import '../style/Components/LoadingSpinner.scss'

export default function LoadingSpinner() {
  return (
    <div>
      <div className='spinner'>
        <div className='bounce1'></div>
        <div className='bounce2'></div>
        <div className='bounce3'></div>
      </div>
    </div>
  );
}
