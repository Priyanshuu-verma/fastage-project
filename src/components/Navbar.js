import React from 'react';

const Navbar = ({ onProfileClick, onMenuToggle }) => {
  const handleWalletClick = (e) => {
    e.preventDefault();
    // Add wallet functionality here
    console.log('Wallet clicked');
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    onProfileClick();
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    onMenuToggle();
  };

  return (
    <nav className="custom-navbar">
      <div className="top-row row align-items-center justify-content-between">
        {/* Left Logo */}
        <div className="logo col-auto">
          <a href="/">
            <img src="https://logiclead.in/assets/img/banking_logo/logic_img2.png" alt="Logo" />
          </a>
        </div>

        {/* Right Desktop */}
        <div className="right d-none d-lg-flex align-items-center col-auto">
          <button className="profile-avatar me-3 btn btn-link text-decoration-none p-0 border-0" onClick={handleWalletClick}>
            <i className="fa-solid fa-wallet me-1"></i> Wallet
          </button>
          <div className="profile profile-avatar">
            <button className="btn btn-link p-0 border-0" onClick={handleProfileClick}>
              <img src="https://logiclead.in/assets/img/new-guest-user-male.svg" alt="Profile" />
            </button>
          </div>
        </div>

        {/* Right Mobile */}
        <div className="d-flex d-lg-none align-items-center col-auto">
          <button className="profile-avatar me-3 btn btn-link text-decoration-none p-0 border-0" onClick={handleWalletClick}>
            <i className="fa-solid fa-wallet" style={{fontSize: '22px', color: '#fff'}}></i>
          </button>
          <button className="menu-btn btn btn-link p-0 border-0" onClick={handleMenuClick}>
            <i className="fa-solid fa-bars text-white"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;