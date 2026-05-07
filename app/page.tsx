"use client";

export default function Home() {
  return (
    <main>

      {/* NAVBAR */}
      <nav className="navbar">

  {/* LEFT SIDE LOGO */}
  <div className="logo">Sakshi Shinde</div>

  {/* RIGHT SIDE LINKS */}
  <div className="nav-links">

    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com"
      target="_blank"
      className="nav-icon"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
        alt="LinkedIn"
      />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com"
      target="_blank"
      className="nav-icon"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
        alt="GitHub"
      />
    </a>

  </div>

</nav>
      {/* HERO */}
      <section id="home" className="hero">

  <p className="intro-tag">Hi, I am</p>

  <h1 className="premium-name">
    <span className="gradient-text">Sakshi Shinde</span>
  </h1>

  <p className="subtitle">
    Data Analyst • Turning Data into Insights • Problem Solver
  </p>

  <p className="hero-desc">
    Solving business problems through data analysis and visualization.
  </p>

  {/* SCROLL ARROW */}
<div
className="scroll-indicator"
onClick={() => {
  const section = document.getElementById("contact");

  if (section) {
    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
}}
>
<span className="arrow">↓</span>
</div>

  {/* BUTTONS */}
  <div className="hero-buttons">
    <button
      className="btn"
      onClick={() =>
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      View Projects
    </button>

    <button
      className="btn-outline"
      onClick={() =>
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Contact Me
    </button>
  </div>

</section>

      {/* IDENTITY */}
      <section className="identity-strip">

        <div className="identity-card">
          <h4>Focus</h4>
          <p>Data Cleaning • EDA • SQL • Power BI • Python</p>
        </div>

        <div className="identity-card">
          <h4>Goal</h4>
          <p>Data Analysis & Problem Solving</p>
        </div>

        <div className="identity-card">
          <h4>Identity</h4>
          <p>Turning raw data into insights</p>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">

        <h2 className="heading">About Me</h2>

        <div className="about-wow">

          <div className="about-glow-box">

            <p className="about-text">
              I am a Data Analyst passionate about transforming raw data into meaningful insights that support better decision-making.
              I enjoy exploring datasets, identifying patterns, and presenting findings through clean and impactful visualizations.
              My focus is on building strong analytical thinking and applying data-driven approaches to solve real-world problems.
            </p>

            <div className="about-badge">
              Turning Data Into Decisions ✨
            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section">

        <h2 className="heading">Skills</h2>

        <div className="skills-wow">

          <div className="skill-glass">
            <h3>Programming & Databases</h3>
            <p>Python • SQL • MySQL</p>
          </div>

          <div className="skill-glass">
            <h3>Data Analysis</h3>
            <p>Data Cleaning • Data Transformation • EDA</p>
          </div>

          <div className="skill-glass">
            <h3>Libraries</h3>
            <p>Pandas • NumPy • Matplotlib • Seaborn</p>
          </div>

          <div className="skill-glass">
            <h3>Visualization Tools</h3>
            <p>Power BI • Tableau • Excel</p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <h2 className="heading">Projects</h2>

        <div className="project-grid">

          {/* Project 1 */}
          <div className="project-card saas-card">
            <div className="project-top c1"></div>
            <h3>Online Voting System</h3>
            <span className="badge blue">MySQL</span>

            <p className="project-desc">
              Secure election system with structured database, vote validation, and reporting automation.
            </p>

            <div className="metrics">
              <span>✔ Data Integrity</span>
              <span>✔ No Duplicate Votes</span>
              <span>✔ Fast Queries</span>
            </div>

            <div className="tags">
              <span>JOIN</span>
              <span>Triggers</span>
              <span>Procedures</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card saas-card">
            <div className="project-top c2"></div>
            <h3>Fit-Track System</h3>
            <span className="badge purple">Python</span>

            <p className="project-desc">
              Health tracking system with BMI calculator, diet planning, and personalized recommendations.
            </p>

            <div className="metrics">
              <span>✔ Health Score</span>
              <span>✔ AI Logic</span>
              <span>✔ Insights</span>
            </div>

            <div className="tags">
              <span>OOP</span>
              <span>Automation</span>
              <span>Logic</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card saas-card">
            <div className="project-top c3"></div>
            <h3>Breast Cancer Analysis</h3>
            <span className="badge green">Power BI</span>

            <p className="project-desc">
              Interactive dashboard analyzing survival trends and medical patterns.
            </p>

            <div className="metrics">
              <span>✔ Survival Trends</span>
              <span>✔ Risk Factors</span>
              <span>✔ Insights</span>
            </div>

            <div className="tags">
              <span>Dashboard</span>
              <span>KPIs</span>
              <span>Charts</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card saas-card">
            <div className="project-top c4"></div>
            <h3>Lifestyle Impact on Pollution</h3>
            <span className="badge green">Python</span>

            <p className="project-desc">
              Analyzed the impact of lifestyle and environmental factors on pollution exposure, identifying key patterns and correlations using data analysis techniques.
            </p>

            <div className="metrics">
              <span>✔ Pattern Detection</span>
              <span>✔ Correlation Analysis</span>
              <span>✔ Data Insights</span>
            </div>

            <div className="tags">
              <span>Pandas</span>
              <span>EDA</span>
              <span>Visualization</span>
            </div>
          </div>

        </div>

      </section>



      {/* =========================
   EDUCATION (TIMELINE STYLE)
========================= */}
<section id="education" className="section">

  <h2 className="heading">Education</h2>

  <div className="timeline">

    <div className="timeline-item">
      <div className="dot"></div>
      <div className="content">
        <h3>Bachelor of Computer Science</h3>
        <p>ICLES’ Motilal Jhunjhunwala College</p>
        <span>2022 - 2025</span>
      </div>
    </div>

    <div className="timeline-item">
      <div className="dot"></div>
      <div className="content">
        <h3>Higher Secondary Education</h3>
        <p>ICLES’ Motilal Jhunjhunwala College</p>
        <span>2022</span>
      </div>
    </div>

  </div>

</section>

{/* =========================
   CERTIFICATIONS (TIMELINE STYLE)
========================= */}
<section id="certifications" className="section">
  <h2 className="heading">Certifications</h2>

  <div className="certifications-wrap">

    <div className="cert-box">
      <div className="cert-top">
        <span className="cert-number">CERTIFICATE 01</span>
        <span className="cert-year">2025</span>
      </div>

      <h3>Google Data Analytics Professional Certificate</h3>

      <div className="cert-provider">
        Coursera
      </div>

      <p className="cert-desc">
        Learned data cleaning, visualization, SQL, spreadsheets,
        dashboards, and analytical thinking through real-world projects.
      </p>
    </div>

    <div className="cert-box">
      <div className="cert-top">
        <span className="cert-number">CERTIFICATE 02</span>
        <span className="cert-year">2025</span>
      </div>

      <h3>Data Analytics with AI</h3>

      <div className="cert-provider">
        QUASTECH
      </div>

      <p className="cert-desc">
        Worked with AI-powered analytics concepts, Python workflows,
        insights generation, and modern data analysis techniques.
      </p>
    </div>

  </div>
</section>

{/* CONTACT */}
<section id="contact" className="section contact-v2">

  <h2 className="heading">Contact</h2>

  {/* STATUS */}
  <div className="status-pill">
    <span className="dot"></span>
    Available for opportunities
  </div>

  {/* TITLE */}
  <h3 className="contact-title">
    Let’s connect — and create something that stands out.
  </h3>

  {/* SUB TEXT */}
  <p className="contact-sub">
    Open to opportunities in Data Analytics roles
  </p>

  {/* EMAIL + PHONE */}
  <div className="contact-simple">

    <p className="contact-line">
      📧 <span>sakshishinde813@gmail.com</span>
    </p>

    <p className="contact-line">
      📱 <span>+91 99672 46429</span>
    </p>

  </div>

  {/* SOCIAL ICONS (LINKEDIN + GITHUB ONLY) */}
  <div className="social-icons">

    <a
      href="https://linkedin.com"
      target="_blank"
      className="icon-btn linkedin"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
        alt="LinkedIn"
      />
    </a>

    <a
      href="https://github.com"
      target="_blank"
      className="icon-btn github"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
        alt="GitHub"
      />
    </a>

  </div>

</section>
{/* 
  SOCIAL ICONS
  <div className="social-icons">

    <a href="https://linkedin.com" className="icon-btn linkedin">
      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
    </a>

    <a href="https://github.com" className="icon-btn github">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" />
    </a>

  </div> */}
  </main>
  );
}

