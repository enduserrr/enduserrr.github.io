// Example list of Bittensor applications.
// You can add/remove items or categorize them later.
const subnets = [
    { name: "SN1 Apex", link: "https://app.macrocosmos.ai/apex/chat" },
    { name: "SN4 Targon", link: "https://sybil.com" },
    { name: "SN6 Infinite Games", link: "https://aion5100.ai" },
    { name: "SN10 Sturdy", link: "https://v2.sturdy.finance/overview" },
    { name: "SN13 Dataverse", link: "https://app.macrocosmos.ai/gravity/tasks" },
    { name: "SN17 Three Gen", link: "https://404.xyz/app" },
    { name: "SN18 Cortex", link: "https://app.corcel.io" },
    { name: "SN19 Inference", link: "https://nineteen.ai/app" },
    { name: "SN19 Inference Alt", link: "https://glider.so" },
    { name: "SN21 Omega Any-Any", link: "https://sn21.ai/chat" },
    { name: "SN22 Desearch", link: "https://desearch.ai" },
    { name: "SN23 SocialTensor", link: "https://makeitaquote.com" },
    { name: "SN32 It's AI", link: "https://its-ai.org/#apps" },
    { name: "SN34 Bitmind", link: "https://bitmind.ai/apps" },
    { name: "SN40 Data Chunking", link: "https://beta.vectorchat.ai" },
    { name: "SN47 Condenses AI", link: "https://condenses.ai/#playground" },
    { name: "SN48 NextPlace AI", link: "https://nextplace.ai/productPortal" },
    { name: "SN52 Tensorplex Dojo", link: "https://dojo.network" },
    { name: "SN54 WebGenie", link: "https://webgenieai.co/playground" },
    { name: "SN56 Gradients", link: "https://gradients.io/app/" },
    { name: "SN58 Dippy Speech", link: "https://dippyspeech.com" },
    { name: "SN64 Chutes", link: "https://chutes.ai" },
    { name: "SN64 Chutes Alt", link: "https://glider.so" },
    { name: "SN66 Fake News", link: "https://highsky.io/fakenews#app_heading" },
  ];
  
  /**
   * Dynamically create cards in the .app-grid section.
   */
  function generateAppCards() {
    const appGrid = document.getElementById("appGrid");
    
    subnets.forEach((app) => {
      const card = document.createElement("div");
      card.className = "app-card";
  
      const anchor = document.createElement("a");
      anchor.href = app.link;
      anchor.target = "_blank";
      anchor.innerHTML = `<h3>${app.name}</h3>`;
  
      card.appendChild(anchor);
      appGrid.appendChild(card);
    });
  }
  
  // Initialize once the DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    generateAppCards();
  });
  