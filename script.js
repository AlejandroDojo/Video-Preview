console.log("page loaded...");
// Seleccionar el video en el dom
let video = document.querySelector("#duck-video");
video.muted = true; // Mutearlo

// Al pasar el mouse por encima
video.addEventListener("mouseover", () => {
    if (!video.controls) {
        video.play();
    }
});
// Al sacar el mouse de encima
video.addEventListener("mouseout", () => {
    if (!video.controls) {
        video.pause();
    }
});
// Al dar click en el vídeo
video.addEventListener("click", () => {
    video.controls = true;
    video.muted = false // Sacarle el silencio.
})