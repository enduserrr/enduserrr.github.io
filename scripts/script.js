document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // Background gradient for Discover section
 /* const discoverSection = document.querySelector('.discover');
  if (discoverSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          discoverSection.style.background = 'linear-gradient(to bottom, #121317, rgb(21, 18, 23), #121317)';
        } else {
          discoverSection.style.background = '#121317';
        }
      });
    }, { threshold: 0.1 });
    observer.observe(discoverSection);
  }*/

  // Search Bar Functionality (Placeholder)
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const searchResponse = document.getElementById("search-response");

  if (searchBtn && searchInput && searchResponse) {
    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (!query) return;
      searchResponse.textContent = `Search for: "${query}" (Feature coming soon!)`;
      searchInput.value = "";
    });
  }

  // Carousel Functionality (Isolated)
  const track = document.querySelector(".carousel-track");
  if (track) {
    const slides = Array.from(document.querySelectorAll(".carousel-item"));
    const nextButton = document.querySelector(".next-btn");
    const prevButton = document.querySelector(".prev-btn");

    let currentSlideIndex = 0;
    const totalSlides = slides.length;
    const slideInterval = 4000;

    function goToSlide(index) {
      track.style.transform = `translateX(-${index * 100}%)`;
      currentSlideIndex = index;
    }

    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
      goToSlide(currentSlideIndex);
    }

    function prevSlide() {
      currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
      goToSlide(currentSlideIndex);
    }

    if (nextButton) nextButton.addEventListener("click", nextSlide);
    if (prevButton) prevButton.addEventListener("click", prevSlide);

    let autoSlide = setInterval(nextSlide, slideInterval);
    track.addEventListener("mouseenter", () => clearInterval(autoSlide));
    track.addEventListener("mouseleave", () => autoSlide = setInterval(nextSlide, slideInterval));
  }

  // Function to populate applications
  function populateApplications() {
    console.log("Checking window.applications:", window.applications);
    if (!window.applications || !Array.isArray(window.applications)) {
      console.error("Applications data is not available or not an array:", window.applications, "at", new Date().toISOString());
      setTimeout(populateApplications, 100);
      return;
    }
    console.log("Applications data confirmed:", window.applications.length, "items");

    if (typeof createNewAppCard !== "function") {
      console.error("createNewAppCard function is not defined. Ensure utils.js is loaded.");
      return;
    }

    if (!window.featuredApplications) {
      console.warn("featuredApplications not defined, using defaults:", {
        featuredApplications: window.featuredApplications,
      });
    }

    // Populate Featured Applications row (4 apps, no duplication)
    const featuredWrapper = document.querySelector('#featured-row');
    if (featuredWrapper) {
      const featuredApps = window.applications.filter(app => window.featuredApplications.includes(app.name)).slice(0, 4);
      if (featuredApps.length > 0) {
        featuredApps.forEach(app => {
          featuredWrapper.appendChild(createNewAppCard(app));
        });
      } else {
        console.warn("No featured apps found, populating with first 4 apps");
        window.applications.slice(0, 4).forEach(app => {
          featuredWrapper.appendChild(createNewAppCard(app));
        });
      }
    } else {
      console.error("Featured row wrapper not found!");
    }

    // Populate All Applications
    const allWrapper = document.querySelector('#all-row');
    const allAppsRow = document.querySelector('#all-apps-row');
    const extendBtn = document.querySelector('#extend-all-apps');
    if (allWrapper && extendBtn && allAppsRow) {
      let isExtended = false;
      const initialApps = window.applications.slice(0, 4); // Initially show 4

      // Function to collapse the list
      const collapseList = () => {
        while (allWrapper.firstChild) {
          allWrapper.removeChild(allWrapper.firstChild);
        }
        initialApps.forEach(app => {
          allWrapper.appendChild(createNewAppCard(app));
        });
        allAppsRow.classList.remove('expanded');
        extendBtn.textContent = "Show More";
        isExtended = false;
      };

      // Initial population
      collapseList();

      // Logic for extending/collapsing the row
      extendBtn.addEventListener('click', () => {
        if (!isExtended) {
          // Expand: Show all apps
          while (allWrapper.firstChild) {
            allWrapper.removeChild(allWrapper.firstChild);
          }
          window.applications.forEach(app => {
            allWrapper.appendChild(createNewAppCard(app));
          });
          allAppsRow.classList.add('expanded');
          extendBtn.textContent = "Show Less";
          isExtended = true;
        } else {
          // Collapse/shrink: Show only 4 apps
          collapseList();
        }
      });
    } else {
      console.error("All row wrapper or extend button not found!");
    }
  }
  populateApplications();
});