
const buttons = document.querySelectorAll('.button');
const videoFrame = document.getElementById('video-frame');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let videoUrl = button.getAttribute('data-video');

    // Se for link do YouTube, transforma em embed
    if (videoUrl.includes("watch?v=")) {
      videoUrl = videoUrl.replace("watch?v=", "embed/");
    } else if (videoUrl.includes("youtu.be/")) {
      videoUrl = videoUrl.replace("youtu.be/", "www.youtube.com/embed/");
    }

    videoFrame.src = videoUrl;
  });
});

