// TerminalWindow module
const TerminalWindow = (() => {
    const chatOutput = document.getElementById('chat-output');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const minimizeBtn = document.getElementById('minimize-btn');
    const presetButtonsContainer = document.getElementById('preset-buttons');
  
    // Function to append text letter by letter
    const typeText = (text, callback) => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          chatOutput.innerHTML += text.charAt(index);
          index++;
          // Auto-scroll to bottom
          chatOutput.scrollTop = chatOutput.scrollHeight;
        } else {
          clearInterval(interval);
          chatOutput.innerHTML += "\n";
          if (callback) callback();
        }
      }, 50); // Adjust speed as needed
    };
  
    // Send button click handler
    sendBtn.addEventListener('click', () => {
      const text = userInput.value.trim();
      if (text) {
        chatOutput.innerHTML += "> " + text + "\n";
        userInput.value = "";
        // Here, integrate your Akash API call
        simulateBotResponse(text);
      }
    });
  
    // Allow Enter key to trigger send
    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendBtn.click();
      }
    });
  
    // Simulated bot response (replace with Akash API integration)
    const simulateBotResponse = (userText) => {
      if (userText.toLowerCase().includes("question")) {
        // If the user message triggers a yes/no question
        typeText("Do you want to continue? [Yes/No]", () => {
          presetButtonsContainer.classList.remove('hidden');
        });
      } else {
        // Standard response echoing user text
        typeText("Echo: " + userText);
      }
    };
  
    // Minimize button toggles the terminal overlay
    minimizeBtn.addEventListener('click', () => {
      const overlay = document.getElementById('terminal-overlay');
      overlay.style.display = (overlay.style.display === "none") ? "flex" : "none";
    });
  
    // Handle preset yes/no button clicks
    const presetButtons = document.querySelectorAll('.preset-btn');
    presetButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const answer = btn.getAttribute('data-answer');
        chatOutput.innerHTML += "> " + answer + "\n";
        presetButtonsContainer.classList.add('hidden');
        typeText("You selected: " + answer);
      });
    });
  
    // Expose public API if further extension is needed
    return {
      typeText,
      clear: () => chatOutput.innerHTML = ""
    };
  
  })();
  