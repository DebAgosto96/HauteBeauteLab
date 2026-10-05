import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div
        className="home-fixed-background"
        style={{ backgroundImage: 'url("/bg.png")' }}
        aria-hidden="true"
      ></div>

      <div className="home-fixed-overlay" aria-hidden="true"></div>

      <main className="home">
        {/* HERO */}
        <section className="home-hero">
          <div className="hero-content">
            <p className="home-eyebrow">PERSONALIZED • ELEVATED • BEAUTIFUL</p>

            <h1 className="hero-title">
              Beauty, made
              <span>personal.</span>
            </h1>

            <p className="hero-description">
              Thoughtful beauty guidance, personalized recommendations, and
              elevated resources created around you, your goals, and your unique
              beauty.
            </p>

            <div className="hero-actions">
              <Link to="/consultations" className="home-primary-button">
                Start Your Consultation
              </Link>

              <a href="#discover" className="home-text-link">
                Discover Hauté
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="home-intro" id="discover">
          <div className="intro-inner">
            <p className="home-eyebrow">WELCOME TO HAUTÉ BEAUTÉ LAB</p>

            <h2>
              Your beauty.
              <em> Your way.</em>
            </h2>

            <p className="intro-description">
              Beauty isn't one-size-fits-all. Hauté Beauté Lab was created to
              make finding what works for you feel simpler, more personal, and
              more intentional.
            </p>

            <p className="intro-description intro-secondary">
              From personalized guidance to curated resources and professional
              services, everything begins with understanding what you actually
              need.
            </p>

            <div className="intro-divider">
              <span></span>
              <div>HB</div>
              <span></span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="home-services">
          <div className="services-header">
            <div>
              <p className="home-eyebrow">DISCOVER HAUTÉ</p>

              <h2>Made for you.</h2>
            </div>

            <p className="services-header-text">
              Explore personalized services and resources designed to help you
              make more confident beauty decisions.
            </p>
          </div>

          <div className="services-grid">
            <Link to="/consultations" className="home-service-card">
              <div className="service-top">
                <span className="service-arrow">↗</span>
              </div>

              <div className="service-card-content">
                <p className="service-category">ONE-ON-ONE</p>

                <h3>Consultations</h3>

                <p className="service-description">
                  Personalized guidance created around your beauty goals,
                  concerns, preferences, lifestyle, and budget.
                </p>

                <span className="service-discover">Explore consultations</span>
              </div>
            </Link>

            <Link
              to="/personalized-plans"
              className="home-service-card service-featured"
            >
              <div className="service-top">
                <span className="service-arrow">↗</span>
              </div>

              <div className="service-card-content">
                <p className="service-category">CURATED FOR YOU</p>

                <h3>Beauty Plans</h3>

                <p className="service-description">
                  Receive a personalized plan with recommendations, routines,
                  maintenance guidance, and next steps created specifically for
                  you.
                </p>

                <span className="service-discover">Find your plan</span>
              </div>
            </Link>

            <Link to="/guides" className="home-service-card">
              <div className="service-top">
                <span className="service-arrow">↗</span>
              </div>

              <div className="service-card-content">
                <p className="service-category">THE BEAUTÉ LIBRARY</p>

                <h3>Guides</h3>

                <p className="service-description">
                  Curated beauty guides, resources, and tools designed to make
                  caring for your beauty routine easier.
                </p>

                <span className="service-discover">Browse the library</span>
              </div>
            </Link>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="home-philosophy">
          <div className="philosophy-decoration">H</div>

          <div className="philosophy-content">
            <p className="home-eyebrow">OUR PHILOSOPHY</p>

            <h2>
              No two people need
              <em> the same beauty routine.</em>
            </h2>

            <p>
              Your hair, lifestyle, preferences, goals, and budget are personal.
              Your recommendations should be too. We believe beauty should
              enhance who you are rather than ask you to fit into someone else's
              routine.
            </p>

            <Link to="/about" className="home-text-link dark-link">
              Discover our approach
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="home-experience">
          <div className="experience-heading">
            <p className="home-eyebrow">THE HAUTÉ EXPERIENCE</p>

            <h2>
              Simple. Personal.
              <em> Completely yours.</em>
            </h2>
          </div>

          <div className="experience-grid">
            <div className="experience-item">
              <span>01</span>

              <h3>Tell us about you.</h3>

              <p>
                Share your goals, preferences, current routine, concerns, and
                what you're hoping to achieve.
              </p>
            </div>

            <div className="experience-item">
              <span>02</span>

              <h3>We personalize it.</h3>

              <p>
                Your information is reviewed to create guidance and
                recommendations tailored specifically to you.
              </p>
            </div>

            <div className="experience-item">
              <span>03</span>

              <h3>Feel confident.</h3>

              <p>
                Walk away with clearer recommendations and a beauty direction
                that actually makes sense for you.
              </p>
            </div>
          </div>
        </section>

        {/* PROFESSIONALS */}
        <section className="professional-teaser">
          <div className="professional-inner">
            <div className="professional-number">HB / PRO</div>

            <div className="professional-content">
              <p className="home-eyebrow">FOR PROFESSIONALS</p>

              <h2>
                Elevate what
                <em> you've built.</em>
              </h2>

              <p>
                Specialized creative and digital services for beauty
                professionals ready to strengthen their presence, refine their
                client experience, and grow with intention.
              </p>

              <Link to="/professionals" className="professional-link">
                Explore professional services
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="home-cta">
          <div className="cta-content">
            <p className="home-eyebrow">BEGIN YOUR BEAUTÉ JOURNEY</p>

            <h2>
              Let's find what
              <em> works for you.</em>
            </h2>

            <p>Personalized beauty starts with understanding you.</p>

            <Link to="/consultations" className="home-primary-button">
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
