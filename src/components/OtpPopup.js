import React from 'react';

const OtpPopup = ({ show, onClose, otp, onOtpChange, onOtpSubmit, onResendOtp }) => {
  const handleOverlayClick = (e) => {
    if (e.target.className === 'custom-profile-popup active') {
      onClose();
    }
  };

  const handleOtpInput = (index, value) => {
    if (/^\d*$/.test(value)) {
      onOtpChange(index, value);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onOtpSubmit();
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    window.location.href = '/termsConditions';
  };

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    window.location.href = '/privacyPolicy';
  };

  const handleResendClick = (e) => {
    e.preventDefault();
    onResendOtp();
  };

  if (!show) return null;

  return (
    <div className="custom-profile-popup active" onClick={handleOverlayClick}>
      <div className="custom-popup-content">
        <button className="custom-popup-close" onClick={onClose}>
          &times;
        </button>

        <div className="custom-popup-header">
          <h4 className="custom-user-name text-center">Verify OTP</h4>
          <p className="otp-subtitle text-center">Enter the 4-digit code sent to your email</p>
        </div>

        <div className="custom-popup-body">
          <form className="custom-popup-form-opt" onSubmit={handleFormSubmit}>
            <center>
              <div className="otp-inputs">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    className="otp-input"
                    value={digit}
                    onChange={(e) => handleOtpInput(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    required
                  />
                ))}
              </div>
            </center>
            <button type="submit" className="custom-popup-btn mt-3">
              Verify OTP
            </button>

            <div className="resend text-center mt-3">
              Didn't receive the code?{' '}
              <button className="btn btn-link p-0 text-decoration-none" onClick={handleResendClick}>
                Resend OTP
              </button>
            </div>

            <div className="text-center small text-muted mt-3">
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

export default OtpPopup;