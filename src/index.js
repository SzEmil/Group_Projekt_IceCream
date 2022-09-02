import './sass/main.scss';

// Dodany i uruchomiony skrypt do Splide (karuzela)
import Splide from '@splidejs/splide';

new Splide('.splide', {
  arrows: false,
  rewind: true,
  type: 'slide',
  speed: 500,
  autoplay: true,
  interval: 500,
  pauseOnHover: true,
  perPage: 1,
  preloadPages: 1,
}).mount();

