const pageTitle = document.getElementById("page-title");
const pageContent = document.getElementById("page-content");
const navButtons = document.querySelectorAll(".nav-button");

const pages = {
  majors: {
    title: "Majors and Degrees",
    content: `
      <main class="page-layout">
        <section class="hero-card">
          <div class="hero-content">
            <p class="hero-label">ACADEMIC OPPORTUNITIES</p>
            <h3>Find the path that is right for you.</h3>
            <p>
              At the University of South Carolina, your education can lead in
              countless directions. Explore a wide range of majors, minors,
              certificates, and degree programs designed to help you turn your
              interests into a future you are proud of.
            </p>
          </div>
          <div class="hero-letter">C</div>
        </section>

        <section class="detail-card">
          <h3>Build Your Carolina Journey</h3>
          <p>
            Whether you already know your dream career or are still exploring
            what inspires you, UofSC offers academic programs that support your
            goals. Discover possibilities across business, technology, health,
            arts, sciences, education, and much more.
          </p>

          <div class="info-grid">
            <div class="info-box">
              <h4>Explore Interests</h4>
              <p>Learn about programs connected to what you enjoy studying most.</p>
            </div>
            <div class="info-box">
              <h4>Plan Your Future</h4>
              <p>Find degree options that can prepare you for meaningful careers.</p>
            </div>
            <div class="info-box">
              <h4>Grow at UofSC</h4>
              <p>Create an academic experience that is uniquely your own.</p>
            </div>
          </div>

          <a class="resource-link"
            href="https://sc.edu/study/majors_and_degrees/index.php"
            target="_blank"
            rel="noopener noreferrer">
            Explore UofSC Majors and Degrees →
          </a>
        </section>
      </main>
    `
  },

  organizations: {
    title: "Organizations",
    content: `
      <main class="page-layout">
        <section class="hero-card">
          <div class="hero-content">
            <p class="hero-label">STUDENT LIFE & COMMUNITY</p>
            <h3>Find your people at Carolina.</h3>
            <p>
              Campus is about more than classes. Student organizations are a
              great way to meet new people, develop leadership skills, serve
              your community, and make memories that will last long after graduation.
            </p>
          </div>
          <div class="hero-letter">C</div>
        </section>

        <section class="detail-card">
          <h3>Get Involved. Stay Connected.</h3>
          <p>
            From academic groups and cultural organizations to service,
            recreation, Greek life, and special-interest clubs, there is a place
            for every Gamecock to belong. Joining an organization can make UofSC
            feel like home.
          </p>

          <div class="info-grid">
            <div class="info-box">
              <h4>Meet New Friends</h4>
              <p>Connect with students who share your interests and passions.</p>
            </div>
            <div class="info-box">
              <h4>Develop Leadership</h4>
              <p>Build confidence through hands-on experiences and campus roles.</p>
            </div>
            <div class="info-box">
              <h4>Make an Impact</h4>
              <p>Give back to the campus and Columbia communities.</p>
            </div>
          </div>

          <a class="resource-link"
            href="https://sc.edu/experience/clubs-organizations/"
            target="_blank"
            rel="noopener noreferrer">
            Explore UofSC Organizations →
          </a>
        </section>
      </main>
    `
  },

  dining: {
    title: "Dining Halls",
    content: `
      <main class="page-layout">
        <section class="hero-card">
          <div class="hero-content">
            <p class="hero-label">DINING AT CAROLINA</p>
            <h3>Fuel your day, your way.</h3>
            <p>
              From a quick coffee between classes to a meal with friends,
              Carolina Dining offers convenient places to eat throughout campus.
              Discover the dining locations that fit your schedule and your cravings.
            </p>
          </div>
          <div class="hero-letter">C</div>
        </section>

        <section class="detail-card">
          <h3>Eat, Connect, and Recharge</h3>
          <p>
            Dining spaces are some of the best places to take a break, catch up
            with friends, and enjoy campus life. UofSC offers a variety of
            restaurants, markets, cafés, and dining halls for every Gamecock.
          </p>

          <div class="info-grid">
            <div class="info-box">
              <h4>Campus Convenience</h4>
              <p>Find locations close to your classes and favorite study spots.</p>
            </div>
            <div class="info-box">
              <h4>Something for Everyone</h4>
              <p>Explore a variety of meals, snacks, drinks, and dining options.</p>
            </div>
            <div class="info-box">
              <h4>More Than a Meal</h4>
              <p>Make dining part of your everyday Carolina experience.</p>
            </div>
          </div>

          <a class="resource-link"
            href="https://sc.edu/about/offices_and_divisions/dining_services/restaurants/"
            target="_blank"
            rel="noopener noreferrer">
            View UofSC Dining Locations →
          </a>
        </section>
      </main>
    `
  }
};

function showPage(pageName) {
  const selectedPage = pages[pageName];

  pageTitle.textContent = selectedPage.title;
  pageContent.innerHTML = selectedPage.content;

  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageName);
  });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });
});

showPage("majors");