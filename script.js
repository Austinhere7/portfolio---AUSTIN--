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

  const totalStars = 95;
  const starsMarkup = [];

  for (let index = 0; index < totalStars; index += 1) {
    const left = Math.random() * 100;
    const initialOffset = -(Math.random() * 115);
    const fallDuration = 22 + Math.random() * 18;
    const fallDelay = -(Math.random() * fallDuration);
    const twinkleDuration = 2.2 + Math.random() * 3.5;
    const twinkleDelay = Math.random() * 3;
    const scale = 0.6 + Math.random() * 1.6;
    const drift = -18 + Math.random() * 36;

    starsMarkup.push(
      `<span class="star" style="left:${left}%; top:${initialOffset}vh; --fall-duration:${fallDuration}s; --fall-delay:${fallDelay}s; --twinkle-duration:${twinkleDuration}s; --twinkle-delay:${twinkleDelay}s; --star-scale:${scale}; --star-drift:${drift}px;"></span>`
    );
  }

  starsContainer.innerHTML = starsMarkup.join("");
}

function setupScrollIndicator() {
  const fill = document.getElementById("scrollFill");
  if (!fill) return;

  const updateScrollFill = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
    fill.style.height = `${progress * 100}%`;
  };

  updateScrollFill();
  window.addEventListener("scroll", updateScrollFill, { passive: true });
  window.addEventListener("resize", updateScrollFill);
}

function init() {
  renderHero();
  renderStats();
  renderStars();
  setupScrollIndicator();
}

init();