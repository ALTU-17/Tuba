import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Heritage from "@/components/Heritage";
import Signatures from "@/components/Signatures";
import MenuSection from "@/components/MenuSection";
import Family from "@/components/Family";
import Hygiene from "@/components/Hygiene";
import Group from "@/components/Group";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import { site } from "@/lib/site";

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Hotel Tuba",
  description:
    "A 12-year-old Mughlai biryani house in Champa Chowk, Aurangabad, known for chicken dum biryani, naan qaliya, beef chaab and tandoori kebabs.",
  image: "https://hoteltuba.in/images/biryani-bucket.webp",
  servesCuisine: ["Mughlai", "Indian", "Biryani", "Chinese"],
  priceRange: "₹200–400",
  telephone: "+91-99706-66883",
  founder: { "@type": "Person", name: site.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Champa Chowk Rd, Kaiser Colony, Mondha",
    addressLocality: "Chhatrapati Sambhajinagar",
    addressRegion: "Maharashtra",
    postalCode: "431001",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: String(site.reviews),
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "23:30",
    },
  ],
};

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Chicken dum biryani",
          "Naan qaliya",
          "Beef chaab",
          "Tandoori kebabs",
          "Mutton korma",
          "Butter naan",
          "Family cabins",
          "FSSAI-safe kitchen",
        ]}
      />
      <Heritage />
      <Signatures />
      <MenuSection />
      <Family />
      <Hygiene />
      <Group />
      <Reviews />
      <Visit />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
