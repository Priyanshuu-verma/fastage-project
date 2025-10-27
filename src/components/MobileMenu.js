import React from 'react';

const MobileMenu = ({ show, onClose, onProfileClick }) => {
  const handleProfileMenuClick = (e) => {
    e.preventDefault();
    onProfileClick();
    onClose();
  };

  const handleWalletClick = (e) => {
    e.preventDefault();
    // Add wallet functionality here
    console.log('Wallet clicked from mobile menu');
  };

  if (!show) return null;

  return (
    <div className="mobile-menu active" id="mobileMenu">
      <div className="mobile-menu-header">
        <div className="menu-logo">
          <img src="https://logiclead.in/assets/img/banking_logo/logiclead logo.png" alt="Logo" />
        </div>
        <button className="close-menu" onClick={onClose}>&times;</button>
      </div>

      {/* Login / Signup Section */}
      <button className="login-box profile-avatar w-100 text-start border-0 bg-transparent" onClick={handleProfileMenuClick}>
        <img src="https://logiclead.in/assets/img/new-guest-user-male.svg" alt="User Icon" />
        <div className="login-text">
          <h6>Login / Signup</h6>
          <p>Login to avail best deals</p>
        </div>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      
      <button className="login-box profile-avatar w-100 text-start border-0 bg-transparent" onClick={handleWalletClick}>
        <div className="login-text">
          <h6><i className="fa-solid fa-wallet me-1"></i> Wallet</h6>
        </div>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default MobileMenu;