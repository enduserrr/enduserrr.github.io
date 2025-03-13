// Group applications by category
const categories = {};
applications.forEach(app => {
  if (!categories[app.category]) categories[app.category] = [];
  categories[app.category].push(app);
});

// Populate category grids
const categoryGrids = document.getElementById("category-grids");
Object.keys(categories).forEach(category => {
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "category-grid";

  const categoryHeader = document.createElement("h3");
  categoryHeader.textContent = category;
  categoryDiv.appendChild(categoryHeader);

  const appGrid = document.createElement("div");
  appGrid.className = "app-grid";

  categories[category].forEach(app => {
    const card = createAppCard(app);
    appGrid.appendChild(card);
  });
  categoryDiv.appendChild(appGrid);
  categoryGrids.appendChild(categoryDiv);
});

function createAppCard(app) {
    const card = document.createElement("div");
    card.className = "app-card";
    card.innerHTML = `
      <img src="${app.image}" alt="${app.name}">
      <h4>${app.name}</h4>
      <p>${app.shortDesc}</p>
    `;
    card.addEventListener("click", () => openModal(app));
    return card;
  }
  
  function openModal(app) {
    // Popup logic here
  }