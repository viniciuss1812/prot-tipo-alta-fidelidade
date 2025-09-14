
const buttons = document.querySelectorAll('.button');

const videoFrame = document.getElementById('video-frame');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const videoUrl = button.getAttribute('data-video');
    videoFrame.src = videoUrl;
  });
});
