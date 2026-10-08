const pageTitle = document.getElementById("page-title");
const pageContent = document.getElementById("page-content");
const navButtons = document.querySelectorAll(".nav-button");
const homeButton = document.querySelector(".brand");

const pages = {
  home: {
    title: "Welcome, Gamecock!",
    content: `
      <main class="page-layout">
        <section class="hero-card">
          <div class="hero-content">
            <p class="hero-label">WELCOME TO CAROLINA</p>
            <h3>Where Your Story Begins.</h3>
            <p>
              Welcome to the University of South Carolina—home to a vibrant
              community of scholars, leaders, creators, and lifelong Gamecocks.
              Your Carolina experience is waiting for you.
            </p>
          </div>
          <div class="hero-letter">C</div>
        </section>

        <section class="history-section">
          <div class="history-heading">
            <p class="eyebrow">OUR CAROLINA LEGACY</p>
            <h3>A History Worth Celebrating</h3>
          </div>

          <div class="history-grid">
            <article class="history-card">
              <p class="year">1801</p>
              <h4>A Carolina Beginning</h4>
              <p>
                UofSC was founded in 1801 as South Carolina College, making it
                one of the nation’s oldest public universities.
              </p>
            </article>

            <article class="history-card">
              <p class="year">COLUMBIA, SC</p>
              <h4>Rooted in Our Capital City</h4>
              <p>
                Located in the heart of Columbia, Carolina brings together
                students from across South Carolina and around the world.
              </p>
            </article>

            <article class="history-card">
              <p class="year">TODAY</p>
              <h4>Forever to Thee</h4>
              <p>
                Carolina is a place to discover your strengths, build community,
                and create a future you are proud of.
              </p>
            </article>
          </div>
        </section>
      </main>
    `
  },

  majors: {
    title: "Majors and Degrees",
    content: `
      <main class="page-layout">
        <section class="hero-card">
          <div class="hero-content">
            <p class="hero-label">ACADEMIC OPPORTUNITIES</p>
            <h3>Find a path that inspires you.</h3>
            <p>
              At UofSC, there are countless academic paths for you to explore.
              Whether you are interested in business, technology, health,
              education, arts, sciences, or something completely different,
              Carolina has opportunities to help shape your future.
            </p>
          </div>
          <div class="hero-letter">C</div>
        </section>

        <section class="detail-card">
          <h3>Your Future Has Many Possibilities</h3>
          <p>
            College is a time to discover what you love and turn your interests
            into meaningful goals. Explore majors, minors, certificates, and
            degree programs that can help you create an academic journey that
            feels right for you.
          </p>

          <div class="info-grid">
            <div class="info-box">
              <h4>Explore Interests</h4>
              <p>Discover programs connected to the subjects you enjoy most.</p>
            </div>
            <div class="info-box">
              <h4>Plan Ahead</h4>
              <p>Find degrees that can support your future career goals.</p>
            </div>
            <div class="info-box">
              <h4>Make It Yours</h4>
              <p>Build a Carolina experience that is uniquely your own.</p>
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
            <h3>Find your place at Carolina.</h3>
            <p>
              Being a Gamecock is about more than attending class. Student
              organizations offer ways to meet new people, share your passions,
              grow as a leader, and make UofSC feel like home.
            </p>
          </div>
          <div class="hero-letter">C</div>
        </section>

        <section class="detail-card">
          <h3>Get Involved and Make a Difference</h3>
          <p>
            From cultural organizations and academic groups to service,
            recreation, Greek life, and special-interest clubs, there is a
            community for every Gamecock. Get connected and create memories that
            last well beyond your college years.
          </p>

          <div class="info-grid">
            <div class="info-box">
              <h4>Meet New People</h4>
              <p>Connect with other students who share your interests.</p>
            </div>
            <div class="info-box">
              <h4>Grow as a Leader</h4>
              <p>Build confidence through events, projects, and leadership roles.</p>
            </div>
            <div class="info-box">
              <h4>Give Back</h4>
              <p>Find opportunities to positively impact campus and community.</p>
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
            <h3>Fuel your Carolina days.</h3>
            <p>
              From a quick snack between classes to a meal with friends, UofSC
              dining locations make it easy to find something delicious around
              campus whenever you need it.
            </p>
          </div>
          <div class="hero-letter">C</div>
        </section>

        <section class="detail-card">
          <h3>More Than Just a Meal</h3>
          <p>
            Campus dining is a chance to relax, recharge, and spend time with
            other Gamecocks. Explore restaurants, cafés, markets, and dining
            halls across the Carolina campus.
          </p>

          <div class="info-grid">
            <div class="info-box">
              <h4>Convenient Locations</h4>
              <p>Find food options close to your classes and study spaces.</p>
            </div>
            <div class="info-box">
              <h4>Choices for Everyone</h4>
              <p>Explore a variety of meals, drinks, snacks, and dining styles.</p>
            </div>
            <div class="info-box">
              <h4>Connect With Friends</h4>
              <p>Make dining one of your favorite parts of campus life.</p>
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

homeButton.addEventListener("click", () => {
  showPage("home");
});

showPage("home");