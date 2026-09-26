document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("main-video");

  if (!video) return;

  const isMediaElement = typeof video.muted === "boolean";

  if (!isMediaElement) return;

  video.defaultMuted = false;
  video.muted = false;
  video.volume = 0.8;

  video.addEventListener("loadedmetadata", () => {
    video.muted = false;
    video.volume = 0.8;
  });
});
