import b1 from '../assets/banners/BANNER1.jpg';
import b2 from '../assets/banners/BANNER2.jpg';
import b3 from '../assets/banners/BANNER3.jpg';

import f1 from '../assets/images/food1.jpeg';
import f2 from '../assets/images/food2.jpeg';
import f3 from '../assets/images/food3.jpg';
import f4 from '../assets/images/food4.jpg';
import f5 from '../assets/images/food5.jpg';
import f6 from '../assets/images/food6.jpeg';
import f7 from '../assets/images/food7.png';
import f8 from '../assets/images/food8.png';
import f9 from '../assets/images/food9.png';
import f10 from '../assets/images/food10.png';
import f11 from '../assets/images/food11.jpg';
import f12 from '../assets/images/food12.jpeg';
import f13 from '../assets/images/food13.jpeg';
import f14 from '../assets/images/food14.jpeg';
import f15 from '../assets/images/food15.jpg';
import f16 from '../assets/images/food16.jpeg';
import f17 from '../assets/images/food17.jpg';
import f18 from '../assets/images/food18.jpeg';
import f19 from '../assets/images/food19.jpeg';
import f20 from '../assets/images/food20.jpeg';
import f21 from '../assets/images/food21.jpeg';

export const NAV_LEFT = [
  { name: 'HOME', path: '/' },
  { name: 'MENU', path: '/menu' },
  { name: 'LOCATIONS', path: '/locations' },
];

export const NAV_RIGHT = [
  { name: 'CATERING', path: '/catering' },
  { name: 'SOCIAL', path: '/social' },
  { name: 'FRANCHISING', path: '/franchising' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: b1,
    title: 'AUTHENTIC SOUTH INDIAN',
    subtitle: 'EXPERIENCE THE TASTE OF TRADITION',
    cta: 'VIEW MENU',
    link: '/menu',
  },
  {
    id: 2,
    image: b2,
    title: 'CRISPY MASALA DOSAS',
    subtitle: 'SERVED WITH CHUTNEY & SAMBAR',
    cta: 'SEE THE MENU',
    link: '/menu',
  },
  {
    id: 3,
    image: b3,
    title: 'NOW OPEN',
    subtitle: 'FIND YOUR NEAREST MADRAS CAFE',
    cta: 'FIND A LOCATION',
    link: '/locations',
  },
];

export const CONES = [
  {
    id: 'masala-dosa',
    name: 'MASALA DOSA',
    description: 'Crispy crepe made from rice and lentils, filled with potato masala.',
    image: f1,
  },
  {
    id: 'idli-sambar',
    name: 'IDLI SAMBAR',
    description: 'Soft steamed rice cakes served with lentil soup and coconut chutney.',
    image: f2,
  },
  {
    id: 'vada',
    name: 'MEDU VADA',
    description: 'Crispy deep-fried lentil donuts served with sambar.',
    image: f3,
  },
  {
    id: 'uttapam',
    name: 'ONION UTTAPAM',
    description: 'Thick pancake topped with onions, tomatoes, and green chilies.',
    image: f4,
  }
];

export const SHAKES = [
  {
    id: 'filter-coffee',
    name: 'FILTER COFFEE',
    description: 'Authentic South Indian filter coffee made with milk and decoction.',
    image: f5,
  },
  {
    id: 'badam-milk',
    name: 'BADAM MILK',
    description: 'Warm almond milk flavored with cardamom and saffron.',
    image: f6,
  }
];

export const SUNDAES = [
  {
    id: 'gulab-jamun',
    name: 'GULAB JAMUN',
    description: 'Soft milk dumplings soaked in rose-flavored sugar syrup.',
    image: f7,
  },
  {
    id: 'payasam',
    name: 'PAYASAM',
    description: 'Traditional sweet pudding made with rice, milk, jaggery and nuts.',
    image: f8,
  }
];

export const SANDWICHES = [
  {
    id: 'bonda',
    name: 'MYSORE BONDA',
    description: 'Deep fried snack made with urad dal, crispy outside and soft inside.',
    image: f9,
  },
  {
    id: 'bajji',
    name: 'PLANTAIN BAJJI',
    description: 'Slices of plantain dipped in gram flour batter and deep fried.',
    image: f10,
  }
];

export const LOCATIONS = [
  {
    id: 'john-st',
    name: '106 JOHN ST - TORONTO',
    address: '106 John St, Toronto, Ontario',
    phone: '416-576-2959',
    hours: [
      'Sun: 4:00pm - 11:00pm',
      'Mon: 4:00pm - 11:00pm',
      'Tue: 4:00pm - 11:00pm',
      'Wed: 4:00pm - 11:00pm',
      'Thu: 4:00pm - 11:00pm',
      'Fri: 4:00pm - 11:00pm',
      'Sat: 4:00pm - 11:00pm',
    ],
    city: 'Toronto',
  }
];

export const INSTAGRAM_FEED = [
  f11, f12, f13, f14, f15, f16, f17, f18
];

export const PROMO_TILES = [
  {
    image: f19,
    title: 'AUTHENTIC DOSAS',
    cta: 'CHECK OUT THE MENU',
    link: '/menu',
  },
  {
    image: f20,
    title: 'BOOK CATERING',
    cta: 'BRING THE PARTY',
    link: '/catering',
  },
  {
    image: f21,
    title: 'TRY OUR FILTER COFFEE',
    cta: 'VIEW MENU',
    link: '/menu',
  },
];
