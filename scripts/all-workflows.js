document.addEventListener("DOMContentLoaded", () => {
    const workflowsGrid = document.getElementById("workflows-grid");
    workflows.forEach(workflow => {
      const card = document.createElement("div");
      card.className = "app-card"; // Reuse app-card styling
      card.innerHTML = `
        <img src="${workflow.image}" alt="${workflow.name} Preview">
        <h4>${workflow.name}</h4>
        <p>${workflow.shortDesc}</p>
        <a href="${workflow.link}" class="explore-workflow-btn">Explore the Workflow</a>
      `;
      workflowsGrid.appendChild(card);
    });
  });