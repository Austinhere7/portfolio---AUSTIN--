const portfolioData = {
  profile: {
    heroLine1: "FRONTEND",
    heroLine2: "DEVELOPER",
    subtitle:
      "Hi! I'm Your Name. A creative Frontend Developer with 3+ years of experience in building high-performance, scalable, and responsive web solutions.",
    email: "you@example.com",
    ctaLabel: "HIRE ME",
    ctaHref: "#contact",
    footer: "Designed & built by Your Name"
  },
  stats: [
    { value: "3+", label: "Years of Experience" },
    { value: "7+", label: "Completed Projects" },
    { value: "10K+", label: "Hours Worked" }
  ]
};

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function setLink(id, label, href) {
  const element = document.getElementById(id);
  if (!element) return;
  element.textContent = label;
  element.href = href;
}

function renderHero() {
  const { profile } = portfolioData;
  setText("heroLine1", profile.heroLine1);
  setText("heroLine2", profile.heroLine2);
  setText("heroSubtitle", profile.subtitle);
  setText("footerNote", profile.footer);
  setLink("primaryCta", profile.ctaLabel, profile.ctaHref);
  setLink("emailRail", profile.email, `mailto:${profile.email}`);
  setLink("contactMail", profile.email, `mailto:${profile.email}`);
}

function renderStats() {
  const container = document.getElementById("stats");
  if (!container) return;

  container.innerHTML = portfolioData.stats
    .map(
      stat => `
      <article class="stat-card">
        <strong>${stat.value}</strong>
        <span>${stat.label}</span>
      </article>
    `
    )
    .join("");
}

function renderStars() {
  const starsContainer = document.getElementById("stars");
  if (!starsContainer) return;

  const totalStars = 85;
  const starsMarkup = [];

  for (let index = 0; index < totalStars; index += 1) {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 3;
    const duration = 2 + Math.random() * 3;
    const scale = 0.7 + Math.random() * 1.7;
    starsMarkup.push(
      `<span class="star" style="left:${left}%; top:${top}%; animation-delay:${delay}s; animation-duration:${duration}s; transform:scale(${scale});"></span>`
    );
  }

  starsContainer.innerHTML = starsMarkup.join("");
}

function init() {
  renderHero();
  renderStats();
  renderStars();
}

init();