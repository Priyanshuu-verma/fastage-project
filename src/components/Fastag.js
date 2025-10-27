import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ProviderSection from './ProviderSection';
import AboutSection from './AboutSection';
import FAQSection from './FAQSection';
import AppDownloadSection from './AppDownloadSection';
import Footer from './Footer';
import ProfilePopup from './ProfilePopup';
import OtpPopup from './OtpPopup';
import MobileMenu from './MobileMenu';
import PageLoader from './PageLoader';
import '../styles/Fastag.css';

const Fastag = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [vehicleNumber, setVehicleNumber] = useState('');

  // Bank providers data
  const bankProviders = [
    { name: "Indian Highways...", logo: "https://logiclead.in/assets/img/banking_logo/IHMCL-Logo.jpeg" },
    { name: "IndusInd Bank", logo: "https://logiclead.in/assets/img/banking_logo/7fb9c4ae317ff5a843b86d86042f6597.jpg" },
    { name: "Bank of Baroda", logo: "https://logiclead.in/assets/img/banking_logo/eb55d100ee42369d2e984e3cb4758c76.jpg" },
    { name: "Axis Bank", logo: "https://logiclead.in/assets/img/banking_logo/76aabd7ec028d2927d5af281e82d9394.jpg" },
    { name: "IDFC FIRST Bank", logo: "https://logiclead.in/assets/img/banking_logo/2dad745c5f2fdd1f341fd31ef4937a50.jpg" },
    { name: "HDFC Bank", logo: "https://logiclead.in/assets/img/banking_logo/3d0764bf519e0ae62a43f818f832ca11.jpg" },
    { name: "Kotak Mahindra...", logo: "https://logiclead.in/assets/img/banking_logo/3adb17ad584e31a26d7f1119beb26c86.jpg" },
    { name: "Equitas", logo: "https://logiclead.in/assets/img/banking_logo/51c53153e4a1ab4b735c213e62d7733f.jpg" },
    { name: "IDBI Bank", logo: "https://logiclead.in/assets/img/banking_logo/6efb93f54538ebaf6c5251bc7a42713c.jpg" },
    { name: "IOB", logo: "https://logiclead.in/assets/img/banking_logo/97a2e9a37d151bf1729b96678a88e292.jpg" },
    { name: "Jammu and Kashm...", logo: "https://logiclead.in/assets/img/banking_logo/55ba49c0871bbcfa6729799e4cdb466d.jpg" },
    { name: "Karnataka Bank", logo: "https://logiclead.in/assets/img/banking_logo/15.webp" },
    { name: "Paytm Payments...", logo: "https://logiclead.in/assets/img/banking_logo/8c6219ff367beac5f2730160a41aa897.jpg" },
    { name: "State Bank of I...", logo: "https://logiclead.in/assets/img/banking_logo/0986338cc1bd9659da9133bb4fc783a6.jpg" },
    { name: "Federal Bank", logo: "https://logiclead.in/assets/img/banking_logo/2a4242814a0f7cc956fc2d14c1c4af2c.jpg" },
    { name: "ICICI Bank", logo: "https://logiclead.in/assets/img/banking_logo/13102943-icici-b9b38f77-216e-45f2-891b-edf7a7643433.webp" },
    { name: "UCO Bank", logo: "https://logiclead.in/assets/img/banking_logo/672b816d9405e17417c090fbb406ea6e.jpg" },
    { name: "Airtel Payments...", logo: "https://logiclead.in/assets/img/banking_logo/1.webp" },
    { name: "Axis Bank", logo: "https://logiclead.in/assets/img/banking_logo/76aabd7ec028d2927d5af281e82d9394.jpg" },
    { name: "Bank of Maharas...", logo: "https://logiclead.in/assets/img/banking_logo/1fd5be4d78777be064c80de62fda8136.jpg" },
    { name: "Indian Bank", logo: "https://logiclead.in/assets/img/banking_logo/66b5169c89ca2c55173cc4f3580418d1.jpg" },
    { name: "LivQuik Technol...", logo: "https://logiclead.in/assets/img/banking_logo/livquik_logo.jpg" },
    { name: "South Indian Ba...", logo: "https://logiclead.in/assets/img/banking_logo/b037d11999aed70e83657233c18675f6.jpg" },
    { name: "Union Bank of I...", logo: "https://logiclead.in/assets/img/banking_logo/18.png" },
    { name: "Canara Bank", logo: "https://logiclead.in/assets/img/banking_logo/c1ef2e91b95eac43bc00afbd580d23a3.jpg" },
    { name: "AU Bank", logo: "https://logiclead.in/assets/img/banking_logo/20.webp" },
    { name: "Bandhan Bank", logo: "https://logiclead.in/assets/img/banking_logo/4ae8ee4f8f839bab7ceb8501e4555763.jpg" }
  ];

  // FAQ data
  const faqData = [
    {
      question: "What is FASTag?",
      answer: "FASTag is a prepaid tag fixed on your vehicle's windscreen that enables automatic toll payment at toll plazas using RFID technology."
    },
    {
      question: "How can I recharge my FASTag on Logiclead?",
      answer: "Simply enter your vehicle/FASTag details, choose a recharge amount, select your payment method (UPI, card, net banking), and complete the payment."
    },
    {
      question: "What payment methods are accepted?",
      answer: "Logiclead supports UPI, debit/credit cards, net banking, and popular digital wallets."
    },
    {
      question: "Is there any minimum recharge amount?",
      answer: "Yes, the minimum recharge amount depends on the issuing bank, but on Logiclead, you can start from as low as ₹100."
    },
    {
      question: "How long does it take for the recharge to reflect?",
      answer: "Recharges are usually credited instantly, but in rare cases, it may take up to 30 minutes depending on the bank network."
    }
  ];

  const handleLogin = async () => {
    if (!email.trim()) {
      alert('Please enter email.');
      return;
    }

    setShowLoader(true);
    try {
      // Simulate API call - replace with actual API endpoint
      setTimeout(() => {
        setShowProfilePopup(false);
        setShowOtpPopup(true);
        setShowLoader(false);
      }, 1000);
      
      // Actual API call would look like this:
      /*
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': 'vfZDaqsgg4hxQT69K6UWgfSRhp0vaOikhQHohwqU'
        },
        body: JSON.stringify({ email })
      });

      const result = await response.text();
      if (result === '1') {
        setShowProfilePopup(false);
        setShowOtpPopup(true);
      } else {
        alert(result || 'Login failed. Please try again.');
      }
      */
    } catch (error) {
      alert('Login failed. Please try again.');
      setShowLoader(false);
    }
  };

  const handleResendOtp = async () => {
    setShowLoader(true);
    try {
      // Simulate API call
      setTimeout(() => {
        setShowLoader(false);
        alert('OTP resent successfully!');
      }, 1000);
      
      /*
      const response = await fetch('/resendOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': 'vfZDaqsgg4hxQT69K6UWgfSRhp0vaOikhQHohwqU'
        }
      });

      const result = await response.text();
      if (result !== '1') {
        alert(result || 'Failed to resend OTP.');
      }
      */
    } catch (error) {
      alert('Failed to resend OTP.');
      setShowLoader(false);
    }
  };

  const handleOtpSubmit = async () => {
    const otpString = otp.join('');
    if (otpString.length !== 4) {
      alert('Please enter complete OTP.');
      return;
    }

    setShowLoader(true);
    try {
      // Simulate API call
      setTimeout(() => {
        setShowLoader(false);
        alert('Login successful!');
        window.location.href = '/';
      }, 1000);
      
      /*
      const response = await fetch('/verifyOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': 'vfZDaqsgg4hxQT69K6UWgfSRhp0vaOikhQHohwqU'
        },
        body: JSON.stringify({ otp: otpString })
      });

      const result = await response.text();
      if (result === '1') {
        window.location.href = '/';
      } else {
        alert(result || 'Login failed. Please try again.');
      }
      */
    } catch (error) {
      alert('Login failed. Please try again.');
      setShowLoader(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleProceed = () => {
    if (!vehicleNumber.trim()) {
      alert('Please enter vehicle number');
      return;
    }
    // Handle proceed logic here
    console.log('Proceeding with vehicle:', vehicleNumber);
    alert(`Proceeding with vehicle: ${vehicleNumber}`);
  };

  const handleProfileClick = () => {
    setShowProfilePopup(true);
  };

  const handleMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleCloseMenu = () => {
    setShowMobileMenu(false);
  };

  // Handle OTP input backspace
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Backspace') {
        const inputs = document.querySelectorAll('.otp-input');
        const currentIndex = Array.from(inputs).findIndex(input => input === document.activeElement);
        
        if (currentIndex > 0 && !otp[currentIndex]) {
          inputs[currentIndex - 1].focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [otp]);

  return (
    <div className="fastag-container">
      <PageLoader show={showLoader} />
      
      <Navbar 
        onProfileClick={handleProfileClick}
        onMenuToggle={handleMenuToggle}
      />

      <HeroSection 
        vehicleNumber={vehicleNumber}
        onVehicleNumberChange={setVehicleNumber}
        onProceed={handleProceed}
      />

      <section>
        <img className="img-fluid w-100" src="https://logiclead.in/assets/img/Website Banner 4.png" alt="Banner" />
      </section>

      <ProviderSection providers={bankProviders} />

      <AboutSection />

      <FAQSection faqs={faqData} />

      <AppDownloadSection />

      <Footer />

      <MobileMenu 
        show={showMobileMenu}
        onClose={handleCloseMenu}
        onProfileClick={handleProfileClick}
      />

      <ProfilePopup 
        show={showProfilePopup}
        onClose={() => setShowProfilePopup(false)}
        email={email}
        onEmailChange={setEmail}
        onLogin={handleLogin}
      />

      <OtpPopup 
        show={showOtpPopup}
        onClose={() => setShowOtpPopup(false)}
        otp={otp}
        onOtpChange={handleOtpChange}
        onOtpSubmit={handleOtpSubmit}
        onResendOtp={handleResendOtp}
      />
    </div>
  );
};

export default Fastag;