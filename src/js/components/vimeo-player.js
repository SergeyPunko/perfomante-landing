export default function vimeoPlayer() {
  const vPlayerPanel = document.querySelectorAll('.vimeo__panel');
  if (vPlayerPanel) {
    vPlayerPanel.forEach(elem => {
      const vPlay = elem.querySelector('.video__play');
      const vFrame = elem.querySelector('.vimeo__iframe');

      const player = new Vimeo.Player(vFrame);
      vPlay.addEventListener('click', () => {
        player.play();
        elem.classList.add('active');
      });
    });
  }
}
