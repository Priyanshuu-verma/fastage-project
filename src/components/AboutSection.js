import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-us py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2>About Us</h2>
            <p>
              Welcome to <b>Logiclead</b>, your trusted platform
              for FASTag recharge. We make it easy for vehicle
              owners to recharge their FASTag quickly and securely from anywhere.
            </p>
            <p>
              Our goal is to save your time at toll plazas by providing a smooth recharge
              experience with multiple payment options. With reliable service, exciting offers,
              and dedicated support, we are here to make your travel easier and more convenient.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="col-lg-6 text-center">
            <img src="https://logiclead.in/assets/img/banking_logo/mactc8ig_fastag_625x300_17_February_25.jpg"
              alt="About Us" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;