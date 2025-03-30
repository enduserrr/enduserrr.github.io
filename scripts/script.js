document.addEventListener("DOMContentLoaded", () => {
  // Header Scroll Functionality
  const header = document.querySelector('.header');
  let lastScroll = 0;
  let scrollTimeout;

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // Clear the timeout if it exists
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Show header if scrolling up or at the top
      if (currentScroll <= 0 || currentScroll < lastScroll) {
        header.classList.remove('hidden');
      } else {
        // Hide header if scrolling down
        header.classList.add('hidden');
      }

      // Set a timeout to show header after scrolling stops
      scrollTimeout = setTimeout(() => {
        header.classList.remove('hidden');
      }, 150);

      lastScroll = currentScroll;
    });
  }

  // Version Toggle Functionality
  const versionToggle = document.getElementById("version-toggle");
  const body = document.body;

  if (versionToggle) {
    // Check if there's a saved preference
    const savedVersion = localStorage.getItem("siteVersion");
    if (savedVersion === "mobile") {
      body.classList.add("mobile-version");
      versionToggle.classList.add("mobile");
      versionToggle.querySelector(".toggle-text").textContent = "Desktop";
    }

    versionToggle.addEventListener("click", () => {
      body.classList.toggle("mobile-version");
      versionToggle.classList.toggle("mobile");
      const isMobile = body.classList.contains("mobile-version");
      versionToggle.querySelector(".toggle-text").textContent = isMobile ? "Desktop" : "Mobile";
      
      // Save preference
      localStorage.setItem("siteVersion", isMobile ? "mobile" : "desktop");
    });
  }

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
        extendBtn.textContent = "MORE";
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
          extendBtn.textContent = "LESS";
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
  function populateExampleWorkflow() {
    console.log("Starting populateExampleWorkflow");
    if (!window.applications || !Array.isArray(window.applications)) {
      console.error("window.applications is not available or not an array:", window.applications);
      return;
    }

    const workflowSteps = document.querySelector('#workflow-steps');
    if (!workflowSteps) {
      console.error("Workflow steps container not found! Check if #workflow-steps exists in the DOM.");
      return;
    }

    // Select specific apps: Chutes, Gradients, and Nineteen
    const exampleApps = window.applications.filter(app => 
      ["Chutes", "Gradients", "Nineteen"].includes(app.name)
    );

    if (exampleApps.length !== 3) {
      console.error("Could not find all required apps. Found:", exampleApps.length);
      return;
    }

    exampleApps.forEach((app, index) => {
      const step = document.createElement("div");
      step.className = "workflow-step";

      // Create simplified app card (only image and header)
      const appCard = document.createElement("div");
      appCard.className = "app-card";
      appCard.innerHTML = `
        <img src="${app.image}" alt="${app.name} Preview">
        <h4>${app.name}</h4>
      `;

      // Make the card clickable
      appCard.addEventListener("click", () => openModal(app));

      step.appendChild(appCard);
      workflowSteps.appendChild(step);
    });

    console.log("Finished populating example workflow with Chutes, Gradients, and Nineteen");
  }

  // Call existing functions
  populateApplications();
  // ... (other existing function calls, e.g., FAQ functionality) ...

  // Call new function
  populateExampleWorkflow();
  populateApplications();
  
  // FAQ Accordion Functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    const header = question.querySelector('.question-header');
    
    header.addEventListener('click', () => {
      // Close all other questions first
      faqQuestions.forEach(q => {
        if (q !== question && q.classList.contains('active')) {
          q.classList.remove('active');
        }
      });
      
      // Toggle the clicked question
      question.classList.toggle('active');
    });
  });
});