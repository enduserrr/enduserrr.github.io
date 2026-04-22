function pauseAnimation(wrapper) {
  if (wrapper) {
    wrapper.style.animationPlayState = "paused"; // Pause
  }
}

function resumeAnimation(wrapper) {
  if (wrapper) {
    wrapper.style.animationPlayState = "running"; // Resume
  }
}