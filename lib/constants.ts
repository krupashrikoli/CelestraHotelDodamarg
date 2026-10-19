export const GHD_CORPORATE_SITE = "https://www.ghdhotels.in";
export const SAMRAYA_SITE = "https://samraya.ghdhotels.in";
export const NIVAARA_SITE = "https://nivaara.ghdhotels.in";

export const NIVAARA_LOGO = "/logos/nivaara-by-ghd-hotels-logo.webp";
export const CELESTRA_LOGO = "/logos/celestra-by-ghd-hotels-logo.webp";
/** Compact brand mark (footer / brand row). */
export const SAMRAYA_LOGO = "/logos/samraya-by-ghd-hotels-logo.webp";
/** Primary Samrāya lockup (footer brand row). */
export const SAMRAYA_HOTEL_LOGO = "/logos/samraya-hotel-logo.png";
export const GHD_LOGO = "/logos/ghd-hotels-main-logo.webp";

/** Copied from Samraya — used by Header property-mode nav. */
export const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ROOMS", href: "/rooms" },
  { label: "CITY ATTRACTIONS", href: "/city-attractions" },
  { label: "GALLERY", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "CONTACT", href: "/#contact" },
] as const;

/** Copied from Samraya — used by Header property-mode contact strip. */
export const SITE = {
  name: "GHD Hotels",
  tagline: "Luxury Hospitality in Goa, Thoughtfully Crafted",
  property: "Celéstra — Dodamarg",
  propertyDisplay: "Celéstra - Dodamarg",
  phone: "+91 838 002 0407",
  phoneHref: "tel:+918380020407",
  phoneSecondary: "+91 839 002 0408",
  phoneSecondaryHref: "tel:+918390020408",
  email: "info@ghdhotels.in",
  emailHref: "mailto:info@ghdhotels.in",
} as const;

export const FOOTER_SOCIAL = [
  {
    label: "Instagram",
    icon: "instagram" as const,
    href: "https://www.instagram.com/ghdhotels/",
  },
  {
    label: "Facebook",
    icon: "facebook" as const,
    href: "https://www.facebook.com/profile.php?id=61590444132512",
  },
  {
    label: "X",
    icon: "x" as const,
    href: "https://x.com/ghdhotels",
  },
  {
    label: "LinkedIn",
    icon: "linkedin" as const,
    href: "https://www.linkedin.com/company/ghd-hotels/",
  },
  {
    label: "YouTube",
    icon: "youtube" as const,
    href: "https://www.youtube.com/@ghdhotels",
  },
] as const;
