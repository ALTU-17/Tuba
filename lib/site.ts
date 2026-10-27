export const site = {
  name: "Hotel Tuba",
  legal: "Hotel Tuba · Tuba Group",
  since: 2012,
  owner: "Ilyas Qureshi",
  phone: "099706 66683",
  phoneHref: "tel:+919970666683",
  address:
    "V8PR+R8W, Champa Chowk Rd, Kaiser Colony, Mondha, Chhatrapati Sambhajinagar, Maharashtra 431001",
  addressShort: "Champa Chowk, Kaiser Colony, Aurangabad",
  plusCode: "V8PR+R8W",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Hotel+Tuba+Champa+Chowk+Aurangabad",
  instagram:
    "https://www.instagram.com/popular/tuba-hotel-aurangabad/?hl=en",
  hours: "7:00 AM – 11:30 PM",
  familyHours: "12:00 PM – 12:00 AM",
  rating: "4.2",
  reviews: 818,
  price: "₹200–400",
  fssaiNote:
    "FSSAI licence and food-safety records are maintained at the counter — ask, and we will show you.",
} as const;

export const navLinks = [
  { label: "Home", href: "#home", index: "01" },
  { label: "The House", href: "#heritage", index: "02" },
  { label: "Signatures", href: "#signatures", index: "03" },
  { label: "Menu", href: "#menu", index: "04" },
  { label: "Family", href: "#family", index: "05" },
  { label: "Hygiene", href: "#hygiene", index: "06" },
  { label: "Tuba Group", href: "#group", index: "07" },
  { label: "Visit", href: "#visit", index: "08" },
] as const;
