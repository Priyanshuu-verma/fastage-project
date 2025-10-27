import React from 'react';

const ProviderSection = ({ providers }) => {
  return (
    <section className="provider-section">
      <h3>FASTag Provider</h3>
      <div className="bank-provider-track" id="bankProviderTrack">
        <div className="container-fluid">
          <div className="row g-3">
            {providers.map((provider, index) => (
              <div key={index} className="col-6 col-md-3 col-lg-2">
                <div className="card text-center h-100 shadow-sm border-0">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center"
                    style={{border: '1px solid #c1c1c14f'}}>
                    <img src={provider.logo} alt={provider.name} className="img-fluid mb-2"
                      style={{maxHeight: '60px', objectFit: 'contain'}} />
                    <p className="mb-0 small fw-medium">
                      {provider.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderSection;