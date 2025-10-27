import React from 'react';

const HeroSection = ({ vehicleNumber, onVehicleNumberChange, onProceed }) => {
  const handleProceedClick = (e) => {
    e.preventDefault();
    onProceed();
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-6 text-lg-start text-center mb-lg-0">
            <h1 className="hero-title">
              FASTag Recharge <br />
              Online at Logiclead
            </h1>
            <ul className="hero-list">
              <li>
                <i className="fa-solid fa-circle"></i> Multiple Payment Option
              </li>
              <li>
                <i className="fa-solid fa-circle"></i> Multiple Discounts & Offers for FASTag
              </li>
              <li><i className="fa-solid fa-circle"></i>24×7 Customer Support</li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="hero-card">
              <div className="d-flex mb-3 justify-content-center justify-content-lg-start">
                <div className="form-check p-4 d-flex justify-content-between w-100"
                  style={{background: '#00686e', borderRadius: '16px 16px 0px 0px'}}>
                  <label className="form-check-label text-white fw-semibold">FASTag Recharge</label>
                  <img src="https://logiclead.in/assets/img/icons/bbps-new-2.png" alt="Bharat Connect" 
                    width="70" height="20" style={{marginTop: '9px'}} />
                </div>
              </div>
              <div className="px-4">
                <input 
                  type="text" 
                  className="form-control mb-3" 
                  placeholder="Enter vehicle number"
                  value={vehicleNumber}
                  onChange={(e) => onVehicleNumberChange(e.target.value)}
                  id="vehicleInput" 
                />

                <button className="btn btn-secondary w-100" id="proceedBtn" onClick={handleProceedClick}>
                  Proceed
                </button>

                <small className="text-dark">
                  <i className="bi bi-lightning-charge-fill"></i> Get the best deals on FASTag Recharge
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;