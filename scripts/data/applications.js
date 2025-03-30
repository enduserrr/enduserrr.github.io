// data/applications.js

const applications = [
  // Communication Tools
  {
    name: "Apex",
    link: "https://app.macrocosmos.ai/apex/chat",
    category: "Communication Tools",
    image: "img/apps/apex.webp",
    shortDesc: "Chat app with various models.",
    longDesc: "Chat app with various models.\nPowered by Apex (SN1)",
    social: {},
    keywords: ["Chat Bots"]
  },
  {
    name: "Neural Ai",
    link: "https://app.goneural.ai/public-gallery",
    category: "Creative Tools",
    image: "img/apps/neural-ai.webp",
    shortDesc: "Generate 3D assets with a web app or plugins.",
    longDesc: "Generate 3D assets with a web app or plugins. World builder coming soon.\nPowered by Neural3D (SN46)",
    social: {},
    keywords: ["Create", "Build"]
  },
  {
    name: "Dippy Roleplay",
    link: "https://www.dippy.ai/",
    category: "Communication Tools",
    image: "img/apps/dippy.webp",
    shortDesc: "AI-powered virtual platform for immersive roleplay.",
    longDesc: "Dippy is an AI-powered virtual platform that enables users to experience immersive, interactive, and engaging roleplay.\nPowered by Dippy Roleplay (SN11), Dippy Speech (SN58), Targon (SN4)",
    social: {},
    keywords: ["Chat Bots", "Companion"]
  },
  {
    name: "Muse Beta",
    link: "https://www.sn21.ai/chat",
    category: "Communication Tools",
    image: "img/apps/muse.webp",
    shortDesc: "Voice app for discussions with various personalities.",
    longDesc: "Voice app that allows users to have discussions with various personalities including 'Cowboy', 'Zoomer', and 'Seductive'.\nPowered by Any-any (SN21)",
    social: {},
    keywords: ["Chat Bots", "Companion", "Voice"]
  },
  {
    name: "Dippy Speech",
    link: "https://www.dippyspeech.com/",
    category: "Communication Tools",
    image: "img/apps/dippyspeech.webp",
    shortDesc: "AI companion app with 1M+ users.",
    longDesc: "Dippy is one of the world's leading AI companion apps with 1M+ users.\nPowered by Dippy Speech (SN58)",
    social: {},
    keywords: ["Chat Bots", "Companion", "Voice"]
  },
  {
    name: "Glider.so",
    link: "https://glider.so/",
    category: "Communication Tools",
    image: "img/apps/glider.webp",
    shortDesc: "Chat application powered by NineteenAI, Corcel, and Chutes.",
    longDesc: "Glider.so is a chat application.\nPowered by Inference (SN19), Chutes (SN64)",
    social: {},
    keywords: ["Chat Bots"]
  },
  {
    name: "Corcel",
    link: "https://app.corcel.io/",
    category: "Communication Tools",
    image: "img/apps/corcel.webp",
    shortDesc: "Platform for chat, image generation, and avatar creation.",
    longDesc: "Corcel offers a text chat app, image generation studio, and avatar creation tools.\nPowered by Cortex.t (SN18), Inference (SN19)",
    social: { "Text": "https://app.corcel.io/chat?version=chat", "Studio": "https://app.corcel.io/image-studio/app/generate-ultra", "Avatar": "https://app.corcel.io/image-studio/avatar/app" },
    keywords: ["Create", "Chat Bots"]
  },

  // Data and Analytics Tools
  {
    name: "Sybil",
    link: "https://sybil.com/",
    category: "Data and Analytics Tools",
    image: "img/apps/sybil.webp",
    shortDesc: "AI-powered language model for text responses.",
    longDesc: "AI-powered language model designed to efficiently process and generate human-like text responses.\nPowered by Targon (SN4)",
    social: {},
    keywords: ["Data Tools"]
  },
  {
    name: "Gravity Beta",
    link: "https://app.macrocosmos.ai/gravity/",
    category: "Data and Analytics Tools",
    image: "img/apps/datauniverse.webp",
    shortDesc: "Dynamic data scraping tool.",
    longDesc: "Dynamic Data Scraping tool.\nPowered by Dataverse (SN13)",

    social: {},
    keywords: ["Data Tools"]
  },
  {
    name: "Nebula Beta",
    link: "https://nebula.macrocosmos.ai/",
    category: "Data and Analytics Tools",
    image: "img/apps/datauniverse.webp",
    shortDesc: "Visually stunning galactic data analysis tool.",
    longDesc: "Visually stunning galactic Data Analysis tool.\nPowered by Dataverse (SN13)",
    social: {},
    keywords: ["Data Tools"]
  },
  {
    name: "desearch.ai",
    link: "https://desearch.ai/",
    category: "Data and Analytics Tools",
    image: "img/apps/desearch.webp",
    shortDesc: "AI-powered search application.",
    longDesc: "An informative search application which gives you detailed responses to text queries and provides informative links to responses.\nPowered by Desearch (SN22)",
    social: {},
    keywords: ["Data Tools"]
  },
  {
    name: "FakeNews",
    link: "https://www.highsky.io/fakenews#app_heading",
    category: "Data and Analytics Tools",
    image: "img/apps/fakenews.webp",
    shortDesc: "Decentralized fact-checking platform.",
    longDesc: "A decentralized fact-checking platform built on the Bittensor network.\nPowered by FakeNews (SN66)",
    social: {},
    keywords: ["Data Tools"]
  },

  // Creative Tools
  {
    name: "404",
    link: "https://404.xyz/app",
    category: "Creative Tools",
    image: "img/apps/404.webp",
    shortDesc: "Generate 3D items from text prompts.",
    longDesc: "Generate 3D items from a text prompt.\nPowered by Three Gen (SN17)",
    social: {},
    keywords: ["Create"]
  },
  {
    name: "Make It A Quote",
    link: "https://makeitaquote.com/",
    category: "Creative Tools",
    image: "img/apps/makeitaquote.webp",
    shortDesc: "Transform text and tweets into quotes and memes.",
    longDesc: "Transform text and tweets into visually appealing quotes and memes.\nPowered by Cortex.t (SN18), Inference (SN19), SocialTensor (SN23)",
    social: {},
    keywords: ["Create"]
  },
  {
    name: "NicheTensor",
    link: "https://app.nichetensor.com/",
    category: "Creative Tools",
    image: "img/apps/niche.webp",
    shortDesc: "Generate text-to-image, image upscaling, and chat completion.",
    longDesc: "Generate text-to-image, Image upscaling and Chat Completion.\nPowered by SocialTensor (SN23)",
    social: {},
    keywords: ["Create"]
  },
  {
    name: "It's AI",
    link: "https://its-ai.org",
    category: "Creative Tools",
    image: "img/apps/itsai.webp",
    shortDesc: "Detect AI-generated text and convert to British English.",
    longDesc: "Detect AI generated text. Turn text from American English to British English with Britishizer. Browser extension available.\nPowered by It's AI (SN32)",
    social: {},
    keywords: ["Create", "Detect AI"]
  },
  {
    name: "AI Detector",
    link: "https://bitmind.ai/apps",
    category: "Creative Tools",
    image: "img/apps/bitmind.webp",
    shortDesc: "Detect deepfakes like AI-generated image and video.",
    longDesc: "Detect AI generated image and video. Chrome extension available.\nPowered by Bitmind (SN34)",
    social: {},
    keywords: ["Detect AI"]
  },
  {
    name: "Gen42",
    link: "https://gen42.ai/",
    category: "Creative Tools",
    image: "img/apps/gen42.webp",
    shortDesc: "Coding assistant.",
    longDesc: "Coding assistant powered by Subnet 45: SWE-Rizzo.\nPowered by SWE-Rizzo (SN45)",
    social: {},
    keywords: ["AI & Coding"]
  },

  // Infrastructure and Compute
  {
    name: "Nineteen",
    link: "https://nineteen.ai/app",
    category: "Infrastructure and Compute",
    image: "img/apps/nineteen.webp",
    shortDesc: "Lightning-Fast AI Inference.",
    longDesc: "Permissionless, serverless and scalable inference.\nPowered by Inference (SN19)",
    social: {},
    keywords: ["Compute", "Infrastructure"]
  },
  {
    name: "Storb Demo",
    link: "https://storb.dev/",
    category: "Infrastructure and Compute",
    image: "img/apps/storb.webp",
    shortDesc: "Object storage on Bittensor network.",
    longDesc: "An object storage subnet on the Bittensor network.\nPowered by Storb (SN26)",
    social: {},
    keywords: ["Data Tools"]
  },
  {
    name: "Fast Inference",
    link: "https://www.condenses.ai/#playground",
    category: "Infrastructure and Compute",
    image: "img/apps/condence.webp",
    shortDesc: "Optimized token length for cost savings and performance.",
    longDesc: "With Condenses AI, you get an optimized token length that allows you save on cost while increasing performance.\nPowered by Condenses AI (SN47)",
    social: {},
    keywords: ["Compute", "Infrastructure"]
  },
  {
    name: "Gradients",
    link: "https://gradients.io/app/",
    category: "Training",
    image: "img/apps/gradients.webp",
    shortDesc: "Train Custom AI Models On-Demand.",
    longDesc: "Gradients allows anyone in the world to train image and text models on Bittensor.\nPowered by Gradients (SN56)",
    social: {},
    keywords: ["Train AI"]
  },
  {
    name: "Chutes",
    link: "https://chutes.ai/app",
    category: "Compute",
    image: "img/apps/chutes.webp",
    shortDesc: "Serverless AI Compute.",
    longDesc: "Anyone can deploy AI models on decentralized infrastructure.\nPowered by Chutes (SN64)",

    social: {},
    keywords: ["Compute", "Infrastructure"]
  },
  {
    name: "Neural Internet",
    link: "https://app.neuralinternet.ai/",
    category: "Infrastructure and Compute",
    image: "img/apps/sn27.webp",
    shortDesc: "Cloud compute platform.",
    longDesc: "Cloud compute platform powered by Subnet 27: NI Compute.\nPowered by NI Compute (SN27)",
    social: {},
    keywords: ["Compute", "Infrastructure"]
  },
  {
    name: "Celium Compute",
    link: "https://celiumcompute.ai/",
    category: "Infrastructure and Compute",
    image: "img/apps/celium.webp",
    shortDesc: "Cloud compute platform.",
    longDesc: "Cloud compute platform powered by Subnet 51: Compute Subnet.\nPowered by Compute Subnet (SN51)",
    social: {},
    keywords: ["Compute", "Infrastructure"]
  },

  // Business Services
  {
    name: "Bitads",
    link: "https://firstads.ai/",
    category: "Business Services",
    image: "img/apps/firstads.webp",
    shortDesc: "Marketing application.",
    longDesc: "Marketing app powered by Subnet 16: Bitads.\nPowered by Bitads (SN16)",
    social: {},
    keywords: ["AI Marketing"]
  },
  {
    name: "MSPTech.ai",
    link: "https://msptech.ai/",
    category: "Business Services",
    image: "img/apps/msp.webp",
    shortDesc: "Managed service provider.",
    longDesc: "Managed service provider powered by Subnet 20: Bitagent-Rizzo.\nPowered by Bitagent-Rizzo (SN20)",
    social: {},
    keywords: ["Other"]
  },
  {
    name: "GoGoAgent",
    link: "https://gogoagent.ai/",
    category: "Business Services",
    image: "img/apps/gogo.webp",
    shortDesc: "Agentic services.",
    longDesc: "Agentic services powered by Subnet 20: Bitagent-Rizzo.\nPowered by Bitagent-Rizzo (SN20)",
    social: {},
    keywords: ["AI Agents"]
  },
  {
    name: "NextPlaceAI",
    link: "https://nextplace.ai/productPortal",
    category: "Business Services",
    image: "img/apps/nextplace.webp",
    shortDesc: "Real estate application.",
    longDesc: "Real estate app powered by Subnet 48: NextPlaceAI.\nPowered by NextPlaceAI (SN48)",
    social: {},
    keywords: ["Real Estate"]
  },

  // Financial Tools
  {
    name: "AION5100",
    link: "https://aion5100.ai/",
    category: "Financial Tools",
    image: "img/apps/aion5100.webp",
    shortDesc: "AI-powered predictions market.",
    longDesc: "The AION 5100 Predictions product is an advanced artificial intelligence (AI) solution designed to provide users with accurate and reliable predictions across various domains.\nPowered by Infinite Games (SN6)",
    social: {},
    keywords: ["AI & Finance"]
  },
  {
    name: "Glitch Financial",
    link: "https://glitch.financial/",
    category: "Financial Tools",
    image: "img/apps/glitch.webp",
    shortDesc: "Trading platform.",
    longDesc: "Trading platform powered by Subnet 8: Proprietary Trading Network.\nPowered by Proprietary Trading Network (SN8)",
    social: {},
    keywords: ["AI & Financee"]
  },
  {
    name: "Trade with Dale",
    link: "https://tradewithdale.ai/",
    category: "Financial Tools",
    image: "img/apps/tradewithdale.webp",
    shortDesc: "Bybit trading bot.",
    longDesc: "Trading bot for Bybit powered by Subnet 8: Proprietary Trading Network.\nPowered by Proprietary Trading Network (SN8)",
    social: {},
    keywords: ["AI & Finance"]
  },
  {
    name: "Sturdy.Finance",
    link: "https://v2.sturdy.finance/",
    category: "Financial Tools",
    image: "img/apps/sturdy.webp",
    shortDesc: "DeFi yield aggregator.",
    longDesc: "Unleash the full power of Sturdy V2 with newly launched Silos and Aggregators.\nPowered by Sturdy (SN10)",
    social: {},
    keywords: ["AI & Finance"]
  },

  // Other
  {
    name: "Focus",
    link: "https://focus.omega.inc/",
    category: "Other",
    image: "img/apps/omega.webp",
    shortDesc: "Productivity app to monetize tasks.",
    longDesc: "Focus helps you monetize your productivity one task at a time.\nPowered by Omega (SN24)",
    social: {},
    keywords: ["Productivity"]
  },
  {
    name: "Tensorplex Dojo",
    link: "https://dojo.network/",
    category: "Other",
    image: "img/apps/dojo.webp",
    shortDesc: "Human-generated datasets for AI development.",
    longDesc: "Complete diverse tasks to advance AI development. Work with miners on Subnet 52: Tensorplex Dojo to contribute to high-quality human-generated datasets.\nPowered by Tensorplex Dojo (SN52)",
    social: {},
    keywords: ["Contribute", "AI Development"]
  },
  {
    name: "Bettensor",
    link: "https://bettensor.com/games",
    category: "Other",
    image: "img/apps/bettensor.webp",
    shortDesc: "Sports betting platform.",
    longDesc: "Sports betting platform powered by Subnet 30: Bettensor.\nPowered by Bettensor (SN30)",
    social: {},
    keywords: ["Gambling"]
  },
  {
    name: "Best Path",
    link: "https://bestpath.world/",
    category: "Other",
    image: "img/apps/bestpath.webp",
    shortDesc: "AI-powered path-finder application.",
    longDesc: "AI powered Path-finder application.\nPowered by Graphite (SN43)",
    social: {},
    keywords: ["Directions"]
  },
  {
    name: "Sportstensor",
    link: "https://www.sportstensor.com/",
    category: "Other",
    image: "img/apps/sportstensor.webp",
    shortDesc: "Sports predictions network.",
    longDesc: "Institutional-grade sports predictions through the world's first decentralized intelligence network.",
    keywords: ["Prediction models"]
  }
];

// Featured and Popular Applications for index page
const featuredApplications = [
  "It's AI", 'Tensorplex Dojo', 'Gradients', 'FakeNews', 'desearch.ai', 'AION5100', 'Focus', 'Gen42'
];
const popularApplications = [
  'Dippy Roleplay', 'Gravity Beta', "It's AI", 'Storb Demo', 'MSPTech.ai', 'Sturdy.Finance', 'Tensorplex Dojo', 'Muse Beta'
];

// Expose to global scope
window.applications = applications;
window.featuredApplications = featuredApplications;
window.popularApplications = popularApplications;