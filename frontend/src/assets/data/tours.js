import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    price: 99,
    address:'Somewhere',
    maxGroupSize: 10,
    desc: "Iconic London bridge with stunning views of Big Ben, the Houses of Parliament, and the River Thames—perfect for walks and photos.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    trending: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Tropical paradise with pristine beaches, lush jungles, and vibrant culture—a haven for relaxation and adventure.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    trending: false,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "A hidden gem offering breathtaking snowy peaks and serene landscapes, perfect for nature lovers.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    trending: false,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Witness a mesmerizing sunrise over serene beaches and tranquil waters—a magical start to your day",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    trending: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "A stunning island getaway with dramatic cliffs, crystal-clear waters, and vibrant marine life.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    trending: true,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Delight in the beauty of blooming cherry blossoms—a seasonal spectacle of nature's artistry.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    trending: true,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "A picturesque destination blending dramatic mountains and charming coastal vibes—ideal for explorers.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    trending: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Enchanting snowy peaks and lush valleys offering breathtaking vistas for unforgettable adventures",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    trending: false,
  },
];

export default tours;