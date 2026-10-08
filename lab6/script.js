const pageTitle = document.getElementById("page-title");
const pageContent = document.getElementById("page-content");
const buttons = document.querySelectorAll(".nav-button");

const pages = {
  schedule: {
    title: "Class Schedule",
    content: `
      <section class="hero-card">
        <h3>Your Academic Dashboard</h3>
        <p>Stay organized, keep up with your coursework, and make every semester count.</p>
      </section>

      <div class="card-grid">
        <article class="info-card">
          <h3>Monday & Wednesday</h3>

          <div class="class-item">
            <p class="class-title">CSCE 145 — Algorithmic Design I</p>
            <p class="class-details">9:40 AM – 10:55 AM · Swearingen Engineering Center</p>
          </div>

          <div class="class-item">
            <p class="class-title">ENGL 101 — Critical Reading & Composition</p>
            <p class="class-details">1:15 PM – 2:30 PM · Humanities Building</p>
          </div>
        </article>

        <article class="info-card">
          <h3>Tuesday & Thursday</h3>

          <div class="class-item">
            <p class="class-title">MATH 142 — Calculus II</p>
            <p class="class-details">11:40 AM – 12:55 PM · LeConte College</p>
          </div>

          <div class="class-item">
            <p class="class-title">STAT 201 — Elementary Statistics</p>
            <p class="class-details">2:50 PM – 4:05 PM · Close-Hipp Building</p>
          </div>
        </article>
      </div>
    `
  },

  skills: {
    title: "Experiences/Skills",
    content: `
      <section class="hero-card">
        <h3>Building Your Future</h3>
        <p>Highlight the experiences, strengths, and skills that make you stand out.</p>
      </section>

      <div class="card-grid">
        <article class="info-card">
          <h3>Professional Experience</h3>

          <div class="skill-item">
            <p class="class-title">Student Organization Member</p>
            <p class="class-details">Collaborated with peers, attended events, and developed leadership experience.</p>
          </div>

          <div class="skill-item">
            <p class="class-title">Academic Projects</p>
            <p class="class-details">Created class projects using problem-solving, research, and presentation skills.</p>
          </div>
        </article>

        <article class="info-card">
          <h3>Core Skills</h3>
          <span class="tag">HTML</span>
          <span class="tag">CSS</span>
          <span class="tag">JavaScript</span>
          <span class="tag">Communication</span>
          <span class="tag">Teamwork</span>
          <span class="tag">Leadership</span>
          <span class="tag">Problem Solving</span>
          <span class="tag">Time Management</span>
        </article>
      </div>
    `
  },

  about: {
    title: "About Me",
    content: `
      <section class="about-card">
        <h3>Hello, I’m Your Name!</h3>
        <p>
          I am a motivated student focused on growing academically, professionally,
          and personally. I enjoy learning new skills, connecting with others, and
          taking on opportunities that challenge me to become the best version of myself.
        </p>
        <p>
          This student portal is a space where I can keep track of my academic
          schedule, share my experiences, and showcase the skills I am developing
          throughout my college journey.
        </p>
      </section>
    `
  }
};

function showPage(pageName) {
  const selectedPage = pages[pageName];

  pageTitle.textContent = selectedPage.title;
  pageContent.innerHTML = selectedPage.content;

  buttons.forEach((button) => {
    button.classList.remove("active");

    if (button.dataset.page === pageName) {
      button.classList.add("active");
    }
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });
});

showPage("schedule");