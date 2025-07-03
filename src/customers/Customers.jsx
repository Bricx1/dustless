import React, { useEffect } from 'react';


const Customers = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
      }
    };

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').min = today;
    document.getElementById('quickDate').min = today;

    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openBookingModal = (serviceName) => {
    document.getElementById('modalServiceName').textContent = serviceName;
    document.getElementById('bookingModal').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('bookingModal').style.display = 'none';
  };

  const handleFormSubmit = (e, id) => {
    e.preventDefault();
    alert(id === 'bookingForm'
      ? 'Thank you for your booking request! We will contact you within 24 hours with a detailed quote.'
      : 'Thank you! We will call you back within 2 hours to schedule your service.'
    );
    e.target.reset();
    if (id === 'quickBookForm') closeModal();
  };

  return (
    <div className="homepage">
      <header>
        <div className="container">
          <div className="header-content">
            <a href="#" className="logo">🧹 Dustless Solution</a>
            <nav>
              <ul className="nav-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#booking">Book Now</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Professional Dustless Cleaning</h1>
          <p>Experience the future of cleaning with our advanced dustless technology</p>
          <a href="#booking" className="cta-button">Book Your Service Today</a>
        </div>
      </section>

      <div className="container">
        <div className="main-content">
          {/* Services Section */}
          {/* Features Section */}
          {/* Testimonials Section */}
          {/* Booking Form Section */}
        </div>
      </div>

      {/* Booking Modal */}
      <div id="bookingModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Quick Book: <span id="modalServiceName"></span></h2>
          <form id="quickBookForm" onSubmit={(e) => handleFormSubmit(e, 'quickBookForm')}>
            <div className="form-group">
              <label htmlFor="quickName">Name:</label>
              <input type="text" id="quickName" required />
            </div>
            <div className="form-group">
              <label htmlFor="quickPhone">Phone:</label>
              <input type="tel" id="quickPhone" required />
            </div>
            <div className="form-group">
              <label htmlFor="quickDate">Preferred Date:</label>
              <input type="date" id="quickDate" />
            </div>
            <button type="submit" className="submit-btn">Request Callback</button>
          </form>
        </div>
      </div>

      <footer>
        <div className="container">
          <p>&copy; 2025 Dustless Solution. All rights reserved.</p>
          <p>📞 1-800-DUSTLESS | 📧 info@dustlesssolution.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Customers;
