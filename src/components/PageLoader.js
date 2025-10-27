import React from 'react';

const PageLoader = ({ show }) => {
  if (!show) return null;

  return (
    <div id="pageLoader" style={{display: 'flex'}}>
      <div className="loader-content">
        <div className="spinner-border text-light" role="status"></div>
        <p className="text-light mt-2">Please wait...</p>
      </div>
    </div>
  );
};

export default PageLoader;