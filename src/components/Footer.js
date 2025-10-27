import React from 'react';

const Footer = () => {
  const handleTermsClick = (e) => {
    e.preventDefault();
    // Navigate to terms and conditions
    window.location.href = '/termsConditions';
  };

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    // Navigate to privacy policy
    window.location.href = '/privacyPolicy';
  };

  return (
    <footer className="footer pt-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <img src="https://logiclead.in/assets/img/banking_logo/logic_img2.png" alt="Logo"
              className="mb-3" style={{maxWidth: '150px'}} />
            <div className="d-flex gap-3 mb-3">
            </div>
            <div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Reach Us</h5>
            <p>
              <i className="bi bi-envelope-fill me-2"></i> ops@logiclead.in
            </p>
            <p><i className="bi bi-envelope-fill me-2"></i> tech@logiclead.in</p>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i> Office No 15, Ground Floor, D-29, Sector 3, Noida,
              Gautam Buddha Nagar Uttar Pradesh, 201301.
            </p>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top py-4 mt-4">
          <p className="mb-0 text-white">© 2025 Logiclead. All rights reserved</p>
          <div>
            <button className="btn btn-link text-white text-decoration-none p-0 me-3" onClick={handleTermsClick}>
              Terms & Conditions
            </button>
            <button className="btn btn-link text-white text-decoration-none p-0" onClick={handlePrivacyClick}>
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;