export const API_BASE_URL = 'https://api.example.com';
export const DEFAULT_IMAGE = '/assets/placeholder.jpg';
export const SITE_TITLE = 'ALX Listing App';
import { PropertyProps, Review } from "../interfaces/"


const sampleReviews: Review[] = [
  {
    name: "Alice",
    avatar: "/assets/images/avatar1.jpg",
    rating: 4.8,
    comment: "Amazing stay, very clean and close to everything!",
  },
  {
    name: "Bob",
    avatar: "/assets/images/avatar2.jpg",
    rating: 4.5,
    comment: "Great location but a bit noisy at night.",
  },
];

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/images/image2.png",
    discount: "",
    reviews: sampleReviews,
    description: "This stunning beachfront villa offers panoramic ocean views from its infinity pool, with traditional Balinese architecture blending seamlessly with modern luxury. Wake up to the sound of waves in your master suite with private terrace."
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/images/image3.png",
    discount: "30",
    description: "Nestled in the Rocky Mountains, this cozy chalet features floor-to-ceiling windows showcasing breathtaking views. The stone fireplace and heated floors create the perfect après-ski retreat after a day on the slopes."
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/images/image4.png",
    discount: "",
    description: "A mid-century modern gem surrounded by Joshua trees, featuring a saltwater pool and outdoor shower. The wall of glass doors opens completely to blend indoor and outdoor living in this peaceful desert oasis."
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/images/image5.png",
    discount: "15",
    description: "Perched atop a Manhattan skyscraper, this penthouse offers 360-degree views of the city skyline through floor-to-ceiling windows. The rooftop terrace features a hot tub and outdoor kitchen, perfect for entertaining."
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "/assets/images/image6.png",
    discount: "20",
    description: "This handcrafted cedar cabin sits directly on the riverbank with a private dock. The wrap-around deck is ideal for morning coffee while watching trout jump, and the wood-fired hot tub under the stars is magical."
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "/assets/images/image7.png",
    discount: "",
    description: "An architectural masterpiece where contemporary design meets tropical living. The villa's open-air living spaces flow directly to a 25-meter infinity pool overlooking the Indian Ocean, with staff including a private chef and butler."
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/images/image8.png",
    discount: "10",
    description: "Wake up to mirror-like lake reflections of the Canadian Rockies from your bed. This authentic log chalet features a sauna, canoe dock, and massive stone fireplace - the perfect base for wilderness adventures."
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "/assets/images/image9.png",
    discount: "25",
    description: "Hidden within a lush tropical garden, this villa features outdoor rain showers and a stunning free-form pool surrounded by frangipani trees. The open-air sala is perfect for Thai massages and sunset cocktails."
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/images/image10.png",
    discount: "",
    description: "This converted factory loft in Berlin's arts district features original brick walls, steel beams, and massive industrial windows. The rooftop terrace offers views of the TV Tower, and the neighborhood buzzes with galleries and cafes."
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/images/image11.png",
    discount: "40",
    description: "Completely surrounded by ancient cedars, this off-grid cabin offers total privacy with modern comforts. The outdoor cedar hot tub sits beside a babbling brook, and the glass-walled living room brings the forest inside."
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/images/image12.png",
    discount: "50",
    description: "Carved into the cliffs of the Amalfi Coast, this villa's infinity pool appears to spill into the Mediterranean below. Lemon trees dot the terraced gardens, and the elevator carved through rock leads to a private beach."
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/images/image13.png",
    discount: "",
    description: "With direct access to a pristine sandy beach, this villa blends coastal chic with Australian modernism. The gourmet kitchen opens to an outdoor dining pavilion, and the master suite features a sunrise-view bathtub."
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/images/image14.jpg",
    discount: "35",
    description: "A meticulously restored 15th-century villa with original frescoes and terracotta floors. The walled garden features a Renaissance-style fountain and olive trees, just minutes from Florence's Duomo."
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/assets/images/image15.png",
    discount: "",
    description: "This compact but perfectly designed apartment puts you in the heart of Tokyo's neon-lit Shibuya district. High-tech amenities include a smart toilet, automated lighting, and views of the famous scramble crossing."
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/images/image16.png",
    discount: "20",
    description: "Your luxury tented suite sits on a private game reserve, with an outdoor shower and deck overlooking a watering hole frequented by elephants. Morning game drives return to gourmet bush breakfasts under acacia trees."
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "/assets/images/image17.png",
    discount: "25",
    description: "This picture-perfect thatched cottage with climbing roses features a AGA stove and beamed ceilings. The cottage garden leads to a private stream, and walking paths connect to charming village pubs."
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "/assets/images/image18.png",
    discount: "30",
    description: "This Haussmann-era mansion on the Seine features gilded moldings, parquet floors, and a private boat dock. The walled garden with fountain offers a quiet retreat just minutes from Notre-Dame."
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/images/image19.jpg",
    discount: "",
    description: "Ski-in/ski-out access to some of the world's best slopes, with Matterhorn views from your private sauna. The chalet's gourmet kitchen is stocked by your personal chef, and the boot warmers ensure cozy mornings."
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "/assets/images/image20.jpg",
    discount: "60",
    description: "Your private peninsula villa features a coral stone infinity pool blending into the turquoise ocean. Giant granite boulders frame the beach, and your staff includes a marine biologist guide for snorkeling the house reef."
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/images/image21.jpg",
    discount: "",
    description: "Perched above the Atlantic, this modernist retreat offers floor-to-ceiling views of crashing waves. The wine cellar features South Africa's best vintages, and the deck is perfect for whale watching during migration season."
  }
];
