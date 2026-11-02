import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="contact-page">

      {/* HEADER */}

      <section className="contact-header inner-page-hero">

        <p className="section-label">
          CONTACT US
        </p>

        <h1>
          Let's Create
          <br />
          Your Dream Home.
        </h1>

        <p>
          Have a question about your home interior?
          Get in touch with our design team.
        </p>

      </section>


      {/* CONTACT INFORMATION */}

      <section className="contact-content">

        <div className="contact-info">

          <h2>
            Get In Touch
          </h2>

          <p>
            We work on residential interiors including
            apartments, houses and complete homes.
          </p>


          {/* PHONE */}

          <div className="contact-item">

            <span>
              PHONE
            </span>

            <a href="tel:+919999999999">
              +919572450663
            </a>

          </div>


          {/* WHATSAPP */}

          <div className="contact-item">

            <span>
              WHATSAPP
            </span>

            <a
              href="https://wa.me/919572450663"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat With Us
            </a>

          </div>


          {/* EMAIL */}

          <div className="contact-item">

            <span>
              EMAIL
            </span>

            <a href="mailto: roshniroy186@gmail.com">
              roshniroy186@gmail.com
            </a>

          </div>


          {/* LOCATION */}

          <div className="contact-item">

            <span>
              LOCATION
            </span>

            <p>
              #C-64, Block-C , Beta 1 , Greater Noida
            </p>

          </div>


          {/* WORKING HOURS */}

          <div className="contact-item">

            <span>
              WORKING HOURS
            </span>

            <p>
              Monday – Saturday
              <br />
              10:00 AM – 7:00 PM
            </p>

          </div>

        </div>


        {/* CONTACT CTA */}

        <div className="contact-cta">

          <p className="section-label">
            START YOUR PROJECT
          </p>

          <h2>
            Tell Us About
            <br />
            Your Home.
          </h2>

          <p>
            Book a free consultation with our team.
            We'll understand your requirements,
            discuss your ideas and help you plan
            your interior.
          </p>

          <Link to="/consultation">
            Book Free Consultation →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Contact;
