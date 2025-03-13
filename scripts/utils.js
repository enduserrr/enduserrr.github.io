function createNewAppCard(app) {
  const card = document.createElement("div");
  card.className = "app-card";
  card.innerHTML = `
    <img src="${app.image}" alt="${app.name} Preview">
    <h3>${app.name}</h3>
    <p>${app.shortDesc}</p>
    <button class="show-more">Show more</button>
  `;

  // Make the card clickable (link to app site)
  card.addEventListener("click", (e) => {
    e.stopPropagation();
    openModal(app);
  });

  // Prevent button from triggering card event twice
  const showMoreBtn = card.querySelector(".show-more");
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(app);
    });
  } else {
    console.error("Show more button not found in card for app:", app.name);
  }

  return card;
}

/*function createAppCard(app) {
  const card = document.createElement("div");
  card.className = "app-card";
  card.innerHTML = `
    <img src="${app.image}" alt="${app.name} Preview">
    <h4>${app.name}</h4>
    ${app.keywords && app.keywords.length > 0 ? `<div class="keywords">${app.keywords.map(kw => `<span class="keyword" data-keyword="${kw}">${kw}</span>`).join(", ")}</div>` : ""}
    <p>${app.shortDesc}</p>
    <button class="show-more">Show more</button>
  `;
  
  // Make the entire card clickable
  card.addEventListener("click", () => openModal(app));

  // Prevent button from triggering card event twice
  const showMoreBtn = card.querySelector(".show-more");
  showMoreBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openModal(app);
  });

  // Make keywords clickable
  const keywordElements = card.querySelectorAll(".keyword");
  keywordElements.forEach(keyword => {
    keyword.addEventListener("click", (e) => {
      e.stopPropagation();
      const kw = e.target.getAttribute("data-keyword");
      window.location.href = `all-apps.html?keyword=${encodeURIComponent(kw)}`;
    });
  });

  return card;
}*/

function openModal(app) {
  const modal = document.getElementById("app-modal");
  const modalContent = document.querySelector(".modal-content");
  const body = document.body;

  if (!modal || !modalContent) {
    console.error("Modal or modal-content not found in DOM");
    return;
  }

  console.log("Opening modal for app:", app.name);
  console.log("App link:", app.link);

  // Check if app.link is valid
  let url;
  try {
    url = new URL(app.link);
  } catch (e) {
    console.error("Invalid app.link URL:", app.link);
    return;
  }
  const mainUrl = url.hostname.replace(/^www\./i, "");

  // Set modal content
  modalContent.innerHTML = `
    <span class="close-btn">×</span>
    <img id="modal-image" src="${app.image}" alt="${app.name} Preview">
    ${app.keywords && app.keywords.length > 0 ? `<div class="keywords">${app.keywords.map(kw => `<span class="keyword" data-keyword="${kw}">#${kw}</span>`).join(", ")}</div>` : ""}
    <p id="modal-short-desc">${app.shortDesc}</p>
    <div id="modal-links"></div>
    <div class="accordion">
      <button class="accordion-btn">Description</button>
      <div class="accordion-content">
        <p id="modal-description">${app.longDesc}</p>
      </div>
    </div>
  `;

  modal.style.display = "flex";
  body.classList.add("blur-background");

  // Get the modal image
  const modalImage = modalContent.querySelector("#modal-image");
  if (modalImage) {
    // Make the image clickable
    modalImage.addEventListener("click", (e) => {
      console.log("Image clicked, opening:", app.link);
      window.open(app.link, "_blank");
    });

    // Add the Open button
    const openBtn = document.createElement("button");
    openBtn.className = "open-btn";
    openBtn.textContent = "Open";
    openBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("Button clicked, opening:", app.link);
      window.open(app.link, "_blank");
    });
    modalImage.appendChild(openBtn);
    console.log("Open button appended to image, class:", openBtn.className, "text:", openBtn.textContent); // Enhanced debug log
    console.log("Modal image dimensions:", modalImage.offsetWidth, "x", modalImage.offsetHeight); // Check image size
  } else {
    console.error("Modal image not found");
  }

  // Close modal on button click
  const closeBtn = modalContent.querySelector(".close-btn");
  closeBtn.onclick = () => {
    console.log("Closing modal");
    modal.style.display = "none";
    body.classList.remove("blur-background");
  };

  // Close modal on outside click
  window.onclick = (event) => {
    if (event.target === modal) {
      console.log("Closing modal via outside click");
      modal.style.display = "none";
      body.classList.remove("blur-background");
    }
  };

  // Accordion functionality
  const accordionBtns = modalContent.querySelectorAll(".accordion-btn");
  accordionBtns.forEach(btn => {
    btn.onclick = () => {
      const content = btn.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    };
  });

  // Populate social links
  const linksDiv = modalContent.querySelector("#modal-links");
  for (const [platform, url] of Object.entries(app.social)) {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = platform;
    link.target = "_blank";
    linksDiv.appendChild(link);
  }

  // Make keywords clickable in modal
  const keywordElements = modalContent.querySelectorAll(".keyword");
  keywordElements.forEach(keyword => {
    keyword.addEventListener("click", (e) => {
      e.stopPropagation();
      const kw = e.target.getAttribute("data-keyword");
      window.location.href = `all-apps.html?keyword=${encodeURIComponent(kw)}`;
    });
  });
}