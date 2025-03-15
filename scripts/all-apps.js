// scripts/all-apps.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("all-apps.js loaded at:", new Date().toISOString());

  // Hamburger Menu Functionality (same as index.html)
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    console.log("Hamburger and nav menu found, setting up event listeners");
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  } else {
    console.error("Hamburger or nav menu not found:", { hamburger, navMenu });
  }

  // Function to populate applications by category
  function populateApplicationsByCategory() {
    console.log("Starting populateApplicationsByCategory");

    // Check if applications data is available
    if (!window.applications) {
      console.error("window.applications is not defined. Ensure applications.js is loaded.");
      return false;
    }
    if (!Array.isArray(window.applications)) {
      console.error("window.applications is not an array:", window.applications);
      return false;
    }
    if (window.applications.length === 0) {
      console.warn("window.applications is empty");
      return false;
    }
    console.log("Applications data confirmed:", window.applications.length, "items");

    // Check if required functions are available
    if (typeof createAppCard !== "function") {
      console.error("createAppCard function is not defined. Ensure utils.js is loaded.");
      return false;
    }
    if (typeof openModal !== "function") {
      console.error("openModal function is not defined. Ensure utils.js is loaded.");
      return false;
    }

    // Check if the wrapper element exists
    const allAppsWrapper = document.querySelector('#all-apps-by-category');
    if (!allAppsWrapper) {
      console.error("All apps wrapper not found! Check if #all-apps-by-category exists in the DOM.");
      return false;
    }
    console.log("All apps wrapper found:", allAppsWrapper);

    // Group applications by category
    const appsByCategory = {};
    window.applications.forEach(app => {
      const category = app.category || "Uncategorized";
      if (!appsByCategory[category]) {
        appsByCategory[category] = [];
      }
      appsByCategory[category].push(app);
    });
    console.log("Apps grouped by category:", appsByCategory);

    // Sort categories alphabetically
    const sortedCategories = Object.keys(appsByCategory).sort();
    console.log("Sorted categories:", sortedCategories);

    // Create a section for each category
    sortedCategories.forEach(category => {
      console.log("Creating section for category:", category);
      const categorySection = document.createElement("div");
      categorySection.className = "app-row-section";

      // Add category title
      const categoryTitle = document.createElement("div");
      categoryTitle.className = "app-row-title";
      categoryTitle.textContent = category;
      categorySection.appendChild(categoryTitle);

      // Add app row
      const appRow = document.createElement("div");
      appRow.className = "app-row";
      const appWrapper = document.createElement("div");
      appWrapper.className = "app-wrapper";

      // Add app cards
      appsByCategory[category].forEach(app => {
        console.log("Creating app card for:", app.name);
        try {
          const appCard = createAppCard(app); // Reuse createAppCard from utils.js
          appWrapper.appendChild(appCard);
        } catch (error) {
          console.error("Error creating app card for:", app.name, error);
        }
      });

      appRow.appendChild(appWrapper);
      categorySection.appendChild(appRow);
      allAppsWrapper.appendChild(categorySection);
    });

    console.log("Finished populating applications by category");
    return true;
  }

  // Retry mechanism to wait for dependencies
  function attemptPopulateApplications(maxRetries = 10, delay = 500) {
    let retries = 0;

    function tryPopulate() {
      if (retries >= maxRetries) {
        console.error("Max retries reached. Could not populate applications. Ensure utils.js is loaded and createAppCard is defined.");
        return;
      }

      console.log(`Attempt ${retries + 1} to populate applications`);
      const success = populateApplicationsByCategory();
      if (!success) {
        retries++;
        setTimeout(tryPopulate, delay);
      }
    }

    tryPopulate();
  }

  // Start the population process with retries
  attemptPopulateApplications();
});