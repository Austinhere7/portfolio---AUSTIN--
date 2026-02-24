const portfolioData = {
  profile: {
    heroLine1: "FRONTEND",
    heroLine2: "DEVELOPER",
    subtitle:
      "Hi! I'm <span class=\"hero-name-highlight\">AUSTIN SHAJAN</span>. A creative Frontend Developer with strong full-stack exposure, focused on building high-performance, scalable, and responsive digital products.",
    email: "austinshajan7@gmail.com",
    ctaLabel: "LET'S CONNECT",
    ctaHref: "#connect",
    footer: "Designed & built by Austin"
  },
  experience: [
    {
      company: "Lenient Tree",
      role: "Frontend Developer",
      location: "Kochi, Kerala",
      period: "2024 - Present",
      summary:
        "Led UI/UX and frontend development for the company website with focus on clean interfaces, optimized user flow, and smooth backend integration."
    },
    {
      company: "LiveArt India",
      role: "UI Design Intern",
      location: "Remote",
      period: "2023 - 2024",
      summary:
        "Designed user-centric interfaces and collaborated with engineering teams to improve visual consistency and usability across products."
    }
  ],
  skillGroups: [
    {
      title: "FRONTEND",
      items: [
        { label: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { label: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
        { label: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
        { label: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { label: "GSAP", icon: "https://cdn.simpleicons.org/greensock/88CE02" },
        { label: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/8B5CF6" },
        { label: "Sass", icon: "https://cdn.simpleicons.org/sass/CC6699" },
        { label: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" }
      ]
    },
    {
      title: "BACKEND",
      items: [
        { label: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
        { label: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/E0234E" },
        { label: "Express.js", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
        { label: "REST APIs", icon: "https://cdn.simpleicons.org/openapiinitiative/6BA539" }
      ]
    },
    {
      title: "DATABASE",
      items: [
        { label: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { label: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
        { label: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        { label: "Prisma", icon: "https://cdn.simpleicons.org/prisma/FFFFFF" },
        { label: "pgvector", icon: "https://cdn.simpleicons.org/postgresql/4169E1" }
      ]
    },
    {
      title: "TOOLS",
      items: [
        { label: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { label: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { label: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
        { label: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
        { label: "GitHub Copilot", icon: "https://cdn.simpleicons.org/github/FFFFFF" }
      ]
    }
  ],
  projects: [
    {
      name: "Lucidus '26",
      summary:
        "Led the UI design and full-stack development for the official college fest website and deployed it for live usage.",
      stack: ["Next.js", "Node.js", "PostgreSQL"]
    },
    {
      name: "Cinelenz",
      summary:
        "Built a real-time review aggregation web app using APIs for an engaging and dynamic movie exploration experience.",
      stack: ["React", "API Integration", "Express"]
    },
    {
      name: "Pardon.AI",
      summary:
        "Designed and developed an assistive AI platform to improve digital accessibility through intuitive interfaces.",
      stack: ["React", "Node.js", "Accessibility"]
    },
    {
      name: "Backend AI Chatbot",
      summary:
        "Built a backend chatbot with LangChain, RAG, conversation history, REST APIs, and document upload support.",
      stack: ["LangChain", "RAG", "PostgreSQL", "pgvector"]
    },
    {
      name: "Rubix.AI",
      summary:
        "Created a camera-powered web app that reads a Rubik's Cube and guides users move-by-move to completion.",
      stack: ["Computer Vision", "State Mapping", "Interactive UI"]
    }
  ],
  connectLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ausn-shajan" },
    { label: "GitHub", href: "https://github.com/Austinhere7" }
  ],
  stats: [
    { value: "3+", label: "Years of Experience" },
    { value: "10+", label: "Completed Projects" },
    { value: "6+", label: "Core Tech Domains" }
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
  const subtitleElement = document.getElementById("heroSubtitle");
  if (subtitleElement) subtitleElement.innerHTML = profile.subtitle;
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

function renderExperience() {
  const container = document.getElementById("experienceList");
  if (!container) return;

  container.innerHTML = portfolioData.experience
    .map(
      entry => `
      <article class="xp-card">
        <p class="meta-line">${entry.company} · ${entry.location}</p>
        <h3 class="entry-title">${entry.role}</h3>
        <p class="entry-range">${entry.period}</p>
        <p class="entry-summary">${entry.summary}</p>
      </article>
    `
    )
    .join("");
}

function renderSkills() {
  const container = document.getElementById("skillsGroups");
  if (!container) return;

  container.innerHTML = portfolioData.skillGroups
    .map(
      group => `
      <article class="skill-group">
        <h3 class="skill-group-title">${group.title}</h3>
        <div class="skill-items">
          ${group.items
            .map(
              item => `
            <span class="skill-item">
              <img src="${item.icon}" alt="${item.label} icon" loading="lazy" decoding="async" />
              <span>${item.label}</span>
            </span>
          `
            )
            .join("")}
        </div>
      </article>
    `
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projectsList");
  if (!container) return;

  container.innerHTML = portfolioData.projects
    .map(
      project => `
      <article class="project-card">
        <h3 class="entry-title">${project.name}</h3>
        <p class="entry-summary">${project.summary}</p>
        <div class="project-stack">
          ${project.stack.map(item => `<span>${item}</span>`).join("")}
        </div>
      </article>
    `
    )
    .join("");
}

function renderConnectLinks() {
  const container = document.getElementById("connectLinks");
  if (!container) return;

  container.innerHTML = portfolioData.connectLinks
    .map(link => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`)
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

function setupSectionNav() {
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const sections = navLinks
    .map(link => {
      const targetId = link.getAttribute("href")?.replace("#", "");
      if (!targetId) return null;
      const section = document.getElementById(targetId);
      if (!section) return null;
      return { link, section };
    })
    .filter(Boolean);

  if (!sections.length) return;

  const updateActiveLink = () => {
    const offset = window.scrollY + window.innerHeight * 0.3;

    for (let index = sections.length - 1; index >= 0; index -= 1) {
      const item = sections[index];
      if (item && offset >= item.section.offsetTop) {
        navLinks.forEach(link => link.classList.remove("is-active"));
        item.link.classList.add("is-active");
        return;
      }
    }

    navLinks[0]?.classList.add("is-active");
  };

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink, { passive: true });
  window.addEventListener("resize", updateActiveLink);
}

function buildIntroLetters(nameText) {
  return nameText
    .split("")
    .map(
      (character, index) =>
        `<span class="intro-letter" style="--letter-index:${index};">${character}</span>`
    )
    .join("");
}

function buildRevealColumns(columnsCount) {
  return Array.from({ length: columnsCount }, (_, index) => {
    const rightToLeftOrder = columnsCount - 1 - index;
    return `<span class="reveal-column" style="--column-order:${rightToLeftOrder};"></span>`;
  }).join("");
}

function setupIntroAnimation() {
  const overlay = document.getElementById("introOverlay");
  const nameContainer = document.getElementById("introName");
  const revealColumns = document.getElementById("revealBlocks");

  if (!overlay || !nameContainer || !revealColumns) {
    document.body.classList.remove("intro-loading");
    return;
  }

  const introName = nameContainer.dataset.name?.trim() || "AUSTIN";
  const columnsCount = Math.max(Math.floor(window.innerWidth / 120), 7);
  revealColumns.style.setProperty("--intro-columns", String(columnsCount));
  revealColumns.innerHTML = buildRevealColumns(columnsCount);
  nameContainer.innerHTML = buildIntroLetters(introName);

  requestAnimationFrame(() => {
    overlay.classList.add("show-name");
  });

  const letterDuration = 760;
  const letterDelay = 95;
  const revealPause = 420;
  const columnDropDuration = 700;
  const columnStagger = 46;
  const totalLetterTime = letterDuration + Math.max(introName.length - 1, 0) * letterDelay;
  const revealStart = totalLetterTime + revealPause;
  const revealDuration = columnDropDuration + Math.max(columnsCount - 1, 0) * columnStagger;
  const finishAt = revealStart + revealDuration;

  setTimeout(() => {
    overlay.classList.add("is-revealing");
  }, revealStart);

  setTimeout(() => {
    overlay.classList.add("is-done");
    document.body.classList.remove("intro-loading");
  }, finishAt);

  setTimeout(() => {
    overlay.remove();
  }, finishAt + 480);
}

function init() {
  renderHero();
  renderStats();
  renderExperience();
  renderSkills();
  renderProjects();
  renderConnectLinks();
  renderStars();
  setupSectionNav();
  setupIntroAnimation();
}

init();