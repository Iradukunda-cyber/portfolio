/* =========================================================
   IRADUKUNDA JOSEE - PROFESSIONAL PORTFOLIO
   ========================================================= */

:root {
    --bg: #070b14;
    --bg-secondary: #0c1220;
    --card: rgba(17, 25, 40, 0.78);
    --card-solid: #101827;
    --text: #f5f7fb;
    --text-secondary: #a7b0c2;
    --muted: #778196;

    --primary: #7c5cff;
    --primary-light: #9b83ff;
    --cyan: #22d3ee;

    --border: rgba(255, 255, 255, 0.09);
    --border-hover: rgba(124, 92, 255, 0.45);

    --shadow: 0 20px 60px rgba(0, 0, 0, 0.35);

    --radius-sm: 10px;
    --radius-md: 16px;
    --radius-lg: 24px;

    --max-width: 1180px;

    --transition: 0.3s ease;
}

[data-theme="light"] {
    --bg: #f6f8fc;
    --bg-secondary: #ffffff;
    --card: rgba(255, 255, 255, 0.9);
    --card-solid: #ffffff;

    --text: #111827;
    --text-secondary: #4b5563;
    --muted: #6b7280;

    --border: rgba(15, 23, 42, 0.1);
    --border-hover: rgba(124, 92, 255, 0.4);

    --shadow: 0 20px 60px rgba(15, 23, 42, 0.1);
}


/* =========================================================
   RESET
   ========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}

body {
    font-family: "Inter", sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.7;
    overflow-x: hidden;
    transition: background var(--transition), color var(--transition);
}

a {
    color: inherit;
    text-decoration: none;
}

button,
input,
textarea {
    font: inherit;
}

button {
    cursor: pointer;
}

img {
    max-width: 100%;
    display: block;
}

.container {
    width: min(92%, var(--max-width));
    margin: 0 auto;
}

.section {
    padding: 110px 0;
    position: relative;
}


/* =========================================================
   HEADER
   ========================================================= */

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    border-bottom: 1px solid transparent;

    transition:
        background var(--transition),
        border-color var(--transition),
        box-shadow var(--transition);
}

.header.scrolled {
    background: rgba(7, 11, 20, 0.85);
    backdrop-filter: blur(18px);
    border-color: var(--border);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

[data-theme="light"] .header.scrolled {
    background: rgba(255, 255, 255, 0.88);
}

.nav-container {
    min-height: 78px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.logo {
    width: 44px;
    height: 44px;

    display: grid;
    place-items: center;

    font-family: "Space Grotesk", sans-serif;
    font-weight: 700;

    border: 1px solid var(--border);
    border-radius: 12px;

    background:
        linear-gradient(
            135deg,
            rgba(124, 92, 255, 0.2),
            rgba(34, 211, 238, 0.1)
        );

    transition: var(--transition);
}

.logo span {
    background: linear-gradient(
        135deg,
        var(--primary-light),
        var(--cyan)
    );

    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.logo:hover {
    transform: translateY(-2px);
    border-color: var(--border-hover);
}

.nav {
    display: flex;
    align-items: center;
    gap: 24px;
}

.nav-link {
    position: relative;

    font-size: 0.88rem;
    font-weight: 600;

    color: var(--text-secondary);

    transition: var(--transition);
}

.nav-link::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -9px;

    width: 0;
    height: 2px;

    background: linear-gradient(
        90deg,
        var(--primary),
        var(--cyan)
    );

    transition: width var(--transition);
}

.nav-link:hover,
.nav-link.active {
    color: var(--text);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.theme-toggle,
.menu-toggle,
.language-btn {
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);

    min-height: 40px;
    border-radius: 10px;

    transition: var(--transition);
}

.theme-toggle,
.menu-toggle {
    width: 40px;
}

.theme-toggle:hover,
.menu-toggle:hover,
.language-btn:hover {
    border-color: var(--border-hover);
    transform: translateY(-2px);
}

.language-wrapper {
    position: relative;
}

.language-btn {
    padding: 0 12px;

    display: flex;
    align-items: center;
    gap: 7px;

    font-size: 0.78rem;
    font-weight: 700;
}

.language-btn i:last-child {
    font-size: 0.65rem;
}

.language-menu {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;

    min-width: 150px;
    padding: 8px;

    background: var(--card-solid);
    border: 1px solid var(--border);
    border-radius: 12px;

    box-shadow: var(--shadow);

    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);

    transition: var(--transition);
}

.language-menu.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.language-menu button {
    width: 100%;
    padding: 10px 12px;

    border: 0;
    border-radius: 8px;

    background: transparent;
    color: var(--text-secondary);

    text-align: left;
    font-weight: 600;
}

.language-menu button:hover {
    background: rgba(124, 92, 255, 0.1);
    color: var(--text);
}

.nav-cv {
    min-height: 40px;
    padding: 0 14px;

    display: flex;
    align-items: center;
    gap: 7px;

    border-radius: 10px;

    background: linear-gradient(
        135deg,
        var(--primary),
        #6246ea
    );

    color: white;

    font-size: 0.8rem;
    font-weight: 700;

    transition: var(--transition);
}

.nav-cv:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(124, 92, 255, 0.3);
}

.menu-toggle {
    display: none;
}


/* =========================================================
   HERO
   ========================================================= */

.hero {
    min-height: 100vh;
    padding-top: 160px;

    display: flex;
    align-items: center;

    overflow: hidden;
}

.hero-grid {
    position: absolute;
    inset: 0;

    background-image:
        linear-gradient(
            rgba(255,255,255,0.025) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,255,255,0.025) 1px,
            transparent 1px
        );

    background-size: 55px 55px;

    mask-image: linear-gradient(
        to bottom,
        black,
        transparent
    );
}

.hero::before {
    content: "";

    position: absolute;
    width: 500px;
    height: 500px;

    top: 100px;
    left: -200px;

    background: rgba(124, 92, 255, 0.16);
    filter: blur(100px);
    border-radius: 50%;
}

.hero::after {
    content: "";

    position: absolute;
    width: 400px;
    height: 400px;

    right: -150px;
    bottom: 50px;

    background: rgba(34, 211, 238, 0.1);
    filter: blur(100px);
    border-radius: 50%;
}

.hero-container {
    position: relative;
    z-index: 2;

    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;

    gap: 80px;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 9px;

    padding: 8px 13px;
    margin-bottom: 25px;

    border: 1px solid var(--border);
    border-radius: 100px;

    background: rgba(124, 92, 255, 0.06);

    color: var(--text-secondary);

    font-size: 0.78rem;
    font-weight: 600;
}

.status-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #22c55e;
    box-shadow: 0 0 12px #22c55e;
}

.hero-small {
    margin-bottom: 5px;

    color: var(--primary-light);

    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.2em;
}

.hero h1 {
    font-family: "Space Grotesk", sans-serif;

    font-size: clamp(3.5rem, 8vw, 6.5rem);
    line-height: 0.95;
    letter-spacing: -0.06em;

    margin-bottom: 20px;
}

.hero h1 span {
    display: block;

    background: linear-gradient(
        135deg,
        var(--primary-light),
        var(--cyan)
    );

    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero h2 {
    font-size: clamp(1.2rem, 2vw, 1.7rem);
    color: var(--text-secondary);

    margin-bottom: 22px;
}

.hero-description {
    max-width: 650px;

    color: var(--text-secondary);

    font-size: 1.05rem;
}

.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;

    margin-top: 32px;
}

.btn {
    min-height: 50px;
    padding: 0 20px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;

    border-radius: 11px;

    border: 1px solid transparent;

    font-size: 0.88rem;
    font-weight: 700;

    transition: var(--transition);
}

.btn-primary {
    background: linear-gradient(
        135deg,
        var(--primary),
        #6246ea
    );

    color: white;

    box-shadow: 0 10px 30px rgba(124, 92, 255, 0.2);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgba(124, 92, 255, 0.35);
}

.btn-outline {
    border-color: var(--border);
    background: var(--card);
    color: var(--text);
}

.btn-outline:hover {
    border-color: var(--border-hover);
    transform: translateY(-3px);
}

.social-links {
    display: flex;
    gap: 10px;
    margin-top: 28px;
}

.social-links a,
.footer-social a {
    width: 40px;
    height: 40px;

    display: grid;
    place-items: center;

    border: 1px solid var(--border);
    border-radius: 10px;

    color: var(--text-secondary);

    transition: var(--transition);
}

.social-links a:hover,
.footer-social a:hover {
    color: white;

    background: var(--primary);
    border-color: var(--primary);

    transform: translateY(-3px);
}

.hero-visual {
    display: flex;
    justify-content: center;
}

.code-card {
    width: min(100%, 500px);

    border: 1px solid var(--border);
    border-radius: 18px;

    background: rgba(10, 15, 27, 0.9);

    box-shadow: var(--shadow);

    overflow: hidden;

    transform: perspective(1000px) rotateY(-5deg);
}

.code-header {
    min-height: 48px;

    display: flex;
    align-items: center;
    gap: 14px;

    padding: 0 16px;

    border-bottom: 1px solid rgba(255,255,255,0.08);

    color: #8d98ab;
    font-size: 0.78rem;
}

.window-buttons {
    display: flex;
    gap: 6px;
}

.window-buttons span {
    width: 9px;
    height: 9px;

    border-radius: 50%;

    background: #667085;
}

.code-body {
    padding: 28px;

    color: #d8dee9;

    font-family: "Courier New", monospace;
    font-size: 0.84rem;

    line-height: 2;
}

.code-purple {
    color: #c084fc;
}

.code-blue {
    color: #67e8f9;
}

.code-green {
    color: #86efac;
}

.indent {
    padding-left: 22px;
}

.indent-2 {
    padding-left: 44px;
}


/* =========================================================
   SECTION HEADINGS
   ========================================================= */

.section-heading {
    display: flex;
    gap: 22px;

    margin-bottom: 55px;
}

.section-number {
    color: var(--primary-light);

    font-family: "Space Grotesk", sans-serif;
    font-weight: 700;

    padding-top: 5px;
}

.section-label {
    margin-bottom: 8px;

    color: var(--primary-light);

    font-size: 0.75rem;
    font-weight: 800;

    letter-spacing: 0.18em;
}

.section-heading h2 {
    max-width: 700px;

    font-family: "Space Grotesk", sans-serif;

    font-size: clamp(2rem, 4vw, 3.2rem);
    line-height: 1.1;

    letter-spacing: -0.04em;
}


/* =========================================================
   ABOUT
   ========================================================= */

.about-grid {
    display: grid;
    grid-template-columns: 0.75fr 1.25fr;

    gap: 60px;
    align-items: center;
}

.profile-card {
    padding: 32px;

    text-align: center;

    border: 1px solid var(--border);
    border-radius: var(--radius-lg);

    background: var(--card);

    box-shadow: var(--shadow);
}

.profile-image-wrapper {
    width: 180px;
    height: 180px;

    margin: 0 auto 22px;

    padding: 5px;

    border-radius: 50%;

    background: linear-gradient(
        135deg,
        var(--primary),
        var(--cyan)
    );
}

.profile-image {
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 50%;

    background: var(--bg-secondary);
}

.profile-card h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.35rem;
}

.profile-card > p {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.profile-line {
    width: 50px;
    height: 2px;

    margin: 20px auto;

    background: linear-gradient(
        90deg,
        var(--primary),
        var(--cyan)
    );
}

.profile-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.profile-stats div {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.profile-stats strong {
    color: var(--text);
}

.profile-stats span {
    color: var(--muted);
    font-size: 0.7rem;
}

.about-content {
    color: var(--text-secondary);
}

.about-content .lead {
    color: var(--text);

    font-size: 1.25rem;
    font-weight: 500;

    margin-bottom: 20px;
}

.about-content p + p {
    margin-top: 14px;
}

.about-highlights {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 12px;

    margin-top: 28px;
}

.about-highlights div {
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 13px;

    border: 1px solid var(--border);
    border-radius: 10px;

    background: var(--card);

    font-size: 0.82rem;
    font-weight: 600;
}

.about-highlights i {
    color: var(--primary-light);
}


/* =========================================================
   SKILLS
   ========================================================= */

.skills-section {
    background: var(--bg-secondary);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.skill-card {
    padding: 27px;

    border: 1px solid var(--border);
    border-radius: var(--radius-md);

    background: var(--card);

    transition: var(--transition);
}

.skill-card:hover {
    transform: translateY(-7px);
    border-color: var(--border-hover);
    box-shadow: var(--shadow);
}

.skill-icon {
    width: 48px;
    height: 48px;

    display: grid;
    place-items: center;

    margin-bottom: 20px;

    border-radius: 12px;

    background: rgba(124, 92, 255, 0.1);

    color: var(--primary-light);

    font-size: 1.15rem;
}

.skill-card h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.1rem;

    margin-bottom: 10px;
}

.skill-card p {
    color: var(--text-secondary);
    font-size: 0.82rem;
}

.skill-tags,
.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;

    margin-top: 18px;
}

.skill-tags span,
.project-tech span {
    padding: 5px 8px;

    border-radius: 6px;

    background: rgba(124, 92, 255, 0.09);

    color: var(--text-secondary);

    font-size: 0.67rem;
    font-weight: 700;
}


/* =========================================================
   PROJECTS
   ========================================================= */

.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.project-card {
    position: relative;

    padding: 32px;

    min-height: 380px;

    display: flex;
    flex-direction: column;

    border: 1px solid var(--border);
    border-radius: var(--radius-md);

    background: var(--card);

    overflow: hidden;

    transition: var(--transition);
}

.project-card::before {
    content: "";

    position: absolute;

    top: -100px;
    right: -100px;

    width: 220px;
    height: 220px;

    border-radius: 50%;

    background: rgba(124, 92, 255, 0.1);

    filter: blur(20px);
}

.project-card:hover {
    transform: translateY(-7px);
    border-color: var(--border-hover);
    box-shadow: var(--shadow);
}

.project-number {
    position: absolute;

    top: 25px;
    right: 25px;

    color: var(--muted);

    font-family: "Space Grotesk", sans-serif;
    font-size: 0.8rem;
}

.project-icon {
    width: 52px;
    height: 52px;

    display: grid;
    place-items: center;

    margin-bottom: 25px;

    border-radius: 14px;

    background: rgba(34, 211, 238, 0.08);

    color: var(--cyan);
}

.project-card h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.25rem;

    margin-bottom: 12px;
}

.project-card p {
    color: var(--text-secondary);
    font-size: 0.85rem;
}

.project-link {
    margin-top: auto;
    padding-top: 24px;

    display: inline-flex;
    align-items: center;
    gap: 8px;

    color: var(--primary-light);

    font-size: 0.8rem;
    font-weight: 700;

    transition: var(--transition);
}

.project-link:hover {
    gap: 12px;
}

.disabled-link {
    opacity: 0.55;
    cursor: default;
}

.disabled-link:hover {
    gap: 8px;
}


/* =========================================================
   EDUCATION
   ========================================================= */

.education-section {
    background: var(--bg-secondary);
}

.timeline {
    position: relative;

    max-width: 900px;

    margin: 0 auto;
}

.timeline::before {
    content: "";

    position: absolute;

    left: 130px;
    top: 0;
    bottom: 0;

    width: 1px;

    background: var(--border);
}

.timeline-item {
    position: relative;

    display: grid;
    grid-template-columns: 100px 1fr;

    gap: 60px;

    padding-bottom: 55px;
}

.timeline-item:last-child {
    padding-bottom: 0;
}

.timeline-dot {
    position: absolute;

    left: 124px;
    top: 6px;

    width: 13px;
    height: 13px;

    border: 3px solid var(--bg-secondary);
    border-radius: 50%;

    background: var(--primary);

    box-shadow: 0 0 0 4px rgba(124, 92, 255, 0.15);
}

.timeline-date {
    text-align: right;

    color: var(--primary-light);

    font-size: 0.78rem;
    font-weight: 700;
}

.timeline-content {
    padding: 28px;

    border: 1px solid var(--border);
    border-radius: var(--radius-md);

    background: var(--card);
}

.timeline-content h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.25rem;
}

.timeline-place {
    color: var(--primary-light);
    font-size: 0.82rem;
    font-weight: 600;

    margin: 4px 0 12px;
}

.timeline-content p:last-child {
    color: var(--text-secondary);
    font-size: 0.85rem;
}


/* =========================================================
   EXPERIENCE
   ========================================================= */

.experience-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.experience-card {
    display: grid;
    grid-template-columns: 55px 1fr;

    gap: 22px;

    padding: 30px;

    border: 1px solid var(--border);
    border-radius: var(--radius-md);

    background: var(--card);

    transition: var(--transition);
}

.experience-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-5px);
}

.experience-icon {
    width: 50px;
    height: 50px;

    display: grid;
    place-items: center;

    border-radius: 12px;

    background: rgba(124, 92, 255, 0.1);

    color: var(--primary-light);
}

.experience-type {
    color: var(--primary-light);

    font-size: 0.68rem;
    font-weight: 800;

    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.experience-card h3 {
    margin: 6px 0 10px;

    font-family: "Space Grotesk", sans-serif;
}

.experience-card p {
    color: var(--text-secondary);
    font-size: 0.83rem;
}

.experience-card ul {
    margin-top: 16px;
    padding-left: 17px;

    color: var(--text-secondary);

    font-size: 0.8rem;
}


/* =========================================================
   CONTACT
   ========================================================= */

.contact-section {
    background: var(--bg-secondary);
}

.contact-grid {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;

    gap: 70px;

    align-items: start;
}

.contact-intro {
    max-width: 480px;

    color: var(--text-secondary);
    font-size: 1rem;

    margin-bottom: 35px;
}

.contact-items {
    display: grid;
    gap: 12px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 14px;

    padding: 15px;

    border: 1px solid var(--border);
    border-radius: 12px;

    background: var(--card);

    transition: var(--transition);
}

a.contact-item:hover {
    transform: translateX(5px);
    border-color: var(--border-hover);
}

.contact-icon {
    width: 42px;
    height: 42px;

    flex-shrink: 0;

    display: grid;
    place-items: center;

    border-radius: 10px;

    background: rgba(124, 92, 255, 0.1);

    color: var(--primary-light);
}

.contact-item span:last-child {
    display: flex;
    flex-direction: column;
}

.contact-item small {
    color: var(--muted);
    font-size: 0.68rem;
}

.contact-item strong {
    font-size: 0.8rem;
}

.contact-form-wrapper {
    padding: 32px;

    border: 1px solid var(--border);
    border-radius: var(--radius-lg);

    background: var(--card);

    box-shadow: var(--shadow);
}

.contact-form {
    display: grid;
    gap: 17px;
}

.form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.form-group {
    display: grid;
    gap: 7px;
}

.form-group label {
    color: var(--text-secondary);

    font-size: 0.76rem;
    font-weight: 700;
}

.form-group input,
.form-group textarea {
    width: 100%;

    padding: 13px 14px;

    border: 1px solid var(--border);
    border-radius: 10px;

    outline: none;

    background: rgba(255,255,255,0.025);
    color: var(--text);

    transition: var(--transition);

    resize: vertical;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: var(--muted);
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(124, 92, 255, 0.1);
}

.form-submit {
    width: 100%;
    border: 0;

    margin-top: 4px;
}

.form-submit:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none;
}

.button-spinner {
    display: none;

    width: 16px;
    height: 16px;

    border: 2px solid rgba(255,255,255,0.35);
    border-top-color: white;

    border-radius: 50%;

    animation: spin 0.8s linear infinite;
}

.form-submit.loading .button-spinner {
    display: inline-block;
}

.form-submit.loading #submitIcon {
    display: none;
}

.form-status {
    display: none;

    padding: 12px 14px;

    border-radius: 10px;

    font-size: 0.8rem;
    font-weight: 600;
}

.form-status.success {
    display: block;

    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.25);
    color: #4ade80;
}

.form-status.error {
    display: block;

    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.25);
    color: #f87171;
}

/*
   Honeypot field.
   Do NOT use display:none.
*/
.hidden-honeypot {
    position: absolute !important;

    width: 1px !important;
    height: 1px !important;

    padding: 0 !important;
    margin: -1px !important;

    overflow: hidden !important;

    clip: rect(0 0 0 0) !important;
    white-space: nowrap !important;

    border: 0 !important;
}


/* =========================================================
   CV CTA
   ========================================================= */

.cv-cta {
    padding: 75px 0;

    background:
        linear-gradient(
            135deg,
            rgba(124, 92, 255, 0.18),
            rgba(34, 211, 238, 0.08)
        );

    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.cv-cta-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.cv-cta h2 {
    max-width: 600px;

    font-family: "Space Grotesk", sans-serif;

    font-size: clamp(1.7rem, 4vw, 2.7rem);
    line-height: 1.15;
}

.btn-light {
    background: white;
    color: #111827;

    flex-shrink: 0;
}

.btn-light:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}


/* =========================================================
   FOOTER
   ========================================================= */

.footer {
    padding: 45px 0;

    background: var(--bg);
}

.footer-inner {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 25px;
    align-items: center;
}

.footer-logo {
    margin-bottom: 12px;
}

.footer p {
    max-width: 480px;

    color: var(--muted);
    font-size: 0.78rem;
}

.footer-social {
    display: flex;
    gap: 8px;
}

.copyright {
    grid-column: 1 / -1;

    padding-top: 25px;

    border-top: 1px solid var(--border);

    text-align: center;
}


/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

.scroll-progress {
    position: fixed;

    top: 0;
    left: 0;

    width: 0;
    height: 3px;

    z-index: 2000;

    background: linear-gradient(
        90deg,
        var(--primary),
        var(--cyan)
    );
}


/* =========================================================
   BACK TO TOP
   ========================================================= */

.back-to-top {
    position: fixed;

    right: 25px;
    bottom: 25px;

    width: 44px;
    height: 44px;

    display: grid;
    place-items: center;

    border: 1px solid var(--border);
    border-radius: 12px;

    background: var(--card-solid);
    color: var(--text);

    box-shadow: var(--shadow);

    opacity: 0;
    visibility: hidden;

    transform: translateY(10px);

    transition: var(--transition);

    z-index: 900;
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.back-to-top:hover {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}


/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

.reveal {
    opacity: 0;
    transform: translateY(25px);

    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}


/* =========================================================
   ANIMATION
   ========================================================= */

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 1050px) {

    .nav {
        gap: 14px;
    }

    .nav-link {
        font-size: 0.78rem;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-container {
        gap: 40px;
    }

}


@media (max-width: 850px) {

    .nav {
        position: fixed;

        top: 78px;
        left: 4%;

        width: 92%;

        padding: 20px;

        display: flex;
        flex-direction: column;
        align-items: stretch;

        border: 1px solid var(--border);
        border-radius: 16px;

        background: var(--card-solid);

        box-shadow: var(--shadow);

        opacity: 0;
        visibility: hidden;

        transform: translateY(-15px);

        transition: var(--transition);
    }

    .nav.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .nav-link {
        padding: 10px;
    }

    .nav-link::after {
        display: none;
    }

    .menu-toggle {
        display: grid;
        place-items: center;
    }

    .hero-container {
        grid-template-columns: 1fr;
    }

    .hero-content {
        text-align: center;
    }

    .hero-description {
        margin: auto;
    }

    .hero-buttons,
    .social-links {
        justify-content: center;
    }

    .hero-visual {
        margin-top: 20px;
    }

    .code-card {
        transform: none;
    }

    .about-grid,
    .contact-grid {
        grid-template-columns: 1fr;
    }

    .projects-grid {
        grid-template-columns: 1fr 1fr;
    }

    .experience-grid {
        grid-template-columns: 1fr;
    }

}


@media (max-width: 620px) {

    .section {
        padding: 80px 0;
    }

    .nav-cv {
        display: none;
    }

    .hero {
        padding-top: 130px;
    }

    .hero h1 {
        font-size: 3.4rem;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .hero-buttons .btn {
        width: 100%;
    }

    .section-heading {
        gap: 12px;
    }

    .section-heading h2 {
        font-size: 2rem;
    }

    .skills-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }

    .about-highlights {
        grid-template-columns: 1fr;
    }

    .profile-stats {
        gap: 5px;
    }

    .timeline::before {
        left: 7px;
    }

    .timeline-item {
        display: block;

        padding-left: 30px;
    }

    .timeline-dot {
        left: 1px;
    }

    .timeline-date {
        text-align: left;
        margin-bottom: 10px;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .contact-form-wrapper {
        padding: 22px;
    }

    .cv-cta-inner {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer-inner {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .footer-social {
        justify-content: center;
    }

    .footer-logo {
        margin-left: auto;
        margin-right: auto;
    }

    .footer p {
        margin-left: auto;
        margin-right: auto;
    }

}
