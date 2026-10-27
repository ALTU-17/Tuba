export type MenuItem = {
  name: string;
  price: string;
  sub?: string;
  star?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  urdu?: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "biryani",
    label: "Biryani & Rice",
    note: "The reason people cross town. Sealed handi, long grain, saffron.",
    items: [
      {
        name: "Chicken Dum Biryani",
        price: "₹200",
        sub: "House signature · slow-cooked",
        star: true,
      },
      { name: "Beef Biryani", price: "₹100", sub: "Old-city style" },
      { name: "Jeera Rice", price: "₹100" },
      { name: "Butter Rice", price: "₹150" },
      { name: "Chicken Biryani · Family Pack", price: "Ask", sub: "For 3–4 · call ahead" },
      { name: "Raita", price: "₹20", sub: "With boondi" },
    ],
  },
  {
    id: "chicken",
    label: "Chicken",
    note: "Full / Half / Quarter plate prices as displayed on the house board.",
    items: [
      { name: "Chicken Nawabi", price: "₹550 / 350 / 110", star: true },
      { name: "Chicken Nizami", price: "₹500 / 300 / 100" },
      { name: "Las Peshawari", price: "₹500 / 300 / 100" },
      { name: "Chicken Mumtaz", price: "₹500 / 350 / 100" },
      { name: "Chicken Tandoori Kapsa", price: "₹500 / 300 / 100" },
      { name: "Chicken Korma", price: "₹450 / 300 / 100" },
      { name: "Chicken Hyderabadi", price: "₹450 / 300 / 100" },
      { name: "Chicken Lakhori", price: "₹450 / 300 / 100" },
      { name: "Chicken Lajpati", price: "₹350 / 200 / 80" },
      { name: "Chicken Mastani", price: "₹450 / 300 / 100" },
      { name: "Chicken Banjara", price: "₹450 / 300 / 100" },
      { name: "Chicken Tandoori", price: "₹550 / 110" },
      { name: "Chicken Angara", price: "₹350 / 200 / 100" },
      { name: "Chicken Nargis", price: "₹220 / 100" },
      { name: "Chicken Mughlai", price: "₹300 / 100" },
      { name: "Chicken Lahori", price: "₹250 / 100" },
      { name: "Butter Chicken", price: "₹250 / 100" },
      { name: "Chicken Kadai", price: "₹450 / 300 / 100" },
      { name: "Chicken Afghani", price: "₹250 / 100" },
      { name: "Chicken Badami", price: "₹400 / 100" },
      { name: "Chicken Tawa", price: "₹300 / 100" },
      { name: "Chicken Dry", price: "₹300 / 100" },
      { name: "Anda Curry", price: "₹130", sub: "Plate" },
    ],
  },
  {
    id: "beef",
    label: "Beef & Mutton",
    note: "The old-city side of the kitchen — chaab, korma, kheema and slow gosh.",
    items: [
      { name: "Nawabi Gosh", price: "₹500 / 300", star: true },
      { name: "Nizami Gosh", price: "₹450 / 300" },
      { name: "Badami Gosh", price: "₹450 / 300" },
      { name: "Mutton Gosh", price: "₹450 / 300" },
      { name: "Chap Kapsa", price: "₹500 / 350" },
      { name: "Beef Kola Masala", price: "₹350 / 300" },
      { name: "Kasturi Gosh", price: "₹450 / 350" },
      { name: "Hyderabadi Gosh", price: "₹400 / 350" },
      { name: "Lakhori Gosh", price: "₹400 / 350" },
      { name: "Lal Korma Gosh", price: "₹200" },
      { name: "Singapur Gosh", price: "₹450 / 350" },
      { name: "Unde Lahori", price: "₹350 / 200" },
      { name: "Dum Lahori", price: "₹400 / 200" },
      { name: "Aslam Gosh", price: "₹150" },
      { name: "Tawa Gosh", price: "₹300 / 200" },
      { name: "Mutton Korma", price: "₹400 / 300" },
      { name: "Mutton Chaap", price: "₹300 / 200" },
      { name: "Mutton Khichadi", price: "₹200" },
      { name: "Bheja Fry", price: "₹100", sub: "Plate" },
      { name: "Chaap Masala", price: "₹200" },
      { name: "Chaap Fry", price: "₹200" },
    ],
  },
  {
    id: "starters",
    label: "Starters & Kebabs",
    note: "From the tandoor and the hanging grill, all evening.",
    items: [
      { name: "Chicken Tandoori", price: "₹400 / 230", star: true },
      { name: "Chicken Crispy", price: "₹450 / 250" },
      { name: "Beef Chat Kofteki", price: "₹400 / 200" },
      { name: "Chicken 65", price: "₹450 / 230" },
      { name: "Chicken Kantoki", price: "₹400 / 200" },
      { name: "Chicken Tikka", price: "₹320", sub: "Plate" },
      { name: "Chicken Leg Piece", price: "₹320 / 130", sub: "Plate / single piece" },
      { name: "Chicken Naga Tikka", price: "₹260", sub: "Plate" },
      { name: "Chicken Pahadi Tikka", price: "₹260", sub: "Plate" },
      { name: "Chicken Roll", price: "₹120", sub: "2 pieces" },
      { name: "Chicken Lollipop", price: "₹250 / 130" },
      { name: "Chicken Lollipop Masala", price: "₹250", sub: "Plate" },
      { name: "Chicken Balaiya Tikka", price: "₹260", sub: "Plate" },
      { name: "Chicken Manchurian", price: "₹230", sub: "Plate" },
      { name: "Chicken Chilli", price: "₹230", sub: "Plate" },
      { name: "Chicken Mota Katori", price: "₹250", sub: "10 pieces" },
    ],
  },
  {
    id: "roti",
    label: "Roti & Naan",
    note: "Baked to order. Best torn, shared, and used to finish the qaliya.",
    items: [
      { name: "Chapati", price: "₹10" },
      { name: "Tandoori Roti", price: "₹10" },
      { name: "Butter Tandoori", price: "₹15" },
      { name: "Lachha Paratha", price: "₹60" },
      { name: "Butter Naan", price: "₹60" },
      { name: "Garlic Naan", price: "₹80" },
    ],
  },
  {
    id: "chinese",
    label: "Chinese",
    note: "The late-evening detour — wok-tossed, quick, and made to share.",
    items: [
      { name: "Chicken Hakka Noodles", price: "₹120" },
      { name: "Chicken Schezwan Noodles", price: "₹120" },
      { name: "Chicken Singapuri Noodles", price: "₹120" },
      { name: "Chicken Triple Noodles", price: "₹150" },
      { name: "Chicken Fried Rice", price: "₹100" },
      { name: "Chicken Schezwan Rice", price: "₹120" },
      { name: "Chicken Singapuri Rice", price: "₹120" },
      { name: "Chicken Triple Rice", price: "₹200" },
    ],
  },
  {
    id: "veg",
    label: "Veg",
    note: "A compact vegetarian list, cooked in a separate prep line.",
    items: [
      { name: "Butter Paneer", price: "₹200" },
      { name: "Paneer Masala", price: "₹150" },
      { name: "Paneer Manohara", price: "₹180" },
      { name: "Shahi Paneer", price: "₹180" },
      { name: "Palak Paneer", price: "₹150" },
      { name: "Dal Tadka", price: "₹150" },
      { name: "Shev Bhaji", price: "₹130" },
    ],
  },
];

export const totalDishes = menu.reduce((sum, category) => sum + category.items.length, 0);
