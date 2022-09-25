const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    playMusic(e);
  });
});

window.addEventListener("keydown", (e) => {
  playMusic(e, e.keyCode);
});

function playMusic(e, keyCode) {
  let dataKey =
    keyCode === undefined
      ? e.target.nodeName !== "DIV"
        ? e.target.parentElement.getAttribute("data-key")
        : e.target.getAttribute("data-key")
      : keyCode;
  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
  const key = document.querySelector(`div[data-key="${dataKey}"]`);

  if (!audio.paused) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio.play();
  key.classList.add("playing");
  setTimeout(() => {
    key.classList.remove("playing");
  }, 100);
}
