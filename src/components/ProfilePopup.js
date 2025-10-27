import React from 'react';

const ProfilePopup = ({ show, onClose, email, onEmailChange, onLogin }) => {
  const handleOverlayClick = (e) => {
    if (e.target.className === 'custom-profile-popup active') {
      onClose();
    }
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    window.location.href = '/termsConditions';
  };

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    window.location.href = '/privacyPolicy';
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  if (!show) return null;

  return (
    <div className="custom-profile-popup active" onClick={handleOverlayClick}>
      <div className="custom-popup-content">
        <button className="custom-popup-close" onClick={onClose}>
          &times;
        </button>
        <div className="custom-popup-header">
          <h4 className="custom-user-name">Login</h4>
        </div>
        <div className="custom-popup-body">
          <form className="custom-popup-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="popupEmail">Email</label>
              <input 
                type="email" 
                id="LoginEmail" 
                name="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="custom-popup-btn">
              Login
            </button>
            <div className="form-check d-flex align-items-center mb-3">
              <input className="form-check-input me-2" type="checkbox" id="promoCheck" defaultChecked />
              <label className="form-check-label small mb-0" htmlFor="promoCheck">
                Keep me posted about sales and offers
              </label>
            </div>

            <div className="text-center small text-muted">
              By proceeding, I accept the{' '}
              <button className="btn btn-link p-0 text-decoration-none" onClick={handleTermsClick}>
                T&amp;C
              </button>{' '}
              and{' '}
              <button className="btn btn-link p-0 text-decoration-none" onClick={handlePrivacyClick}>
                Privacy Policy
              </button>
              <br />
              <i className="bi bi-lock"></i> Secured by Logiclead
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;