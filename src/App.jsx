import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-box">RV</div>
          <div>
            <h3>Regardo Vision</h3>
            <p>and Sources Pvt. Ltd.</p>
          </div>
        </div>

        <ul className="nav-links">
          <li>Services</li>
          <li>SaaS Products</li>
          <li>Manpower</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button className="nav-btn">Get in touch</button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="badge">AI-powered business solutions</div>

        <h1>
          Smart technology and talent,
          <br />
          built for growth
        </h1>

        <p>
          We help businesses scale faster with AI-driven SaaS products
          and expert manpower solutions.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore our services
          </button>

          <button className="secondary-btn">
            Book a demo
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div>
          <h2>200+</h2>
          <p>Clients served</p>
        </div>

        <div>
          <h2>5+</h2>
          <p>AI products live</p>
        </div>

        <div>
          <h2>98%</h2>
          <p>Client satisfaction</p>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <span className="section-tag">
          WHAT WE DO
        </span>

        <h2>
          Everything your business needs to move forward
        </h2>

        <p className="section-desc">
          From cutting-edge AI products to on-demand talent.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>AI Chatbot</h3>
            <p>
              Intelligent, context-aware chatbots for
              customer support and automation.
            </p>
          </div>

          <div className="card">
            <h3>Voicebot</h3>
            <p>
              Automated voice agents handling calls
              and lead qualification.
            </p>
          </div>

          <div className="card">
            <h3>Manpower Solutions</h3>
            <p>
              Skilled talent for IT, operations and
              business roles.
            </p>
          </div>

          <div className="card">
            <h3>Web Development</h3>
            <p>
              Professional websites and web
              applications.
            </p>
          </div>

          <div className="card">
            <h3>Business Development</h3>
            <p>
              Lead generation and go-to-market
              support.
            </p>
          </div>

          <div className="card">
            <h3>Process Automation</h3>
            <p>
              Streamline repetitive workflows with AI.
            </p>
          </div>
        </div>
      </section>

      {/* SaaS */}
      <section className="section">
        <span className="section-tag">
          SAAS PRODUCTS
        </span>

        <h2>AI products that work while you sleep</h2>

        <div className="two-grid">
          <div className="product-card">
            <h3>RegardoVoice</h3>
            <p>
              AI-powered voice agents that handle calls,
              qualify prospects and book appointments.
            </p>
          </div>

          <div className="product-card">
            <h3>RegardoChat</h3>
            <p>
              Deploy a smart chatbot on your website
              or app in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Manpower */}
      <section className="section">
        <span className="section-tag">
          MANPOWER SOLUTIONS
        </span>

        <h2>
          The right people, right when you need them
        </h2>

        <div className="card-grid">
          <div className="card">
            <h3>Tech Talent</h3>
            <p>
              Full-stack developers, AI engineers,
              analysts and DevOps professionals.
            </p>
          </div>

          <div className="card">
            <h3>Business & Sales Roles</h3>
            <p>
              Business development executives and
              client success managers.
            </p>
          </div>

          <div className="card">
            <h3>Customer Support</h3>
            <p>
              Trained support agents across voice,
              chat and email channels.
            </p>
          </div>

          <div className="card">
            <h3>Internship Programs</h3>
            <p>
              Structured internship placements for
              freshers.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <span className="section-tag">
          HOW IT WORKS
        </span>

        <h2>Up and running in four steps</h2>

        <div className="steps">
          <div className="step">
            <h3>01</h3>
            <h4>Consultation</h4>
          </div>

          <div className="step">
            <h3>02</h3>
            <h4>Proposal</h4>
          </div>

          <div className="step">
            <h3>03</h3>
            <h4>Deployment</h4>
          </div>

          <div className="step">
            <h3>04</h3>
            <h4>Support</h4>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <h2>Ready to get started?</h2>

        <p>
          Talk to our team today.
        </p>

        <div className="contact-form">
          <input
            type="text"
            placeholder="Your name"
          />

          <input
            type="text"
            placeholder="Email or phone number"
          />

          <button>
            Request a callback
          </button>
        </div>

        <p className="contact-info">
          +91 8340797128 | official@regardovisionandsources.in
        </p>
      </section>

      <footer>
        © 2026 Regardo Vision and Sources Pvt. Ltd.
      </footer>
      <a
  href="https://vapi.ai?demo=true&shareKey=5b48ca8f-3e0f-4f93-b864-33c60d6301ea&assistantId=53cdf2f1-7acd-442e-9e42-eb0019a858c6"
  target="_blank"
  rel="noopener noreferrer"
  className="voice-bot-btn"
>
  🎙️
</a>

    </div>
  );
}

export default App;