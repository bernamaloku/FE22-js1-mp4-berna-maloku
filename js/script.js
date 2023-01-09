const ekgAnime = {
  targets: "path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 6000,
  translateY: "3rem",
  translateX: "0.3rem",
  direction: "alternate",
  opacity: 0.2,
  autoplay: false,
  loop: true,
};

const ekgtime = anime(ekgAnime);
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const stop = document.querySelector("#stop");

play.addEventListener("click", ekgtime.play);
pause.addEventListener("click", ekgtime.pause);
stop.addEventListener("click", function () {
  anime.restart();
  anime.pause();
});
