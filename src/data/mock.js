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

import d1 from '../assets/menu/plain-dosa.jpg';
import d2 from '../assets/menu/masal-dosa.jpg';
import d3 from '../assets/menu/mysore-masal-dosa.jpg';
import d4 from '../assets/menu/podi-dosa.jpg';
import d5 from '../assets/menu/onion-dosa.jpg';


import authenticDosa from "../assets/home/authentic-dosa.jpeg";
import bookCatering from "../assets/home/catering.jpeg";
import filterCoffee from "../assets/home/filter-coffee.jpeg";

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

export const IDLY_VADA = [
  {
    id: 'idly-2',
    name: 'IDLY 2 PIECES',
    description: 'Soft steamed rice cakes served with sambar and chutneys.',
    image: f2,
  },
  {
    id: 'sambar-idly',
    name: 'SAMBAR IDLY',
    description: 'Idly soaked in aromatic sambar.',
    image: f12,
  },
  {
    id: 'podi-idly',
    name: 'PODI IDLY',
    description: 'Bite-sized idlies tossed in spicy lentil powder.',
    image: f13,
  },
  {
    id: 'ghee-podi-idly',
    name: 'GHEE PODI IDLY',
    description: 'Podi idly topped with aromatic ghee.',
    image: f14,
  },
  {
    id: 'medhu-vada',
    name: 'MEDHU VADA',
    description: 'Crispy deep-fried lentil donuts served with sambar.',
    image: f3,
  },
  {
    id: 'sambar-vada',
    name: 'SAMBAR VADA',
    description: 'Medhu vada soaked in sambar.',
    image: f11,
  }
];

export const DOSA_UTHAPAM = [
  {
    id: 'plain-dosa',
    name: 'PLAIN DOSA',
    description: 'Thin crispy rice and lentil crepe.',
    image: d1,
  },
  {
    id: 'masal-dosa',
    name: 'MASAL DOSA',
    description: 'Dosa stuffed with spiced potato masala.',
    image: d2,
  },
  {
    id: 'mysore-masal',
    name: 'MYSORE MASAL DOSA',
    description: 'Dosa with spicy Mysore chutney and potato filling.',
    image: d3,
  },
  {
    id: 'podi-dosa',
    name: 'PODI DOSA',
    description: 'Dosa sprinkled with spicy lentil powder.',
    image: d4,
  },
  {
    id: 'onion-dosa',
    name: 'ONION DOSA',
    description: 'Dosa topped with finely chopped onions.',
    image: d5,
  },
  {
    id: 'panner-dosa',
    name: 'PANNER DOSA',
    description: 'Dosa stuffed with spiced paneer.',
    image: d1,
  },
  {
    id: 'mushroom-masal',
    name: 'MUSHROOM MASAL DOSA',
    description: 'Dosa with spiced mushroom filling.',
    image: d1,
  },
  {
    id: 'garlic-chutney',
    name: 'GARLIC CHUTNY DOSA',
    description: 'Dosa spread with spicy garlic chutney.',
    image: d1,
  },
  {
    id: 'plain-uthapam',
    name: 'PLAIN UTHAPAM',
    description: 'Thick rice and lentil pancake.',
    image: f4,
  },
  {
    id: 'onion-uthapam',
    name: 'ONION UTHAPAM',
    description: 'Uthapam topped with onions.',
    image: f4,
  },
  {
    id: 'podi-uthapam',
    name: 'PODI UTHAPAM',
    description: 'Uthapam topped with spicy podi.',
    image: f4,
  },
  {
    id: 'mc-spl-uthapam',
    name: 'MC SPL UTAPAM',
    description: 'Special Madras Cafe uthapam with mixed toppings.',
    image: f4,
  }
];

export const SNACKS_TIFFIN = [
  {
    id: 'valakka-bhajji',
    name: 'VALAKKA BHAJJI',
    description: 'Plantain fritters dipped in gram flour batter.',
    image: f10,
  },
  {
    id: 'onion-bajji',
    name: 'ONION BAJJI',
    description: 'Crispy onion fritters.',
    image: f10,
  },
  {
    id: 'molaka-bajji',
    name: 'MOLAKA BAJJI',
    description: 'Spicy chili fritters.',
    image: f10,
  },
  {
    id: 'aloo-bonda',
    name: 'ALOO BONDA',
    description: 'Spiced potato balls dipped in batter and deep fried.',
    image: f9,
  },
  {
    id: 'chapati',
    name: 'CHAPATI',
    description: 'Whole wheat flatbread served with curry.',
    image: f21,
  },
  {
    id: 'parotta',
    name: 'PAROTTA',
    description: 'Layered flaky flatbread.',
    image: f21,
  }
];

export const SWEETS_DRINKS = [
  {
    id: 'gulab-jamoon',
    name: 'GULAB JAMOON',
    description: 'Soft milk dumplings soaked in rose-flavored sugar syrup.',
    image: f7,
  },
  {
    id: 'ladoo',
    name: 'LADOO',
    description: 'Traditional Indian sweet balls.',
    image: f15,
  },
  {
    id: 'tea',
    name: 'TEA',
    description: 'Authentic masala tea.',
    image: f5,
  },
  {
    id: 'filter-coffee',
    name: 'FILTER COFFEE',
    description: 'Authentic South Indian filter coffee.',
    image: f5,
  },
  {
    id: 'falooda',
    name: 'FALOODA',
    description: 'Cold dessert with noodles, syrup and ice cream.',
    image: f16,
  },
  {
    id: 'butter-milk',
    name: 'BUTTER MILK',
    description: 'Refreshing spiced yogurt drink.',
    image: f17,
  },
  {
    id: 'lemon-soda',
    name: 'LEMON SODA',
    description: 'Zesty lemon soda.',
    image: f17,
  },
  {
    id: 'lassi',
    name: 'LASSI',
    description: 'Sweet or salted yogurt drink.',
    image: f18,
  },
  {
    id: 'rose-milk',
    name: 'ROSE MILK',
    description: 'Chilled milk flavored with rose syrup.',
    image: f18,
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
    image: authenticDosa,
    title: 'AUTHENTIC DOSAS',
    cta: 'CHECK OUT THE MENU',
    link: '/menu',
  },
  {
    image: bookCatering,
    title: 'BOOK CATERING',
    cta: 'BRING THE PARTY',
    link: '/catering',
  },
  {
    image: filterCoffee,
    title: 'TRY OUR FILTER COFFEE',
    cta: 'VIEW MENU',
    link: '/menu',
  },
];

