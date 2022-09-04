import './sass/main.scss';

// Added and initialized splidejs script - mounted in page.
import Splide from '@splidejs/splide';

const splide = new Splide('.splide', {
  arrows: false,
  type: 'loop',
  autoplay: 'pause',
  speed: 500,
  interval: 5000,
  pauseOnHover: true,
}).mount();

splide.Components.Autoplay.play();

