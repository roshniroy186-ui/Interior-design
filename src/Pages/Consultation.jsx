import { useState } from "react";

function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    location: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Consultation Request:", formData);

    alert(
      "Thank you! Your consultation request has been submitted."
    );
  };

  return (
    <main className="consultation-page">

      <section className="consultation-header inner-page-hero">

        <p className="section-label">
          FREE CONSULTATION
        </p>

        <h1>
          Let's Design
          <br />
          Your Dream Home.
        </h1>

        <p>
          Tell us about your home and requirements.
          Our interior design team will get in touch
          with you to discuss your project.
        </p>

      </section>


      <section className="consultation-body">

        <div className="consultation-layout">

          <aside className="consultation-sidebar">

            <h2>
              Why Book With Us
            </h2>

            <ul className="consultation-benefits">
              <li>
                <strong>Free Consultation</strong>
                <span>
                  Discuss your space and requirements with our design team at no cost.
                </span>
              </li>
              <li>
                <strong>Personalised Design</strong>
                <span>
                  Every project is planned around your lifestyle, taste and budget.
                </span>
              </li>
              <li>
                <strong>Complete Execution</strong>
                <span>
                  From concept to final installation, we manage the full interior process.
                </span>
              </li>
            </ul>

            <div className="consultation-quick-contact">

              <p>
                Prefer to talk directly?
              </p>

              <a href="tel:+919572450663">
                Call +91 9572450663
              </a>

              <a
                href="https://wa.me/919572450663"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>

            </div>

          </aside>


          <form
            className="consultation-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="propertyType">
                Property Type *
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Property Type
                </option>
                <option value="2 BHK">
                  2 BHK
                </option>
                <option value="3 BHK">
                  3 BHK
                </option>
                <option value="4 BHK">
                  4 BHK
                </option>
                <option value="5 BHK">
                  5 BHK
                </option>
                <option value="Villa">
                  Villa
                </option>
                <option value="Apartment">
                  Apartment
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">
                Project Location *
              </label>
              <input
                id="location"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City / Area"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">
                Required Service *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Service
                </option>
                <option value="Living Room">
                  Living Room
                </option>
                <option value="Bedroom">
                  Bedroom
                </option>
                <option value="Kitchen">
                  Kitchen
                </option>
                <option value="Bathroom">
                  Bathroom
                </option>
                <option value="Full Home">
                  Full Home
                </option>
                <option value="Apartment Interior">
                  Apartment Interior
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="budget">
                Approximate Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">
                  Select Budget
                </option>
                <option value="3-5 Lakh">
                  ₹3 - ₹5 Lakh
                </option>
                <option value="5-10 Lakh">
                  ₹5 - ₹10 Lakh
                </option>
                <option value="10-15 Lakh">
                  ₹10 - ₹15 Lakh
                </option>
                <option value="15-25 Lakh">
                  ₹15 - ₹25 Lakh
                </option>
                <option value="25+ Lakh">
                  ₹25+ Lakh
                </option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">
                Tell Us About Your Project
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                rows="6"
              />
            </div>

            <div className="form-submit">
              <button type="submit">
                Request Free Consultation →
              </button>
            </div>

          </form>

        </div>

      </section>

    </main>
  );
}

export default Consultation;
